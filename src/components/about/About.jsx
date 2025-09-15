import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
    return (
        <div className='about'>
            {/* Title */}
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            {/* About + Skills side by side */}
            <div className="about-row">
                {/* About Content in a container */}
                <div className="about-container">
                    <div className="about-content">
                        <p>
                            Over four years as a BSIT student, I have grown through learning,
                            projects, and collaboration. My goal is to turn this journey into
                            impactful contributions in the IT field.
                        </p>
                        <p>
                            I am highly adaptable and capable of learning new skills quickly.
                            With determination and curiosity, I embrace challenges as opportunities
                            to grow and improve, allowing me to contribute effectively in any environment.
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="about-skills">
                    <h2>My Skills</h2>
                    <div className="about-skill"><p>Excel</p><hr style={{ width: "50%" }} /></div>
                    <div className="about-skill"><p>Canva Designer</p><hr style={{ width: "70%" }} /></div>
                    <div className="about-skill"><p>Microsoft</p><hr style={{ width: "60%" }} /></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                </div>
            </div>

            {/* Achievements Section */}
            <div className="about-achievements">
                <h2>Achievements</h2>
                <div className="achievement-cards">
                    <div className="about-achievement">
                        <h3>Dean’s Lister</h3>
                        <p>for three consecutive years</p>
                    </div>
                    <div className="about-achievement">
                        <h3>Microsoft Office Specialist</h3>
                        <p>Excel Associate Office 2019</p>
                    </div>
                    <div className="about-achievement">
                        <h3>Completed Various</h3>
                        <p>IT-related projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
