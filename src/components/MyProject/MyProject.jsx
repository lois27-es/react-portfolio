import React, { useState, useEffect } from 'react';
import './MyProject.css';
import { supabase } from "../supabaseClient"; // IMPORT THIS
import CardSwap, { Card } from '../CardSwap/CardSwap';

const MyProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from('projects').select('*');
      if (data) setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div id="portfolio" className="myproject">
      <div className="section-title-wrapper">
        <h1>My Latest Projects</h1>
        <div className="section-underline"></div>
      </div>

      <div className="swap-wrapper">
        {projects.length > 0 ? (
          <CardSwap>
            {projects.map((work, index) => (
              <Card key={index}>
                <div className="swap-card">
                  {/* Note: In Admin, paste the full URL of the image */}
                  <img src={work.w_img} alt={work.w_name} />
                  <div className="swap-info">
                    <h3>{work.w_name}</h3>
                    <p>{work.w_desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        ) : (
          <p style={{color: 'white', textAlign: 'center'}}>Loading Projects...</p>
        )}
      </div>
    </div>
  )
}
export default MyProject;