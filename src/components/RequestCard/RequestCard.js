import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { Box, Button, CardActions, Tooltip } from '@mui/material';
const RequestCard = ({ name, email, phone, subject }) => {

  return (
    <Card sx={{maxWidth: {xs: 300, md: 350}, justifyContent: "space-between", display: "flex", flexDirection: "column", boxShadow: '1px 1px 8px 5px rgba(0, 0, 0, 0.2)'}}>
      <CardContent sx={{p: 2}}>
        <Box sx={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative'}}>
            <Typography variant="h5" gutterBottom>
              {name}
            </Typography>
            <Tooltip title="Information" arrow placement="top">
                <NewReleasesIcon />
            </Tooltip>
        </Box>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Email: {email}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Phone Number: {phone}
        </Typography>
        <Typography variant="body1">
          Subject: {subject}
        </Typography>
      </CardContent>
      <CardActions sx={{bgcolor:'blue', color: 'whitesmoke', p: 0}}>
        <Button fullWidth size="small"sx={{color: 'white', fontWeight: 'bold', height: '100%', p: 1}}>
            Mark As Contacted
        </Button>
      </CardActions>
    </Card>
  );
};

export default RequestCard;
