import React from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';

function App() {
  // const user = useSelector((state) => state.user.user);
  const user = null;

  return (
    <div className="App">
      { user ? (
        <>
          {/* {sidebar} */}
          <Sidebar />

          {/* chat */}
          <Chat />
        </>
      ) : (
        <>
          Login
        </>
      )}
    </div>
  );
}

export default App;
