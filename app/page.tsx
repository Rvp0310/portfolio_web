'use client';
import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Contact_Resume from "./components/sections/Contact_Resume";

const tabs = ['About', 'Projects', 'Certifications', 'Contact And Resume'];

export default function Home() {
  const [val, setVal] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setVal(newValue);
    };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const renderSection = () => {
    switch (val) {
      case 0:
        return <About />;
      case 1:
        return <Projects />;
      case 2:
        return <Certifications />;
      case 3:
        return <Contact_Resume />;
      default:
        return null;
    }
  };

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Tabs value={val} onChange={handleChange} centered>
        {tabs.map((tab, index) => (
          <Tab
          className='nav_'
            key={tab}
            label={tab}
          />
        ))}
      </Tabs>
    </Box>
    <div className="sect">
      {
        renderSection()
      }
    </div>
    </>
  );
}
