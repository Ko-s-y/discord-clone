import React, { useEffect } from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { useAppSelector } from './app/hooks';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispatch(login({
          uid: loginUser.uid,
          photo: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName,
        }));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
