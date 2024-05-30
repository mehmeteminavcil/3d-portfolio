import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My
        <span className="font-semibold blue-gradient_text">Projects</span>
      </h1>
      <div className="flex-col gap-3 mt-5 text-slate-500">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          architecto pariatur vel ex? Ullam, libero.
        </p>
      </div>
      <div className="flex flex-wrap gap-16 my-20">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full " key={project.name}>
            <div className="w-12 h-12 block-container">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="flex items-center justify-center btn-front rounded-xl">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="object-contain w-1/2 h-1/2"
                />
              </div>
            </div>
            <div className="flex flex-col mt-5 ">
              <h4 className="text-2xl font-semibold font-poppins">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="flex items-center gap-2 mt-5 font-poppins">
                <Link
                  to="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="object-contain w-4 h-4"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
