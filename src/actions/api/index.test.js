import { getRecipes, getCsrfToken, submitLoginForm } from './';
import { expect } from 'chai';
import nock from 'nock';
import loginResponse from './testLoginResponse';

describe('Index api', function() {
  let recipeNock;
  const recipe ={
    "id": 1,
    "name": "Lemonade",
    "price": 1,
    "recipeIngredients": [
    {
      "id": 1,
      "recipe_id": 1,
      "ingredient_id": 1,
      "quantity": 2,
      "ingredient": {
	"id": 1,
	"name": "Lemon",
	"price": 0.1,
	"measure": "Juice",
	"stock": 100,
	"ingredientcol": null
      }
    },
    {
      "id": 2,
      "recipe_id": 1,
      "ingredient_id": 2,
      "quantity": 0.5,
      "ingredient": {
	"id": 2,
	"name": "Sugar",
	"price": 0.1,
	"measure": "Cup",
	"stock": 100,
	"ingredientcol": null
      }
    },
    {
      "id": 3,
      "recipe_id": 1,
      "ingredient_id": 3,
      "quantity": 4,
      "ingredient": {
	"id": 3,
	"name": "Water",
	"price": 0,
	"measure": "Cup",
	"stock": 100,
	"ingredientcol": null
      }
    }
    ],
    "products": []
  };

  beforeEach(() => {
    recipeNock = nock('/').get('recipe').reply(200, recipe);
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('getRecipies simple sucess', (done) => {
    getRecipes()
      .then((recipes) => {
        expect(recipes).to.be.an('array');
        expect(recipes).to.be.length.above(1);
        
        const recipe = recipes[0];

        expect(recipe).to.have.property('id');
      })
      .catch(done);
  });
});

describe('Index api', function() {
  let nockLogin, nockLoginProg;
  beforeEach(() => {
    nockLogin = nock('/')
      .get('login')
      .reply(200, loginResponse, {'Content-Type': 'text/html'});

    nockLoginProg = nock('/')
      .post('login_prog')
      .reply(200, {success: true}, {'Content-Type': 'application/json'});
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('submitLoginForm simple sucess', (done) => {
    submitLoginForm()
      .then(() => {
        nockLogin.isDone();
        nockLoginProg.isDone();
        done();
      })
      .catch(done);
  });
});
