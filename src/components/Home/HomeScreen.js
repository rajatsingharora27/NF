import React from 'react';
import Nav from '../NavBar/Nav';
import './HomeScreen.css';
import Banner from '../Banner/Banner';
import requests from '../../Request';
import Row from '../Row/row'



function HomeScreen() {
  return (
    <div className='homeScreen'>


      <Nav />

      <Banner />

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romace Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      


    </div>
  )
}

export default HomeScreen