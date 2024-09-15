import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Projects</h2>

      <div className="projects-container">

        <div className="projects-box">
          <img src={project3} alt="Travello" />
          <div className="projects-info">
            <h4>Travello</h4>
            <p>Travello is a multipurpose travel and tour booking system. You can book, edit, and update flights, with an admin dashboard that provides a complete overview of all users, admins, flights, tickets, seats, profit, and messages—all in one.</p>
            <a href="#"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="projects-box">
          <img src={project2} alt="Property Nexus" />
          <div className="projects-info">
            <h4>Property Nexus</h4>
            <p>Property Nexus is a comprehensive web application designed to simplify the process of advertising, inquiring, and purchasing properties. Whether you're a property owner listing your property, a buyer searching for the perfect home, or an agent managing multiple listings.</p>
            <a href="#"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="projects-box">
          <img src={project1} alt="Task Management System" />
          <div className="projects-info">
            <h4>Task Management System</h4>
            <p>A web application designed to help you manage your tasks efficiently and stay organized.</p>
            <a href="#"><i className="bx bx-link"></i></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
