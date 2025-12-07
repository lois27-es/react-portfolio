import React from 'react'
import './MyProject.css'
import CardSwap, { Card } from '../CardSwap/CardSwap'
import mywork_data from '../../assets/mywork_data'

const MyProject = () => {
  return (
    <div id="portfolio" className="myproject">
      <h1 className="swap-title">My Latest Projects</h1>

      <div className="swap-wrapper">
        <CardSwap>
          {mywork_data.map((work, index) => (
            <Card key={index}>
              <div className="swap-card">
                <img src={work.w_img} alt={work.w_name} />
                <div className="swap-info">
                  <h3>{work.w_name}</h3>
                  <p>{work.w_desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
    </div>
  )
}

export default MyProject

