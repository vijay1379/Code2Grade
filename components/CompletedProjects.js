// components/CompletedProjects.js
import { useState } from "react";

const CompletedProjects = () => {
  // Example projects (you can replace this with dynamic data if necessary)
  const projects = [
    { id: 1, title: "Sentiment Analysis", description: "A project to analyze the sentiment of product reviews using machine learning." },
    { id: 2, title: "Recommendation System", description: "Developed a recommendation system to suggest products based on user preferences." },
    { id: 3, title: "Image Classification", description: "Implemented an image classification model using deep learning techniques." },
    { id: 4, title: "Predictive Analytics", description: "Built a model to predict customer churn and retention rates." },
    { id: 5, title: "Data Visualization", description: "Created interactive dashboards for data-driven decision-making." },
    { id: 6, title: "Time Series Forecasting", description: "Forecasted stock prices using ARIMA models." },
  ];

  // State to manage which projects are visible
  const [visibleProjects, setVisibleProjects] = useState(3);

  // Function to load more projects
  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <section id="completed-projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Completed Projects</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
            Here are some of the projects I've worked on
          </p>
        </div>

        {/* Displaying Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {projects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className="bg-background p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Show More Projects Button */}
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={loadMoreProjects}
              className="px-6 py-3 text-white bg-primary rounded-md"
            >
              Show More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompletedProjects;
