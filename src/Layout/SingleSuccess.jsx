import React from 'react';

const SingleSuccess = ({ s }) => {
  const {name,skill,story,image}=s
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm mb-4 mx-auto h-full">
        <figure>
          <img 
            className='h-[250px] w-full object-cover'
            src={image}
            alt=''
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"><span>Name : </span> { name}</h2>
          <h3 className="font-semibold"><span className='font-bold'>Skill : </span> { skill}</h3>
          <p>
            {story}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleSuccess;