import { useDispatch } from 'react-redux';
import { loadAccountFB } from '../redux/modules/account';
import { useEffect } from 'react';

const CheckLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAccountFB());
  }, []);
}

export default CheckLogin;