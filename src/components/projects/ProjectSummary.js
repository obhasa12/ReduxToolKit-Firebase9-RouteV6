const ProjectSummary = ({project}) => {
    return ( 
        <div className="card z-depth-0 project-summary" key={project.id}>
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Postes by Miyi</p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>      
     );
}
 
export default ProjectSummary;