//website title
//results slider
//what each profession box looks like

function ProfResults({ jobList }) {

    return(
        <div className="prof-container"> 

        <h1>website title</h1> 

        <h2>Based on your results, we think you would like...</h2>

        <div className="job-container">
        {jobList.map(job => (
          <professionLabel
            key={job.id}
            imageSrc={job.imageSrc}
            title={job.title}
            description={job.description}
          />
        ))}
      </div>

        </div>
       
    )
}


function professionLabel({ imageSrc, title, description }) {
    return (
      <div className="job-label">
        <img src={imageSrc} alt="Job" className="job-image" />
        <div className="job-info">
          <div className="job-title">{title}</div>
          <div className="job-description">{description}</div>
        </div>
      </div>
    );
  }