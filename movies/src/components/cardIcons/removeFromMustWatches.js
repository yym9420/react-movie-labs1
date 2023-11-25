import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromMustWatchesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromMustWatches = (e) => {
    e.preventDefault();
    context.removeFromMustWatches(movie);
  };

  return (
    <IconButton
      aria-label="remove from must watches"
      onClick={handleRemoveFromMustWatches}
      color="secondary" 
      size="small" 
    >
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
};

export default RemoveFromMustWatchesIcon;
