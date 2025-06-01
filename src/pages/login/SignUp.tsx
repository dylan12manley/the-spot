export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Here you would typically handle the sign-up logic, e.g., sending data to an API
    console.log('Sign Up Data:', { fullName, email, password });
  };

  return (
    <div className='sign-up'>
      <h2>New User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Full Name' name='fullName' required autoComplete='name' />
        <input type='email' placeholder='Email' name='email' required autoComplete='email' />
        <input type='password' placeholder='Password' name='password' required autoComplete='new-password' />
        <button type='submit' className='btn-1'>
          Sign Up
        </button>
      </form>
    </div>
  );
}
