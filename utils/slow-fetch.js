/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

export function slowfetch(ms, ...args) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      window
        .fetch(...args)
        .then(response => resolve(response))
        .catch(error => reject(error));
    }, ms);
  });
}

export function fetch(...args) {
  return slowfetch(1500, ...args);
}

export default {
  slowfetch,
  fetch
};
