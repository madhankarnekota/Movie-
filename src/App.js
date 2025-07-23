import React,{useState} from 'react'


const App = () => {
  const [search,setSearch]=useState("");
  const [data,setData]=useState([]);
  const changeHandler= e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>
  {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
.then(response=>response.json())
.then(value=>setData(value.Search))
  }
 
  return (
    <div>
      <center>
        <h2>Search Your Faviourite Movie</h2> <br/>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={changeHandler} /> &nbsp;
          <input type="submit" value="Search"/>
        </form>
        <div className="row">
        {data.map(movie=>
        <div className="col-md-4">
          <div className="card" style={{"width": "18rem"}}>
  <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
  <div class="card-body">
    <h4 className="card-title">{movie.Title}</h4>
    <a href={movie.Poster} className="btn btn-primary" >Download Poster</a>
   </div>
   
  </div>
</div>
        )}
        </div>
      </center>
    </div>
  )
}


export default App