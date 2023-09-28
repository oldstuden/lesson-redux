export const accountReducer = (state = { balance: 500 }, action) => {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case 'account/withdrow':
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
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
