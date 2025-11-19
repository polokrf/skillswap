import React from 'react';
import { MdOutlineStar } from 'react-icons/md';
import { Link } from 'react-router';

const SkilsCard = ({ skill }) => {
  const { rating, image, price, skillName, skillId } = skill;

  return (
    <div className="mb-5 ">
      <div className="card bg-base-100  shadow-sm h-full">
        <figure>
          <img
            className="md:h-[300px] h-[250px] w-full object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold mb-3">
            {skillName}
          </h2>
          <div className=" flex items-center">
            <span className="mr-5 text-xl font-semibold capitalize">
              Price : $ {price}
            </span>
            <span className="flex text-xl items-center font-semibold">
              {' '}
              Rating :
              <MdOutlineStar className="text-amber-400 text-xl"></MdOutlineStar>
              {rating}
            </span>
          </div>
          <div className="card-actions justify-end">
            <Link className="btn liner text-white" to={`/details/${skillId}`}>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkilsCard;