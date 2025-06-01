export default function Login() {
  return (
    <div className='login'>
      <h2>Existing User Login</h2>
      <form>
        <input type='email' placeholder='Email' name='email' required autoComplete='email' />
        <input type='password' placeholder='Password' name='password' required autoComplete='password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
