//futuramaapi.herokuapp.com/api/quotes/1
/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetQuotes() {
  const resp = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const jsonResp = await resp.json();
  const quote = jsonResp[0];
  const totalResults = jsonResp.length;

  return { quote, totalResults };
}
/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export function thenGetQuotes() {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((resp) => resp.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }));
}

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export async function asyncTryGetQuotes() {
  try {
    const resp = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const jsonResp = await resp.json();
    const quote = jsonResp[0];
    const totalResults = jsonResp.length;
    return { quote, totalResults };
  } catch (error) {
    console.error('error eroeroeroroeoroereeeerrrorrr');
  }
}

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */
export function thenTryGetQuotes() {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((resp) => resp.json())
    .then((result) =>
      ({ quote: result[0], totalResults: result.length }.catch(() =>
        console.error(
          'eeeeeeeerrrrrrrorrrrrrrrerrrrrrrrrrrrrrrrrrrrrrr help! error!'
        )
      ))
    );
}

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */
export async function asyncFinallyGetQuotes() {
  try {
    const resp = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const jsonResp = await resp.json();
    const quote = jsonResp[0];
    const totalResults = jsonResp.length;
    return { quote, totalResults };
  } catch (error) {
    console.error('error eroeroeroroeoroereeeerrrorrr');
  } finally {
    console.log('all done!');
  }
}

/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */
export function thenFinallyTryGetQuotes() {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((resp) => resp.json())
    .then((result) =>
      ({ quote: result[0], totalResults: result.length }
        .catch(() => console.error('help! error!'))
        .finally(() => console.log('all done!')))
    );
}
/**
 * TODO: Exercise 7: Call your function from exercise 5 using .then
 */
export function thenAsyncGetQuotes() {
  return asyncFinallyGetQuotes().then(() =>
    console.log('completed running afgq')
  );
}

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */
export async function thenGetAsyncQuotes() {
  return await fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((resp) => resp.json())
    .then((result) =>
      ({ quote: result[0], totalResults: result.length }
        .catch(() => console.error('help! error!'))
        .finally(() => console.log('all done!')))
    );
}
