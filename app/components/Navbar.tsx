'use client';
import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const tabs = ['About', 'Projects', 'Certifications', 'Contact And Resume']

const Navbar = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("Current value:", value);
    setValue(newValue);
    console.log("Current value:", value);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        {tabs.map((tab, index) => (
          <Tab
          className='nav_'
            key={tab}
            label={tab}
          />
        ))}
      </Tabs>
    </Box>
  )
}

export default Navbar
