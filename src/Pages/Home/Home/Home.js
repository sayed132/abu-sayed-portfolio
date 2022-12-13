import React from 'react';
import Contact from '../Contact/Contact';
import Content from '../Content/Content';
import ProjectCard from '../Projects/ProjectCard';

const Home = () => {
    return (
        <div>
            <Content></Content>
            <ProjectCard></ProjectCard>
            <Contact></Contact>
        </div>
    );
};

export default Home;