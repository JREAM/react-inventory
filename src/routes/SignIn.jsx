import { useState } from 'react'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
      let resJson = await res.json();
      if (res.status === 200) {
        setEmail('');
        setPassword('');
        setMessage('Logged In.');
      } else {
        setMessage('Invalid Login.');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <h2>Sign In</h2>
      <div>
        {message ? <p>{message}</p> : null}
      </div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
}
