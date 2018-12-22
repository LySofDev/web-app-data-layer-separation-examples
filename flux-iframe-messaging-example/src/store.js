const flux = (middleware, reducer) => (state, action) => middleware(state, reducer, action);

const logger = (state, next, action) => {
  console.log('State', state);
  console.log('Action', action);
  console.log('Next', next);
  return next(action);
}

const counter = (state, action) => {
  return state + 1;
}

const loudCounter = flux(logger, counter);

console.log(loudCounter(0, null));
