import React from "react";
import { Link } from "react-router-dom";

import { booksResponse } from "../constants";

export const Books = () => {
  return (
    <div>
      <h1>Books List</h1>
      {booksResponse.map((book) => (
        <Link key={book.bookId} to={`/${book.bookId}`}>
          {book.title}
        </Link>
      ))}
    </div>
  );
};
