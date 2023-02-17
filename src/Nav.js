import React, { useState} from "react";
import "./Nav.css";
import "./loader.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Search from "./Search";
import Loader from "./Loader";

function Nav() {
  const [query, setquery] = useState("");
  const [open, setOpen] = useState(false);
  const [loader] = useState(false);

  const search = (e) => {
    e.preventDefault();
    setOpen(true);
    setquery(e.target.value);
  };

  return (
    <div className="nav">
      <div className="nav_logo">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="netflix"
        />
      </div>
      <form
        className={
          open ? "search__show search__container" : "search__container"
        }
        onSubmit={(e) => search(e)}
      >
        <SearchIcon />
        <input
          type="text"
          placeholder="Search😉"
          value={query}
          onChange={(e) => search(e)}
        />
        <strong className="pop">
          <CloseIcon onClick={() => setOpen(false)} />
        </strong>
      </form>

      <div className="search__btn" onClick={() => setOpen(true)}>
        <SearchIcon />
      </div>

      <div className={!open ? "close" : "close close__show"}>
        {loader ? <Loader /> : <Search query={query} />}
      </div>
    </div>
  );
}

export default Nav;
