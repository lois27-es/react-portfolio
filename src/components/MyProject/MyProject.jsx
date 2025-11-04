import React from 'react'
import './MyProject.css'
import theme_patter from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyProject = () => {
    return (
        <div id= 'portfolio' className='myproject'>
            <div className="myproject-title">
                <h1>My Latest Projects</h1>
                <img src={theme_patter} alt="" />
            </div>

            {/* Project Grid */}
            <div className="myproject-container">
                {mywork_data.map((work, index) => (
                    <div className="project-card" key={index}>
                        <img src={work.w_img} alt={work.w_name} className="project-image" />
                        <div className="project-info">
                            <h3>{work.w_name}</h3>
                            <p>{work.w_desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="myproject-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyProject
