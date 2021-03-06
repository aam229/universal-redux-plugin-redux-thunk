import thunk from 'redux-thunk';
import { hooks, environments, positions, register } from 'universal-redux';

register(hooks.CREATE_REDUX_MIDDLEWARE, function(data){
  return {
    ...data,
    middleware: [
      ...data.middleware,
      thunk
    ]
  } ;
}, {
  environments: [
    environments.SERVER,
    environments.CLIENT,
    environments.PRODUCTION,
    environments.DEVELOPMENT
  ],
  position: positions.BEFORE
});
