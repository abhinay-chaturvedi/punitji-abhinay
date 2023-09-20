import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// const video = "../../../"
// import reacte from "../../../public/Media/demo.mp4"

export default function MediaCard() {
  return (
    <Card >
      <CardMedia
        sx={{ height: {md: 440, lg: 640}, objectFit: 'cover', }}
        image="/Media/demo.mp4"
        component="video"
        autoPlay
        muted
        loop
      />
    </Card>
  );
}