"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about.png" width={500} height={500} />
            <div>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I am an Engineer in Robotics and Digital Systems, a Cybersecurity Tester, and a 
                    Software Developer. I have experience working with ROS (Robot Operating System), 
                    Python, JavaScript, Flask, Jinja, PHP, HTML, Git, Nmap, OWASP ZAP, Nessus, MySQL, 
                    SQL Server, as well as cloud servers with AWS and Linux-based servers. 
                    Currently, I am learning React and Next.js. I learn quickly and adapt to needs; 
                    I'm always excited to work in a team to create incredible projects. 
                </p>
                <div className='flex flex-row mt-8'>
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
            </div>
        </div>
    </section>
  )
}

export default AboutSection