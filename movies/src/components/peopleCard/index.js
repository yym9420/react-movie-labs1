import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";

export default function PeopleCard({ people, action }) {

  const { id, name, known_for, profile_path } = people;

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <Link to={`/people/${id}`}>
          <CardMedia
            component="img"
            height="300"
            image={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : img}
            alt={name}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {known_for && known_for.length > 0 ? known_for[0].title : "Unknown"}
          </Typography>
        </CardContent>
      </CardActionArea>
      {action && action(people)}
    </Card>
  );
}
