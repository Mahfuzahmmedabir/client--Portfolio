import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { id, image, demo, repo, Features, name, title, description } = project;

  return (
    <div className="flex flex-1">
      <div className="card bg-base-100 mx-4   lg:mx-10 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>{title}</p>
          <div className="card-actions justify-end items-center">
            <Link to={demo} className=" border px-3 py-2">
              Live Link
            </Link>
            <Link to={repo} className=" border px-3 py-2">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
