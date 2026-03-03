import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { IconButton } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';

interface ProjectCardProps {
    project: {
        src: string;
        title: string;
        description: string;
        techstack: string[];
        repo_link: string;
        live_link: string;
    }
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
  return (
    <Card className="proj-card" sx={{ maxWidth: 345, height: 450, margin: "25px", display: "flex", flexDirection: "column" }}>
      <video
        src={project.src}
        controls
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
    />
      <CardContent sx={{flexGrow: 1}}>
        <Typography gutterBottom variant="h5" component="div" >
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {project.description}
        </Typography>
        <Stack className="mt-2" direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {project.techstack.map((tech, index) => <Chip key={index} label = {tech} color="info" size="small" />)}
        </Stack>
      </CardContent>
      <CardActions sx={{mt: "auto", mb: "3px"}}>
        <Tooltip title="GitHub Repository"><IconButton onClick={() => window.open(`${project.repo_link}`, "_blank")}><GitHubIcon sx={{color: '#211F86ff'}}/></IconButton></Tooltip>
        {project.live_link == "" ? <></>: <Tooltip title="Launch Project"><IconButton onClick={() => window.open(`${project.live_link}`, "_blank")}><LaunchIcon sx={{color: '#211F86ff'}}/></IconButton></Tooltip>}
      </CardActions>
    </Card>
  )
}

export default ProjectCard
