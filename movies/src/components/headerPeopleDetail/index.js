import React from "react";
import { Button, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PeopleDetailHeader({ people }) {
  const navigate = useNavigate();

  
  const isMobile = window.innerWidth <= 768;

  return (
    <Paper>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 
'center' }}>
        <div style={{ marginBottom: '10px' }}>
          <Link to={`/people/${people.id}`}>
            <Button>Outline</Button>
          </Link>
          <Link to={`/people/${people.id}/images`}>
            <Button>Media</Button>
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', 
justifyContent: isMobile ? 'center' : 'space-between', width: '100%' }}>
          <IconButton aria-label="go back" onClick={() => navigate(-1)}>
            <ArrowBackIcon color="primary" fontSize="large" />
          </IconButton>
          <IconButton aria-label="go forward" onClick={() => navigate(+1)}>
            <ArrowForwardIcon color="primary" fontSize="large" />
          </IconButton>
        </div>
      </div>
    </Paper>
  )
}
