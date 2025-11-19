import React, { Suspense } from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Provider from './Provider';
import Work from './Work';
import Success from './Success';
import Loader from '../Loder/Loader';
const providers = fetch('/tec.json').then(res => res.json());
const Home = () => {
  return (
    <div>
      <section>
        <Hero></Hero>
      </section>
      <section className="md:max-w-[1440px] mx-auto w-full p-2 ">
        <Skills></Skills>
      </section>

      <section>
        <Suspense fallback={<Loader></Loader>}>
          <Provider providers={providers}></Provider>
        </Suspense>
      </section>
      <section className="md:max-w-[900px] mx-auto w-full p-2 md:p-4 md:border-4 md:border-blue-600 md:shadow-sm md:rounded-2xl my-[30px]">
        <Success></Success>
      </section>
      <section className="md:max-w-[1440px] mx-auto w-full p-2 md:p-2">
        <Work></Work>
      </section>
    </div>
  );
};

export default Home;