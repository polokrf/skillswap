import React, { use } from 'react';
import ProvidersCard from './ProvidersCard';



const Provider = ({ providers }) => {
  const provider = use(providers);

  return (
    <div className="md:max-w-[1440px] w-full mx-auto p-2">
      <div className='p-2 md-p-0'>
        <h1 className='text-3xl font-bold text capitalize my-[30px]'>Top Rated Providers</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  p-2 md:p-0 ">
        {provider.map(p => (
          <ProvidersCard key={p.skillId} p={p}></ProvidersCard>
        ))}
      </div>
    </div>
  );
};

export default Provider;