import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // call the loading recipe function
    await model.loadRecipe(id); // loadRecipe is async () so need await

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

// controlRecipes works whenver window hash url changes
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
