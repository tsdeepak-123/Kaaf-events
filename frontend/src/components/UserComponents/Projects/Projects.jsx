import React from 'react';
import ProjectCardTwo from './ProjectCardTwo';
import { Grid } from '@mui/material'; // Import Grid component from MUI
import "./Project.css"

function Projects() {
  return (
    <div className='container mx-auto mt-6'>
      <div className='flex justify-center mb-8'>
        <h1 className='project-heading'>
          Our Latest Works
        </h1>
      </div>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10} sm={6} md={4}> 
          <ProjectCardTwo image='/Images/1.jpg' />
        </Grid>
        <Grid item xs={10} sm={6} md={4}>
          <ProjectCardTwo image='/Images/2.jpg' />
        </Grid>
        <Grid item xs={10} sm={6} md={4}>
          <ProjectCardTwo image='/Images/3.jpg' />
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
