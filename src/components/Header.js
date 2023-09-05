import React, { useEffect , useState} from "react";

const Header = ({Search}) => {

  const [search, setSearch]=useState('');

 /*useEffect(()=>{
  const formSearch=document.getElementById("sub-search");
  formSearch.addEventListener("submit", (e)=>{
    e.preventDefault();
    try{
      let searchInput=e.target.coinSearch.value;

      setSearch(searchInput);
    }
    catch(err){
      console.log(err);
    }

  })},[]
  )*/
Search=search;
  return (
    
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Coin app
          </a>
        </div>
       {/* <form className="d-flex" id="sub-search">*/}
          <input
            className="form-control me-sm-2"
            type="search"
            placeholder="Search"
            name="coinSearch"
            onChange={(e) => {
              console.log(e.target.value);
              setSearch(e.target.value)
              
            }}
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        {//</form>
}
      </div>
    </nav>
  );
};

export default Header;
