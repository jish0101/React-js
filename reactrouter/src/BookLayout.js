import React from 'react'
import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  console.log(searchParams); // it contains info about porams n more;
  const number = searchParams.get("n");
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <Link to="/books/2">Book 2</Link>
      <Link to={`/books/${number}`}>Book { number }</Link>
      <Outlet context={{ hello: "World" }} />
      <input
        type="number"
        value={number}
        onChange={e => setSearchParams({n: e.target.value})}
      />
    </>
  )
}
