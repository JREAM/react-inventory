import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
    }
    return navigate('/')
  }, [])


  return (
    <div className="container">
      <h2>Logging Out</h2>
      <div>
        Please Wait...
      </div>
    </div>
  );
}
