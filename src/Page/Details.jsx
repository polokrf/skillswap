import React from 'react';
import { MdOutlineStar } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';

const Details = ({ findId }) => {
  const {
    rating,
    image,
    price,
    skillName,
    skillId,
    providerName,
    providerEmail,
    slotsAvailable,
    description,
    category,
  } = findId

  const handelSubmit = (e) => {
    e.preventDefault()
    e.target.reset('')
    toast.success('Successful')
  }
  return (
    <div className=" py-[50px] flex flex-col min-h-screen justify-center items-center   md:w-[1440px] mx-auto w-full">
      <div className=" flex justify-center  md:flex-row flex-col">
        <img
          className=" md:h-[600px] mb-4 md:mb-0 h-[300px] md:mr-[15px] lg:mr-[30px] rounded-2xl"
          src={image}
          alt=""
        />
        <div>
          <h1 className=" capitalize mb-2 text-white">
            <span className="font-bold">Name :</span> {providerName}
          </h1>
          <h4 className=" capitalize  mb-2 text-white">
            <span className="font-bold  ">Email : </span>
            {providerEmail}
          </h4>
          <h2 className=" capitalize  mb-2 text-white">
            <span className="font-bold ">skill : </span> {skillName}
          </h2>
          <p className=" capitalize  mb-2 text-white">
            <span className="font-bold">info : </span> {description}
          </p>
          <div className="mb-6 text-white">
            {' '}
            <p className=" capitalize  mb-2">
              {' '}
              <span className="font-bold">category : </span> {category}
            </p>
            <p className=" capitalize  mb-2">
              {' '}
              <span className="font-bold">price : </span> ${price}
            </p>
            <p className=" capitalize  mb-2 flex items-center">
              {' '}
              <span className="font-bold"> rating : </span>
              <MdOutlineStar className="text-amber-400"></MdOutlineStar>{' '}
              {rating}
            </p>
            <p className=" capitalize  mb-2">
              {' '}
              <span className="font-bold">slotsAvailable : </span>
              {slotsAvailable}
            </p>
          </div>
          <div className="my-4 text-center">
            <h3 className="text-2xl font-semibold text-white">Book Session</h3>
          </div>
          <form
            onSubmit={handelSubmit}
            className="bg-gray-300 p-4 rounded-xl shadow-sm "
          >
            <div>
              <label className="block font-bold" htmlFor="name">
                Name
              </label>
              <input
                className="input w-full my-2"
                type="text"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block font-bold" htmlFor="email">
                Email
              </label>
              <input
                className="input w-full mt-2"
                type="Email"
                id="Email"
                placeholder="Your Email"
                
              />
            </div>
            <button className="w-full py-4 px-6 btn mt-3 liner text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Details;