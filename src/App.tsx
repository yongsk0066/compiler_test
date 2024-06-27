import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function DateComponentWithMemo() {
  'use memo';
  const date = new Date();
  return <div>{date.toLocaleTimeString()}</div>;
}

function DateComponentNoMemo() {
  const date = new Date();
  return <div>{date.toLocaleTimeString()}</div>;
}

function DateComponentWithState() {
  'use memo';

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
}

function App() {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      forceUpdate({});
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Current time with Memo: <DateComponentWithMemo />
        </p>
        <p>
          Current time with No Memo: <DateComponentNoMemo />
        </p>
        <p>
          Current time with State: <DateComponentWithState />
        </p>
      </div>
    </>
  );
}

export default App;
