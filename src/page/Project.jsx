import projectsData from '../../projectData';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div id="project" className=" lg:mt-10 ">
      <h2 className="text-center font-semibold text-3xl">My Project</h2>
      <div className="grid grid-cols-1 mt-10  md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Project;
