import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid } from "@mui/material";

const PeopleImages = ({ images }) => {

  const images_6 = images.images.profiles.slice(0, 6);

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <ImageList sx={{
          width: '100%',
          height: 300,
          overflowX: 'auto',
        }} cols={6}>
          {images_6.map((image) => (
            <ImageListItem key={image.file_path} sx={{ width: 120, height: 180 }}>
             <img
                srcSet={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                alt=''
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </>
  )
}

export default PeopleImages;
