import './App.css';
import { useState, useEffect } from "react"
import { TextField } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Recipe from './Recipe';

const APP_ID = "b90f5d8a";
const API_KEY = "10c2cd59ca48ade64b19224e0364433a";

function App() {
  const [search, setSearch] = useState(''); 
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    setRecipe([])
  }, []);
  const req = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}`
  async function getRecipe(){
    if(search == ''){
      alert("Please enter an ingredient...")
    }else{
      const res = await fetch(req).then(data => (data.json())).catch(err => {console.log(err.message)})
      setSearch('')
      if(res.hits.length == 0){
        alert("Sorry we found no recipies for your ingredient.")
      }
      setRecipe(res.hits)
    }
  }
  return (
    <div className="App">
      <div className="titleBar">
        <p>Recipe Search</p>
      </div>
      <div className="searchBar">
        <div className="searchField">
          <TextField fullWidth id="outlined-basic" label="Enter your ingredient" variant="outlined" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="searchIcon" onClick={getRecipe}>
          <SearchOutlinedIcon sx={{fontSize: 40}}/>
        </div>
      </div>
      <div className="recipeResult">
        {
          recipe.length == 0 ? "" : recipe.map(data => (
            <Recipe 
          image = {data.recipe.image}
          name = {data.recipe.label}
          calories = { data.recipe.calories}
          time = {data.recipe.totalTime}
          link = {data.recipe.url} />
          )) }
      </div>
    </div>
  );
}

export default App;
