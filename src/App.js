import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NotFound } from './pages/NotFound';
import { Properties } from './pages/Properties';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Pre_Login } from './pages/Pre_Login';
import { Favorites } from './pages/Favorites';
import { Notifications } from './pages/Notifications';
import { Profile } from './pages/Profile';
import { Home } from './pages/Home';
import { New_property } from './pages/New_property';
import { My_properties } from './pages/My_properties';
import { Floating_button } from './components/Floating_button';
import { useContext, useEffect } from 'react';
import AuthContext, { AuthProvider } from './contexts/AuthContext';
import Axios from 'axios';
import { Update_property } from './pages/Update_property';


function App() {

  Axios.defaults.withCredentials = true;

  const { auth } = useContext(AuthContext);


  return (
    <div className='bg-color'>
      <BrowserRouter>

        {auth ?
          <div className=''>
            <Header></Header>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/properties' element={<Properties />}></Route>
              <Route path='/home' element={<Home></Home>}></Route>
              <Route path='/profile' element={<Profile></Profile>}></Route>
              <Route path='/my/properties' element={<My_properties></My_properties>}></Route>
              <Route path='/new/property' element={<New_property></New_property>}></Route>
              <Route path='/update/property/:id' element={<Update_property></Update_property>}></Route>
              <Route path='/favorites' element={<Favorites></Favorites>}></Route>
              <Route path='/notifications' element={<Notifications></Notifications>}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
            <Floating_button> </Floating_button>
            <Footer></Footer>
          </div>
          :
          <div className='container-vh'>
            <Routes>

              <Route path='/' element={<Pre_Login />}></Route>
              <Route path='/home' element={<Pre_Login />}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/register' element={<Register></Register>}></Route>
              <Route path='*' element={<NotFound />}></Route>


            </Routes>

          </div>


        }





      </BrowserRouter >

    </div >


  );
}

export default App;
