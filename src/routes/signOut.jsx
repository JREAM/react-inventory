import { useEffect } from 'react'

export default function SignOut() {

  useEffect(() => {
    localStorage.clear();
  }, [])


  return (
    <div className="container">
      <h2>You are Logged out</h2>
      <div>
        Thanks.
      </div>
    </div>
  );
}
