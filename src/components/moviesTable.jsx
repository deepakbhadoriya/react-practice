import React from "react";
import Like from "./common/like";
import Table from "./common/table";

const moviesTable = ({ movies, onDelete, onLike, onSort, sortColumn }) => {
  const columns = [
    { id: 1, path: "title", label: "Title" },
    { id: 2, path: "genre.name", label: "Genre" },
    { id: 3, path: "numberInStock", label: "Stock" },
    { id: 4, path: "dailyRentalRate", label: "Rate" },
    { id: 5, content: (movie) => <Like liked={movie.liked} onClick={() => onLike(movie)} /> },
    {
      id: 6,
      content: (movie) => (
        <button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">
          Delete
        </button>
      ),
    },
  ];

  return <Table columns={columns} data={movies} onSort={onSort} sortColumn={sortColumn} />;
};

export default moviesTable;
