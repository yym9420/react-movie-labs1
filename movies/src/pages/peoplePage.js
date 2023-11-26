import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getPeopleList } from "../api/tmdb-api";
import PageTemplate from '../components/templatePeopleListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { Grid } from '@mui/material';
import Paginator from '../components/Paginator'; // 引入 Paginator 组件

const PeoplePage = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  
  const getQueryParam = (param) => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get(param);
  };

  const initialPage = Number(getQueryParam('page')) || 1;

  const { data, error, isLoading, isError, refetch } = useQuery(['people', 
{ page }], getPeopleList);

  const [currentPage, setCurrentPage] = useState(initialPage);

  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    refetch({ page: newPage });
    navigate(`/people/page/${newPage}`);
  };

  useEffect(() => {
    if (!page) {
      navigate('/people/page/1');
    }
  }, [page, navigate]);

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }

  const people = data.results;

  return (
    <>
      <PageTemplate
        title="Popular People"
        people={people}
      />
      <Grid container justifyContent="center">
        <Grid item>
          
          <Paginator currentPage={currentPage} 
onPageChange={handlePageChange} />
        </Grid>
      </Grid>
    </>
  );
};

export default PeoplePage;
