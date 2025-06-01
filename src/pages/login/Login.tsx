export default function Login() {
  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    // Here you would typically handle the login logic, e.g., sending data to an API
    console.log('Login Data:', { email, password });
  };
  return (
    <div className='log-in'>
      <h2>Existing User Login</h2>
      <form onSubmit={handleSubmitLogin}>
        <input type='email' placeholder='Email' name='email' required autoComplete='email' />
        <input type='password' placeholder='Password' name='password' required autoComplete='current-password' />
        <button type='submit' className='btn-1'>
          Login
        </button>
      </form>
    </div>
  );
}
