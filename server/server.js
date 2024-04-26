import express from 'express';
// import express_session from 'express-session';
import cors from 'cors';

import * as recipes from './controllers/recipes.js'
import * as meals from './controllers/meals.js'
import * as ingredients from './controllers/ingredients.js'
// import * as users from './controllers/users'

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());


app.get('/recipes', recipes.handleGetRecipes);
app.get('/recipes/:id', recipes.handleGetRecipe);
app.post('/recipes', recipes.handleCreateRecipe);
app.delete('/recipes/:id', recipes.handleDeleteRecipe);
app.put('/recipes/:id', recipes.handleUpdateRecipe);

app.get('/meals', meals.handleGetRecipes);
app.get('/meals/:id', meals.handleGetRecipe);
app.post('/meals', meals.handleCreateRecipe);
app.delete('/meals/:id', meals.handleDeleteRecipe);
app.put('/meals/:id', meals.handleUpdateRecipe);

app.get('/ingredients', ingredients.handleGetIngredients);
app.get('/ingredients/:id', ingredients.handleGetIngredient);
app.post('/ingredients', ingredients.handleCreateIngredient);
app.delete('/ingredients/:id', ingredients.handleDeleteIngredient);
app.put('/ingredients/:id', ingredients.handleUpdateIngredient);



app.listen(port, function() {
    console.log(`server is running on port, ${port}`);
});