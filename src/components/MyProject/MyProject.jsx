import React from 'react'
import './MyProject.css'
import theme_patter from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyProject = () => {
    return (
        <div className='myproject'>
            <div className="myproject-title">
              <h1>My latest project</h1>
              <img src={theme_patter} alt="" />
            </div>
            <div className="myproject-container">
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            <div className="myproject-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}
export default MyProject
