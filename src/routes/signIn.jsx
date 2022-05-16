import { useState, useEffect } from 'react'
import { v4 as uuid4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage]=useState('')
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')){
       return navigate("/");
    }
  }, []);

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      // let res = await fetch("https://httpbin.org/post", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     email: email,
      //     password: password,
      //   }),
      // })
      // let resJson = await res.json();
      // if (res.status === 200) {
      if (true) {
        localStorage.setItem('token', uuid4())
        localStorage.setItem('user', JSON.stringify({
          email,
          first_name: 'John',
          last_name: 'Doe'
        }))

        setEmail('');
        setPassword('');
        return navigate('/')
        setMessage('Logged In, But I want a Refresh (this page no longer access).');
      } else {
        setMessage('Invalid Login.');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="container">
      <div className="row">
        <div className="sign-in column column-50 column-offset-25">
        <h2>Sign In</h2>
          <div>
            {message ? <p>{message}</p> : null}
          </div>
          <form onSubmit={handleLogin}>
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Sign In" />
          </form>
        </div>
      </div>
    </section>
  );
}
