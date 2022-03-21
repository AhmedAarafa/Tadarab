import React from 'react'
import Navbar from "common/Navbar/Navbar";
import { Container } from "react-bootstrap";
import SearchResultsPage from "modules/Search Results/SearchResultsPage";


export default function SearchResults() {
  return (
    <>
    <Container fluid="xxl">
      <Navbar />
      <SearchResultsPage />
    </Container>  
    </>
  )
}
