import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import EmailField from './inputs/EmailField';
import PasswordField from './inputs/PasswordField';
import SubmitButton from './inputs/SubmitButton';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const {
    modal,
    setModal,
    login,
    setAlert,
    setLoading,
  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      await login(email, password);
      setModal({ ...modal, isOpen: false });
    } catch (error) {
      setAlert({
        isAlert: true,
        severity: 'error',
        message: error.message,
        timeout: 5000,
        location: 'modal',
      });
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setModal({ ...modal, title: 'Login' });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <DialogContentText>
            Please enter your email and password:
          </DialogContentText>
          <EmailField {...{ emailRef }} />
          <PasswordField {...{ passwordRef }} />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'space-between', px: '19px' }}>
          <Button size="small">Forgot Password?</Button>
          <SubmitButton />
        </DialogActions>
      </form>
      <DialogActions sx={{ justifyContent: 'center', py: '24px' }}>
        <Button variant="outlined" onClick={() => setModal({ ...modal, isOpen: false })}>
          Cancel
        </Button>
      </DialogActions>
    </>
  );
};

export default Login;
