import React from "react";
import Home from "./pages/Home";
import BookRoutes from "./BookRoutes";
import NotFound from "./pages/NotFound";
import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
/*
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  This is an alternative hook to get the same
  result by returning the {element}....
*/

/*
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/books" element={<BookList />} />
  <Route path="/books/:id" element={<Book />} />
  <Route path="/books/new" element={<NewBook />} />
  <Route path="*" element={<NotFound />} />
  </Routes>
*/

/*
  Link component propertyies :
  1. replace : replaces/removes the previous link by 
  pervious.previous link/page.. 
  
  2. reloadDocument : just as the name it reload the document
  on click of the link

  4. state: passes data between links in an object.
*/

/* 
  NavLink, another link compontent
  usage: takes the property style={({isActive}) => {
    return isActive ? {color: "red"} : {}
  }}
  tho navlink itself create a ,.active class to the active 
  component which can be styled with css..
  and instead of path this takes to="" property for
  same purpose.
*/

/*
  useNavigate hook used to navigate or redirect based
  some condition?
  const navigate = useNavigation()
  navigate("/"); 
*/