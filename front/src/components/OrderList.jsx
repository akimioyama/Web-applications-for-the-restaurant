import React from "react";
import { OrderItem } from "./OrderItem"

const OrderList = ({ post, sessionId, change, table }) => {
  const qwe = () => {
    console.log(post);
  };

  const changeList = (newList) => {
    change(newList)
  }

  return (
    <div className="OrderList">
      {post?.map((q) => (
        <OrderItem key={q.id} info={q} table={table} sessionId={sessionId} change={changeList} />
      ))}
    </div>
  );
};

export { OrderList };
