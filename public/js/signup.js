const signupFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const confirmPassword = document.querySelector('#confirmPassword').value.trim();
  if (email && password && confirmPassword) {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password, confirmPassword }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        alert('Sign Up Successful');
        window.location.href = '/homepage';
        document.location.replace('/');
      } else {
        console.log(response);
        alert(response.statusText);
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred during sign up.');
    }
  }
};

document.querySelector('#sign-up').addEventListener('submit', signupFormHandler);
