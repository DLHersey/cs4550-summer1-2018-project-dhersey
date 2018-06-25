let _singleton = Symbol();

const BASE_RECIPE_API_URL = 'https://api.edamam.com/search?app_id=0c5eb4f6&app_key=6105e2f09e41dc0cc72692039781df82';

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
        //debugger;
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