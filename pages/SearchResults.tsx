import React from 'react'
// import Navbar from "common/Navbar/Navbar";
// import SearchResultsPage from "modules/Search Results/SearchResultsPage";
import { Container } from "react-bootstrap";

import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import("common/Navbar/Navbar"));
const SearchResultsPage = dynamic(() => import("modules/Search Results/SearchResultsPage"));
const Footer = dynamic(() => import("common/Footer/Footer"));

export default function SearchResults() {
  return (
    <>
    <Container fluid="xxl">
      <Navbar />
      <SearchResultsPage />
      <Footer />
    </Container>  
    </>
  )
}
