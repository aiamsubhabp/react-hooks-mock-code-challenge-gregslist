import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(listings => setListings(listings))
  }, [])

  function handleDeleteListing(id) {
    const updatedListingsArray = listings.filter((listing) => {
      return(
      listing.id !== id
    )})
    setListings(updatedListingsArray)
  }

const listingCard = listings.map((listing) => (
    <ListingCard 
      key={listing.id}
      listing = {listing}
      onDeleteListing = {handleDeleteListing}
    />
  ))



  return (
    <main>
      <ul className="cards">
        {listingCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
