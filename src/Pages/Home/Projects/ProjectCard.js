import React, { useEffect, useState } from 'react';
import ProjectDetails from './ProjectDetails';

const ProjectCard = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        
            fetch('projects.json')
                .then(res => res.json())
                .then(data => {
                    console.log('users data',data);
                    setProjects(data)
                })
        
    }, [])
    return (
        <div className='my-5'>
        <h2 className='text-5xl text-center font-semibold'>Recently My Completed Projects!</h2>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
        {
                    projects.map(project => <ProjectDetails
                        key={project.id}
                        project={project}
                    ></ProjectDetails>)
                }
        </div>

    </div>
    );
};

export default ProjectCard;