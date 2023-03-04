import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import CouponBanner from './CouponBanner';

function App() {
  const [title, setTitle] = useState<string | null>(`${window.innerWidth > 1440 ? 1440 : window.innerWidth}`)
  // 监听 resize事件 修改分辨率显示不同的标题 大于1440时 只显示1440
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1440) {
        setTitle('1440')
      } else {
        setTitle(`${window.innerWidth}`)
      }
    })
    return () => {
      window.removeEventListener('resize', () => {
        setTitle(null)
      })
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <CouponBanner title={title} />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
