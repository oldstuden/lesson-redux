import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdrow } from 'redux/accountSlice';
export const Account = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.account.balance);
  return (
    <div>
      <div>Balance: {balance}$</div>
      <button onClick={() => dispatch(deposit(10))}>Deposit</button>
      <button onClick={() => dispatch(withdrow(5))}>Withdrow</button>
    </div>
  );
};
