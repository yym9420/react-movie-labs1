import React from "react";
import { useParams } from 'react-router-dom';
import PeopleImages from "../components/peopleImages/";
import { getPeople, getPeopleImages } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import PeopleDetailHeader from "../components/headerPeopleDetail";

const PeopleImagesPage = () => {
  const { id } = useParams();
  const { data: images, error: imagesError, isLoading: imagesLoading } = 
useQuery(
    ["images", { id }],
    getPeopleImages
  );
  const { data: people, error: peopleError, isLoading: peopleLoading } = 
useQuery(
    ["people", { id }],
    getPeople
  );

  if (imagesLoading || peopleLoading) {
    return <Spinner />;
  }

  if (imagesError || peopleError) {
    return <h1>{imagesError?.message || peopleError?.message}</h1>;
  }

  return (
    <>
      {images ? (
        <>
          <PeopleDetailHeader people={people} />
          <PeopleImages images={images} />
        </>
      ) : (
        <p>Waiting for people details</p>
      )}
    </>
  );
};

export default PeopleImagesPage;
