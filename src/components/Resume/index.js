import resume from "../../assets/resume/My_Resume.pdf";

const Resume = () => {
  return (
    <>
      <section className="resume content">
      <h1>Resume</h1>
      <div className="resume-container">
          <p>Download my
            <a href={resume} download> resume 
            </a>
          </p>
          <section className="proficiencies">
              <h2>Front-end Proficiencies</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>Resposive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
              <h2>Back-end Proficiencies</h2>
              <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoosex</li>
                <li>GraphQL</li>
              </ul>
          </section>
      </div>
      </section>
    </>
  )
}

export default Resume;
