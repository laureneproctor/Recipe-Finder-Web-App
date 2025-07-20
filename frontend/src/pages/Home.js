import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/recipes')
      .then(res => setRecipes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="row">
      {recipes.map(recipe => (
        <div className="col-md-4 mb-4" key={recipe.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">Cook Time: {recipe.cookTime} min</p>
              <p className="card-text">{recipe.directions}</p>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
