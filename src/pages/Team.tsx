import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import BackgroundSection from '../components/BackgroundSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';

const Team: React.FC = () => {

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className='team-page-container'>
            <NavBar />
            <BackgroundSection descriptions={['Meet the', '2022-2023 FTS Team']} />
            <TeamSection />
            <ContactSection />
        </div>
    );
};

export default Team;