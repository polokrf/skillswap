import React from 'react';
import { MdOutlineStar } from 'react-icons/md';

const ProvidersCard = ({ p }) => {
  const { skillName, providerName, providerEmail, rating, category, info,img } = p;
  return (
    <div className='my-5'>
      <div className="card bg-base-100  shadow-sm h-full">
        <figure>
          <img className='md:h-[300px] h-[250px] w-full object-cover'
            src={img}
            alt=''
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold capitalize">name : {providerName}</h2>
          <div>
            <h3 className='font-semibold capitalize'>skill : { skillName}</h3>
            <span className='font-semibold capitalize'>email : {providerEmail}</span>
          </div>
          <p className='mb-3'><span className='font-bold capitalize'>info : </span>
          {info}
          </p>

          <div className='flex justify-between'>
            <span className='font-semibold capitalize '>category : { category}</span>
            <span className='font-semibold capitalize flex'>rating :  <MdOutlineStar className='text-amber-400 text-xl'></MdOutlineStar> {rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvidersCard;