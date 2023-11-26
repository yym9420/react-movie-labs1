import React from "react";
import { useParams } from 'react-router-dom';
import PeopleDetails from "../components/peopleDetails/";
import { getPeople } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const PeopleDetailsPage = () => {
  const { id } = useParams();
  const { data: people, error, isLoading, isError } = useQuery(
    ["people", { id }],
    getPeople
  );

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <h1>{error.message}</h1>}
      {people ? (
        <PeopleDetails people={people} />
      ) : (
        <p>Waiting for people details</p>
      )}
    </>
  );
};

export default PeopleDetailsPage;
