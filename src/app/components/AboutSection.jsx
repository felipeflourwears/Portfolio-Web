"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';


const TAB_DATA = [
   {
    title: "Skills",
    id: "skills",
    content: (
        <ul className='list-disc pl-2'>
            <li>Javascript</li>
            <li>Python</li>
            <li>Learning Typescript</li>
            <li>Learning React</li>
            <li>Learning Next JS</li>
            <li>Python</li>
            <li>AWS</li>
            <li>ROS</li>
            <li>GIT</li>

        </ul>
    )
   },
   {
    title: "Education",
    id: "education",
    content: (
        <ul className='list-disc pl-2'>
            <li>B.S. Robotics & Digital Systems Engineering</li>
            <li>Tecnológico de Monterrey, Santa Fe Campus</li>
        </ul>
    )
   },
   {
    title: "Certifications",
    id: "certifications",
    content: (
        <ul className='list-disc pl-2'>
            <li>AWS Academy Cloud Foundations</li>
            <li>Cibersecurity Training OEA</li>
            <li>Try Hackme Practitioner</li>
            <li>Capture the Flag OEA Cibersecurity</li>
            <li>Python Advanced</li>
            <li>Visual Display Solution Partner Program</li>
        </ul>
    )
   }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
  return (
    <section id="About" className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about.png" width={500} height={500} alt="Imagen sobre mí"/> {/* Corregido el alt */}
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg' style={{ textAlign: 'justify' }}>
                    I&apos;m an Engineer in Robotics and Digital Systems, a Cybersecurity Tester, and a 
                    Software Developer. I have experience working with ROS (Robot Operating System), 
                    Python, JavaScript, Flask, Jinja, PHP, HTML, Git, Nmap, OWASP ZAP, Nessus, MySQL, 
                    SQL Server, as well as cloud servers with AWS and Linux-based servers. 
                    Currently, I&apos;m learning React and Next.js. I learn quickly and adapt to needs; 
                    I&apos;m always excited to work in a team to create incredible projects. {/* Corregido el escape de comillas */}
                </p>

                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={ tab === "skills"}
                    >
                        {" "}
                        Skills{" "} 
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={ tab === "education"}
                    >
                        {" "}
                        Education{" "} 
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("certifications")} 
                        active={ tab === "certifications"}
                    >
                        {" "}
                        Certifications{" "} 
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection