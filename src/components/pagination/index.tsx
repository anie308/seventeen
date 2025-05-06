import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ReactPaginate from "react-paginate";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }: { currentItems: number[] }) {
  return (
    <>
      {currentItems.map((item) => (
        <div key={item}>
          <h3>Item #{item}</h3>
        </div>
      ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="flex justify-evenly"
      />
    </>
  );
}

function App() {
  return <PaginatedItems itemsPerPage={4} />;
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);

export default PaginatedItems;
