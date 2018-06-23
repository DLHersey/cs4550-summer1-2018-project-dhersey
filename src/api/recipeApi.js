const BASE_RECIPE_API_URL = 'https://api.edamam.com/search?app_id=2fe382ed&app_key=2d7e7901c20eb0335064e3fce88632d5';

class RecipeApi {
    static search(searchTerm) {
        console.log("in recipeapi: searchTerm: " + searchTerm);
        if (searchTerm != "") {

  debugger;
      return fetch(BASE_RECIPE_API_URL + "&q=" + searchTerm
      ).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    } 
    }
  }
  
  export default RecipeApi;
  