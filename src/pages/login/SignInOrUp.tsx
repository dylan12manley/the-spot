import { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

export default function SignInOrUp() {
  const [isNewUser, setIsNewUser] = useState(true);
  return (
    <div className='signin-or-up'>
      <h1>Welcome to The Spot</h1>
      <button onClick={() => setIsNewUser(!isNewUser)}>{isNewUser ? 'I have an account' : 'Create new account'}</button>
      {isNewUser ? <SignUp /> : <Login />}
    </div>
  );
}
