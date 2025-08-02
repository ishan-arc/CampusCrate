import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Item Detail - {id}</h1>
      {/* Item details, claim button, messaging, and status updates to be implemented */}
    </div>
  );
}

export default ItemDetail;
