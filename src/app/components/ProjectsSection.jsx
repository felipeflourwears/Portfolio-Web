"use client";
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "Kiosko Flask Implementation",
        description: "Python Flask",
        image: "/images/projects/kiosko.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/felipeflourwears/Kiosko",
        previewUrl: "https://github.com/felipeflourwears/Kiosko/blob/master/media/dashboard.png"
    },
    {
        id: 2,
        title: "Administration Next JS API Users",
        description: "Next JS",
        image: "/images/projects/administrationNextJS.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/felipeflourwears/AdministrationUser-NextJs",
        previewUrl: "https://github.com/felipeflourwears/AdministrationUser-NextJs/blob/master/img/home.png"
    },
    {
        id: 3,
        title: "Code Bar Product Media Player",
        description: "Javascript, CSS",
        image: "/images/projects/codeBar.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/felipeflourwears/CodeProduct-PlayerMedia",
        previewUrl: "https://github.com/felipeflourwears/CodeProduct-PlayerMedia/blob/master/media/main.png"
    },
    {
        id: 4,
        title: "Game Interaction with Printer",
        description: "Javascript, PHP, CSS",
        image: "/images/projects/printerMike.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/felipeflourwears/PrinterMike42",
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
    
    const [tag, setTag] = useState("All");
    
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag == "All"} 
                />
                <ProjectTag
                    onClick={handleTagChange} 
                    name="Web" 
                    isSelected={tag == "Web"} 
                />
                <ProjectTag
                    onClick={handleTagChange} 
                    name="Robotics" 
                    isSelected={tag == "Robotics"} 
                />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) => (
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