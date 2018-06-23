let _singleton = Symbol();

const BASE_RECIPE_API_URL = 'https://api.edamam.com/search?app_id=2fe382ed&app_key=2d7e7901c20eb0335064e3fce88632d5';

export default class RecipeService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new RecipeService(_singleton);
        return this[_singleton]
    }


    search(searchTerm, fromItem, toItem) {
        console.log("in recipeserviceclient: searchTerm: " + searchTerm + " start: " + fromItem + " end: " + toItem);
        debugger;
        if (searchTerm !== "") {
      return fetch(BASE_RECIPE_API_URL + "&q=" + searchTerm + "&from=" + fromItem + "&to=" + toItem)
      .then(function(response) {
          if (response.ok) {
            return response.json();
          } else {
              return null;
          }     
      }).catch(error => {
        return null;
      });
    } 
    }

    details(url) {
        debugger;
        console.log("in recipeservice client: details url: " + url);
        if (url !== "") {
      return fetch(BASE_RECIPE_API_URL + "&r=" + url)
      .then(function(response) {
          if (response.ok) {
            return response.json();
          } else {
              return null;
          }     
      }).catch(error => {
        return null;
      });
    }     
    }

}