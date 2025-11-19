import React, { use } from 'react';
import SingleSuccess from './SingleSuccess';

const SuccessCard = ({ successData }) => {
  const data = use(successData);

  return (
    <div className='mx-auto'>
      <div className='my-[30px] text-center mb-4'>
        <h1 className='font-bold capitalize text-3xl '>success story</h1>
      </div>
      <div className='grid md:grid-cols-2 md:gap-3 gap-4  grid-cols-1 p-2 md:p-0  justify-center  '>
        {data.map(s => (
          <SingleSuccess key={s.id} s={s}></SingleSuccess>
        ))}
      </div>
    </div>
  );
};

export default SuccessCard;