import React from "react";

const tableHeader = ({ columns, onSort, sortColumn }) => {
  const raiseSort = (path) => {
    const tempSortColumn = { ...sortColumn };
    if ((tempSortColumn.path = path)) tempSortColumn.order = tempSortColumn.order === "asc" ? "desc" : "asc";
    else {
      tempSortColumn.path = path;
      tempSortColumn.order = "asc";
    }
    onSort(tempSortColumn);
  };

  const renderSortIcon = (column) => {
    return column.path !== sortColumn.path ? null : sortColumn.order === "asc" ? (
      <i className="fa fa-sort-asc" />
    ) : (
      <i className="fa fa-sort-desc" />
    );
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.id} onClick={() => raiseSort(column.path)}>
            {column.label}
            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default tableHeader;
