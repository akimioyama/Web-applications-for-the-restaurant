import React from "react";
import { Item } from "./Item";

const ItemList = ({posts}) => {

   

  return (
    <div className="allBooking1">
      {posts?.map((q) => (
        <Item post={q} key={q.id} />
      ))}
    </div>
  );
};

export { ItemList };