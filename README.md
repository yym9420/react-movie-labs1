# Assignment final - React movie app.

Name: YimingYu

## Overview.

react movie app

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Feature 1:log in and out you can register by email and password
+ Feature 2:add nowplaying movie page
+ Feature 3:filter people and the interface can switch between characters and corresponding movies
+ Feature 4:search for people you want in the peoplepage
+ Changes:modertify the siteHeader to choose the pages you want and add a logout card
+ 

## Setup requirements.

firebase

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ getpeoplelist
+ getpeople
+ getpeopleImage
+ getpeopleMovieCredit
+ gettopRated
+ getnowPlaying
  

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+             <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/mustWatch" element={<MustWatchMoviesPage />} />
              <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
              <Route path="/movies/nowPlaying" element={<NowPlayingMoviesPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/people/:id/images" element={<PeopleImagesPage />} />
              <Route path="/people/:id" element={<PeopleDetailsPage />} />
              <Route path="/people/page/:page" element={<PeoplePage />} />
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />


## Independent learning (If relevant).
firebase
const firebaseConfig = {
  apiKey: "AIzaSyBXNb7NCOa5ygV_KR62-6d9R9WmE98zU7w",
  authDomain: "movie-24261.firebaseapp.com",
  projectId: "movie-24261",
  storageBucket: "movie-24261.appspot.com",
  messagingSenderId: "736833278218",
  appId: "1:736833278218:web:fbbedfd4ade7af3ddd2af3",
  measurementId: "G-F7WJF8K2DP"
};
