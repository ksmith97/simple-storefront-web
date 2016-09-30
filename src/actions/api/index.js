import request from 'superagent';

export function getRecipes() {
  return new Promise((resolve, reject) => {
    request
      .get('/recipes')
      .set('Accept', 'application/json')
      .end((err, {body}) => {
        if (err) return reject(err);

        return resolve(body);
      });
  });
}
