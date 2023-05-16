import {useState, useEffect} from 'react';
import { fetchMessage } from '../../Utils/fetchMethods';

const LandingPage = () => {
  const [message, setMessage] = useState(); 
  
  useEffect( () => {
    fetchMessage().then(data => setMessage(data)); 
  }, [])

  return (
    <>
      <div>LandingPage</div>
      <div>Message: {message}</div>
    </>
  )
}

export default LandingPage;