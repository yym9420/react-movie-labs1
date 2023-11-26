import React, { useState } from "react";
import PeopleList from "../peopleList";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FilterCard from "../filterPeople";

function PeopleListPageTemplate({ people, action }) {
  const [nameFilter, setNameFilter] = useState("");

  let displayedPeople = people.filter((p) => {
    return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ padding: '20px' }}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Popular People
          </Typography>
          <FilterCard onUserInput={handleChange} titleFilter={nameFilter} 
/>
        </Grid>

        <Grid item container spacing={2}>
          {displayedPeople.map((person) => (
            <Grid item key={person.id} xs={12} sm={6} md={4} lg={3}>
              <Typography variant="subtitle1">{person.name}</Typography>
              
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default PeopleListPageTemplate;
