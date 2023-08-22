import React from "react";
import { useParams } from "react-router-dom";

export const BookItem = () => {
  const params = useParams();
  console.log(params);
  return <div>Book Id: {params.bookId}</div>;
};
