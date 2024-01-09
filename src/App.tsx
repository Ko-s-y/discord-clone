import React, { useEffect } from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { useAppSelector } from './app/hooks';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';

function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
    });
  }, []);

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
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
