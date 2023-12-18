import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Kiosko Flask Implementation",
        description: "Python Flask",
        image: "/images/projects/kiosko.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/",
        previewUrl: "https://github.com/"
    },
    {
        id: 2,
        title: "Administration Next JS API Users",
        description: "Next JS",
        image: "/images/projects/administrationNextJS.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/",
        previewUrl: "https://github.com/"
    },
    {
        id: 3,
        title: "Code Bar Product Media Player",
        description: "Javascript, CSS",
        image: "/images/projects/codeBar.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/",
        previewUrl: "https://github.com/"
    },
    {
        id: 4,
        title: "Game Interaction with Printer",
        description: "Javascript, PHP, CSS",
        image: "/images/projects/printerMike.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/",
        previewUrl: "https://github.com/"
    },
    {
        id: 5,
        title: "ROS Puzzlebot Manchester Robotics",
        description: "ROS, Python, MakeFile",
        image: "/images/projects/puzzlebotlf.png",
        tag: ["All", "Robotics"],
        gitUrl: "https://github.com/",
        previewUrl: "https://github.com/"
    }


]

const ProjectsSection = () => {
  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {projectsData.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image}
                    tags={project}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            ))}
        </div>
    </>
  )
}

export default ProjectsSection