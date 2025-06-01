export default function SignUp() {
  return (
    <div className='signup'>
      <h2>New User Registration</h2>
      <form>
        <input type='text' placeholder='Full Name' name='fullName' required autoComplete='name' />
        <input type='email' placeholder='Email' name='email' required autoComplete='email' />
        <input type='password' placeholder='Password' name='password' required autoComplete='new-password' />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}
