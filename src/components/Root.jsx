import React from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigation } from 'react-router';
import Loader from '../Loder/Loader';
Aos.init();

const Root = () => {
  const {state} = useNavigation()
  return (
    <div>
      {state === 'loading' ? (
        <Loader></Loader>
      ) : (
        <div className="flex flex-col min-h-screen">
          <header className="bg-white z-50">
            <Header></Header>
          </header>
          <main className="flex-1">
            <Outlet></Outlet>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Root;