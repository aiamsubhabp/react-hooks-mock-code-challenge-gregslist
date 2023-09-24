import React, { useState } from "react";

function ListingCard({listing}) {

  const { id, description, image, location} = listing
  const [isFav, setIsFav] = useState(false)

  function handleFavClick() {
    console.log(listing)
    setIsFav(isFav => !isFav)
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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
