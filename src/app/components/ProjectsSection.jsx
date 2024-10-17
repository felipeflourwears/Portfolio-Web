"use client";
import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion"


const projectsData = [
    {
        id: 100,
        title: "Dashboard CMS",
        description: "Developed a CMS for real-time reporting of various services, including media playback and content management, utilizing Flask with Python and interact with API's ",
        image: "/images/projects/dashboardcmsi.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/felipeflourwears/Dashboard-VNOX.git",
        previewUrl: "https://popcmsi.io/login"
    },
    {
        id: 5,
        title: "ROS Puzzlebot Manchester Robotics",
        description: "Developed a Puzzlebot Edition from Manchester Robotics using ROS, Python, and Makefile. Implemented simulation with Gazebo on Ubuntu, utilizing ROS components (topics, messages, services). Integrated deep learning models for traffic signal detection.",
        image: "/images/projects/puzzlebotlf.png",
        tag: ["All", "Robotics"],
        gitUrl: "https://github.com/NACIONES-DESUNIDAS/puzzlebot_workspace_backup.git",
        previewUrl: "https://youtu.be/j8GXnlNNsoM?si=VcctCIki1Vw2K7GC"
    },
    {
        id: 110,
        title: "Funko Store",
        description: "Javascript + React Project, using different hooks to interact",
        image: "/images/projects/funkocart.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/felipeflourwears/FunkoCart",
        previewUrl: "https://clinquant-swan-1b49c4.netlify.app/"
    },
    {
        id: 101,
        title: "Easy Tip Calculator",
        description: "Typescript Project, using different hooks to interact",
        image: "/images/projects/easy-tip-calculator.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/felipeflourwears/Easy-Tip-Calculator",
        previewUrl: "https://vermillion-pavlova-c5b414.netlify.app/"
    },
    {
        id: 2,
        title: "Kiosko Flask Implementation",
        description: "Developed a restaurant order kiosk system using Python Flask for efficient order management. The application allows customers to place orders seamlessly, handling menu browsing, order submissions, and real-time updates.",
        image: "/images/projects/kiosko.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/felipeflourwears/Kiosko",
        previewUrl: "https://raw.githubusercontent.com/felipeflourwears/Kiosko/refs/heads/master/media/dashboard.png"
    },
    {
        id: 3,
        title: "Administration Next JS API Users",
        description: "Simple API requests built using Next.js",
        image: "/images/projects/administrationNextJS.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/felipeflourwears/AdministrationUser-NextJs",
        previewUrl: "https://test-administration-next-js-felipeflourwears.vercel.app/"
    },
    {
        id: 4,
        title: "Code Bar Product Media Player Interact with a Scaner of products",
        description: "Javascript, CSS, HTML",
        image: "/images/projects/codeBar.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/felipeflourwears/CodeProduct-PlayerMedia",
        previewUrl: "https://retailmibeex.net/codeproduct/"
    },
    {
        id: 11,
        title: "Game Interaction with Printer",
        description: "Developed functionality using JavaScript, PHP, CSS, and HTML to connect with the Printer Mike system. Implemented a promotional feature that rewards users with a discount or offer when they win a game.",
        image: "/images/projects/printerMike.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/felipeflourwears/PrinterMike42",
        previewUrl: "https://raw.githubusercontent.com/felipeflourwears/PrinterMike42/refs/heads/master/ticket.jpg"
    }
]

const ProjectsSection = () => {
    
    const [tag, setTag] = useState("All");

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0},
        animate: { y: 0, opacity: 1 }
    };

    return (
        <section id="Projects">
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
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ProjectCard 
                            key={project.id} 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image}
                            tags={project}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectsSection