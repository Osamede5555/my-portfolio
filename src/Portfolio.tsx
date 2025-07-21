import React from "react";

const projects = [
  {
    title: "Code Test Website",
    image: "https://via.placeholder.com/600x350?text=Code+Test+Website",
    link: "https://test-git-main-cynthias-projects-e0044a36.vercel.app",
    description: "A test project built to showcase frontend integration and Git deployment flow.",
  },
  {
    title: "Task Master Project",
    image: "https://via.placeholder.com/600x350?text=Task+Master+Project",
    link: "https://capstone-3mtt.vercel.app/frontend/html/login.html",
    description: "A task management app built as a capstone to demonstrate CRUD operations and user login flow.",
  },
  {
    title: "Image Editor",
    image: "https://via.placeholder.com/600x350?text=Image+Editor",
    link: "https://osamede5555.github.io/cynthia-photo-project",
    description: "A simple photo editor built with HTML, CSS, and JavaScript, allowing users to apply image effects.",
  },
];

const Portfolio = () => {
  return (
    <div className="container py-5">
      <div className="text-center text-dark mb-5">
        <h2 className="fw-bold">My Projects</h2>
        <p className="text-muted">Here are some of the projects I've worked on recently.</p>
      </div>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
