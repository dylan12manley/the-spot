import { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import './sign-in.css';

export default function SignInOrUp() {
  const [isNewUser, setIsNewUser] = useState(true);
  return (
    <div className='sign-in-or-up'>
      <h1>Welcome to The Spot</h1>
      <button onClick={() => setIsNewUser(!isNewUser)} className='btn-2'>
        {isNewUser ? 'I Exist! (... and already have an account)' : 'Create new account'}
      </button>
      {isNewUser ? <SignUp /> : <Login />}
    </div>
  );
}
