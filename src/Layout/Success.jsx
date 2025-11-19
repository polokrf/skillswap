import React, { Suspense } from 'react';
import SuccessCard from './SuccessCard';
import Loader from '../Loder/Loader';

const successData = fetch('/success.json').then(res => res.json());

const Success = () => {
  return (
    <div>
      <Suspense fallback={<Loader></Loader>}>
        <SuccessCard successData={successData}></SuccessCard>
      </Suspense>
    </div>
  );
};

export default Success;