import './App.css';
import Header from './components/Header';

import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeam, userAction } from './store/usersStore';
import axios from 'axios';
import { useEffect } from 'react';

function App() {


  const dispatch = useDispatch();

  useEffect(() => {

    const fetchAllUser = async () => {
      try {
        const responce = await axios.get("https://heliver-assignment-backend.onrender.com/api/allUsers");

        dispatch(userAction.allUsers(responce.data))

      } catch (err) {
        console.log(err)
      }

    }

    fetchAllUser()

  }, [])



 
 
  return (

    <>

      <Header />

      <Outlet />
    </>

  );
}

export default App;
