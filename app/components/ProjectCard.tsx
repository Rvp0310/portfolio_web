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
    <Card sx={{ maxWidth: 345, margin: "25px" }}>
      <video
        src={project.src}
        controls
        style={{ width: "100%", height: "190px" }}
    />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {project.description}
        </Typography>
        <Stack className="mt-2" direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {project.techstack.map((tech) => <Chip label = {tech} color="info" size="small" />)}
        </Stack>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => window.open(`${project.repo_link}`)}><GitHubIcon/></IconButton>
        {project.live_link == "" ? <></>: <IconButton onClick={() => window.open(`${project.live_link}`)}><LaunchIcon/></IconButton>}
      </CardActions>
    </Card>
  )
}

export default ProjectCard
