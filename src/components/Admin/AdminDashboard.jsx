import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; 
import './admin.css';
import { 
  FaLayerGroup, FaCode, FaUser, FaSignOutAlt, 
  FaPlus, FaPen, FaTrash, FaImage, FaEdit, FaTimes 
} from 'react-icons/fa';
import Particles from "../Particles/Particles";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('projects'); 
  const [items, setItems] = useState([]);
  const [bioData, setBioData] = useState({ bio_paragraph_1: '', bio_paragraph_2: '' });
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null); 
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) navigate('/login');
      else setCheckingAuth(false);
    };
    verifyUser();
  }, [navigate]);

  useEffect(() => {
    if (!checkingAuth) {
      if (activeTab === 'bio') fetchBio();
      else {
        fetchItems();
        resetForm();
      }
    }
  }, [activeTab, checkingAuth]);

  const fetchBio = async () => {
    const { data } = await supabase.from('profile').select('*').single();
    if (data) setBioData(data);
  };

  const fetchItems = async () => {
    setLoading(true);
    const { data } = await supabase.from(activeTab).select('*').order('id', { ascending: true });
    if (data) setItems(data);
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({});
    setFile(null);
    setEditingId(null);
    if (document.getElementById('fileInput')) {
      document.getElementById('fileInput').value = "";
    }
  };

  const uploadImage = async (file) => {
    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from('images').upload(fileName, file);
    if (error) {
      alert("Error uploading image: " + error.message);
      return null;
    }
    const { data } = supabase.storage.from('images').getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleEditClick = (item) => {
    setEditingId(item.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (activeTab === 'projects') {
      setFormData({ 
        w_name: item.w_name, 
        w_desc: item.w_desc, 
        existing_image: item.w_img 
      });
    } else if (activeTab === 'services') {
      setFormData({ 
        s_name: item.s_name, 
        s_desc: item.s_desc 
      });
    } else if (activeTab === 'skills') {
      setFormData({ 
        name: item.name, 
        percentage: item.percentage 
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    let imageUrl = formData.existing_image || '';
    
    if (file && activeTab === 'projects') {
      imageUrl = await uploadImage(file);
      if (!imageUrl) { setLoading(false); return; }
    }

    const itemPayload = { ...formData };
    delete itemPayload.existing_image;

    if (activeTab === 'projects') itemPayload.w_img = imageUrl;

    let error;

    if (editingId) {
      const { error: updateError } = await supabase
        .from(activeTab)
        .update(itemPayload)
        .eq('id', editingId);
      error = updateError;
    } else {
      const { error: insertError } = await supabase
        .from(activeTab)
        .insert([itemPayload]);
      error = insertError;
    }
    
    if (error) {
      alert("Operation failed: " + error.message);
    } else {
      resetForm();
      fetchItems();
    }
    setLoading(false);
  };

  const updateBio = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('profile').update(bioData).eq('id', 1);
    if (error) alert('Error updating bio'); 
    else alert('Bio updated successfully!');
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this item permanently?")) return;
    await supabase.from(activeTab).delete().eq('id', id);
    if (editingId === id) resetForm();
    fetchItems();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  if (checkingAuth) return <div className="loading-screen"><h2>Loading Panel...</h2></div>;

  return (
    <div className="admin-layout">

      {/* PARTICLES BACKGROUND */}
      <div className="admin-particles-bg">
        <Particles />
      </div>

      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Geraldine's Panel</h2>
        </div>

        <nav className="sidebar-nav">
          <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>
            <FaLayerGroup /> Projects
          </button>
          <button className={activeTab === 'services' ? 'active' : ''} onClick={() => setActiveTab('services')}>
            <FaImage /> Services
          </button>
          <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => setActiveTab('skills')}>
            <FaCode /> Skills
          </button>
          <button className={activeTab === 'bio' ? 'active' : ''} onClick={() => setActiveTab('bio')}>
            <FaUser /> About Me
          </button>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      <main className="main-content">
        <div className="page-header">
          <h1>{activeTab.toUpperCase()} MANAGER</h1>
        </div>

        {activeTab === 'bio' ? (
          <div className="form-card">
            <h3><FaPen /> Edit Profile Info</h3>
            <form onSubmit={updateBio}>
              <div className="form-group">
                <label>Paragraph 1</label>
                <textarea 
                  rows="4"
                  value={bioData.bio_paragraph_1}
                  onChange={e => setBioData({ ...bioData, bio_paragraph_1: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Paragraph 2</label>
                <textarea 
                  rows="4"
                  value={bioData.bio_paragraph_2}
                  onChange={e => setBioData({ ...bioData, bio_paragraph_2: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-submit">Save Changes</button>
            </form>
          </div>
        ) : (
          <div className="form-card" style={{ border: editingId ? '1px solid #f59e0b' : '' }}>
            <h3>
              {editingId ? <><FaEdit /> Edit Item</> : <><FaPlus /> Add New {activeTab.slice(0, -1)}</>}
            </h3>

            <form onSubmit={handleSubmit}>
              
              {activeTab === 'projects' && (
                <>
                  <div className="form-group">
                    <label>Project Name</label>
                    <input 
                      type="text" 
                      value={formData.w_name || ''} 
                      onChange={e => setFormData({ ...formData, w_name: e.target.value })}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Description</label>
                    <textarea 
                      rows="3"
                      value={formData.w_desc || ''}
                      onChange={e => setFormData({ ...formData, w_desc: e.target.value })}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Project Image {editingId && <small>(Leave empty to keep current)</small>}</label>
                    <input 
                      id="fileInput"
                      type="file" 
                      accept="image/*"
                      onChange={e => setFile(e.target.files[0])}
                      required={!editingId}
                    />
                  </div>
                </>
              )}

              {activeTab === 'services' && (
                <>
                  <div className="form-group">
                    <label>Service Name</label>
                    <input 
                      type="text"
                      value={formData.s_name || ''}
                      onChange={e => setFormData({ ...formData, s_name: e.target.value })}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Description</label>
                    <textarea 
                      rows="3"
                      value={formData.s_desc || ''}
                      onChange={e => setFormData({ ...formData, s_desc: e.target.value })}
                      required 
                    />
                  </div>
                </>
              )}

              {activeTab === 'skills' && (
                <>
                  <div className="form-group">
                    <label>Skill Name</label>
                    <input 
                      type="text"
                      value={formData.name || ''}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Percentage</label>
                    <input 
                      type="number"
                      value={formData.percentage || ''}
                      onChange={e => setFormData({ ...formData, percentage: e.target.value })}
                      required 
                    />
                  </div>
                </>
              )}

              <button 
                type="submit"
                className={editingId ? "btn-update" : "btn-submit"}
                disabled={loading}
              >
                {loading ? "Processing..." : editingId ? "Update" : "Add"}
              </button>

              {editingId && (
                <button type="button" className="btn-cancel" onClick={resetForm}>
                  <FaTimes /> Cancel
                </button>
              )}

            </form>
          </div>
        )}

        {activeTab !== 'bio' && (
          <div className="grid-container">
            {items.map(item => (
              <div key={item.id} className="grid-card" style={{ borderColor: editingId === item.id ? '#f59e0b' : '' }}>

                {activeTab === 'projects' && item.w_img && (
                  <div className="card-image">
                    <img src={item.w_img} alt="Project" />
                  </div>
                )}

                <div className="card-content">
                  <h3>{item.name || item.w_name || item.s_name}</h3>
                  {item.percentage && (
                    <p style={{ color: '#00c6ff', fontWeight: 'bold' }}>
                      {item.percentage}% Proficiency
                    </p>
                  )}
                  {(item.w_desc || item.s_desc) && (
                    <p>{(item.w_desc || item.s_desc).substring(0, 80)}...</p>
                  )}
                </div>

                <div className="card-actions">
                  <button className="btn-action btn-edit" onClick={() => handleEditClick(item)}>
                    <FaEdit /> Edit
                  </button>
                  <button className="btn-action btn-delete" onClick={() => handleDelete(item.id)}>
                    <FaTrash /> Delete
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
};

export default AdminDashboard;
