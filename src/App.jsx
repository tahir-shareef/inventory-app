import { useEffect, useState } from 'react';
import Routes from './Routes';
import './app.css';
import Loader from './components/loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // while applcation is loading very fastly a delay is added to show the loader
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <div className="app">{isLoading ? <Loader fullPage /> : <Routes />}</div>
  );
}

export default App;
