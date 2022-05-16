import { useState, useEffect } from 'react'
import { v4 as uuid4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      return navigate('/')
    }
  }, [])

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      // let res = await fetch("https://httpbin.org/post", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     email: email,
      //     password: password,
      //     confirmPassword: confirmPassword,
      //   }),
      // })
      // let resJson = await res.json();
      // if (res.status===200) {
      if (true) {
        localStorage.setItem('token', uuid4())
        localStorage.setItem('user', JSON.stringify({
          email,
          first_name: firstName,
          last_name: lastName
        }))

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        return navigate('/')
      } else {
        setMessage('Error with Form.');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="container">
      <div class="row">
        <div class="column column-50 column-offset-25">
          <h2>Sign Up</h2>
          <div>
            {message ? <p>{message}</p> : null}
          </div>
          <form onSubmit={handleLogin}>
            <label for="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label for="lastName">Last Name</label>
            <input
              label="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
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
            <label for="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </section>
  );
}
