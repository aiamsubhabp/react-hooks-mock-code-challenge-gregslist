import React, { useState } from "react";

function ListingCard({listing, onDeleteListing}) {

  const { id, description, image, location} = listing
  const [isFav, setIsFav] = useState(false)

  function handleFavClick() {
    console.log(listing)
    setIsFav(isFav => !isFav)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
      .then(r => r.json())
      .then(() => onDeleteListing(id))

  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFav ? (
          <button className="emoji-button favorite active" onClick={handleFavClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
