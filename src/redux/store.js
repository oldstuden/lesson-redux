import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  account: {
    balance: 500,
  },
};

export const deposit = value => {
  return {
    type: 'account/deposit',
    payload: value,
  };
};

export const withdrow = value => {
  return {
    type: 'account/withdrow',
    payload: value,
  };
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'account/deposit':
      return {
        account: {
          balance: state.account.balance + action.payload,
        },
      };
    case 'account/withdrow':
      return {
        account: {
          balance: state.account.balance - action.payload,
        },
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
