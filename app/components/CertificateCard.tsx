import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface CertificateCardProps {
    certificate: {
        src: string;
        name: string;
        year: string;
        org: string;
    }
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "25px", display: "flex", flexDirection: "column" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={certificate.src}
          alt={certificate.name}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{borderTop: "1px solid black"}}>
          <Typography gutterBottom variant="h5" component="div">
            {certificate.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Year: {certificate.year} <br/>
            Organisation: {certificate.org}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CertificateCard
