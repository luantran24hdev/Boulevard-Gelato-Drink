import store from '../store';

const ifNotAuthenticated = (to, from, next) => {
  if (store.getters.isLogin === false) {
    next();
  } else {
    next({
      name: 'home',
      query: {
        redirect: to.name,
      },
    });
  }
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLogin === true) {
    next();
  } else {
    next({
      name: 'login',
      query: {
        redirect: to.name,
      },
    });
  }
};

export { ifNotAuthenticated, ifAuthenticated };
