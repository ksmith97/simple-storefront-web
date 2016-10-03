'use strict';
import request from 'superagent';
import jquery from 'jquery';

export function getRecipes() {
  return new Promise((resolve, reject) => {
    request
      .get('/recipes')
      .set('Accept', 'application/json')
      .end((err, {body}) => {
        if (err) return reject(err);

        return resolve(body.recipes);
      });
  });
}
const recipes = [{"id":1,"name":"Lemonade","price":1,"recipeIngredients":[{"id":1,"recipe_id":1,"ingredient_id":1,"quantity":2,"ingredient":{"id":1,"name":"Lemon","price":0.1,"measure":"Juice","stock":100,"ingredientcol":null}},{"id":2,"recipe_id":1,"ingredient_id":2,"quantity":0.5,"ingredient":{"id":2,"name":"Sugar","price":0.1,"measure":"Cup","stock":100,"ingredientcol":null}},{"id":3,"recipe_id":1,"ingredient_id":3,"quantity":4,"ingredient":{"id":3,"name":"Water","price":0,"measure":"Cup","stock":100,"ingredientcol":null}}],"products":[]},{"id":2,"name":"Rum and Coke","price":5,"recipeIngredients":[{"id":4,"recipe_id":2,"ingredient_id":7,"quantity":1.5,"ingredient":{"id":7,"name":"Rum","price":1,"measure":"fl oz","stock":100,"ingredientcol":null}},{"id":5,"recipe_id":2,"ingredient_id":9,"quantity":5,"ingredient":{"id":9,"name":"Coke","price":0.1,"measure":"fl oz","stock":100,"ingredientcol":null}},{"id":6,"recipe_id":2,"ingredient_id":8,"quantity":1,"ingredient":{"id":8,"name":"Mint Leaf","price":0.25,"measure":"leaves","stock":100,"ingredientcol":null}}],"products":[]},{"id":3,"name":"Mojito","price":5,"recipeIngredients":[{"id":7,"recipe_id":3,"ingredient_id":3,"quantity":1.5,"ingredient":{"id":3,"name":"Water","price":0,"measure":"Cup","stock":100,"ingredientcol":null}},{"id":8,"recipe_id":3,"ingredient_id":7,"quantity":2,"ingredient":{"id":7,"name":"Rum","price":1,"measure":"fl oz","stock":100,"ingredientcol":null}},{"id":9,"recipe_id":3,"ingredient_id":8,"quantity":6,"ingredient":{"id":8,"name":"Mint Leaf","price":0.25,"measure":"leaves","stock":100,"ingredientcol":null}},{"id":10,"recipe_id":3,"ingredient_id":2,"quantity":4,"ingredient":{"id":2,"name":"Sugar","price":0.1,"measure":"Cup","stock":100,"ingredientcol":null}}],"products":[]}];

export function getRecipesMock() {
  return new Promise((resolve) => {
    return resolve(recipes);
  });
}

const getToken = body => {
  const $xml = jquery(jquery.parseHTML(body));
  return $xml.find('[name=_csrf_token]').val();
}

export function getCsrfToken() {
  return new Promise((resolve, reject) => {
    request
      .get('/login')
      .set('Accept', 'text/html')
      .end((err, body) => {
        if (err) return reject(err);
        const token = getToken(body);

        if(!token) return reject('Failed to retrieve CSRF token.');
        
        return resolve(token);
      });
  });
}

export function getUser() {
  return new Promise((resolve, reject) => {
    request
      .get
  });
}

export function postLoginForm(params) {
  return new Promise((resolve, reject) => {
    if(!params.username || !params.password) return reject('Missing params to login');

    request
      .post('login_prog')
      .set('Accept', 'application/json')
      .send(params)
      .end((err, body) => {
        if(err) return reject(err);
        else if(body.success !== true || body.error) return reject(body.error);
        
        return resolve();
      });
  });
}

export function submitLoginForm(form) {
  return getCsrfToken()
    .then(token => {
      const params = Object.assign({}, form, {'_csrf_token': token});
      return postLoginForm(params);
    })
}

export const submitLoginFormMock = () => new Promise(resolve=>resolve());
