import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {
  const { update } = use(AuthContext);
  const navigate = useNavigate()

  const handelUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const person = {
      displayName: name,
      photoURL:photo
    }
    update(person).then(result => {
      toast.success('Successful')
      navigate('/profile')
    }).catch(err => {
      toast.error(err.message)
    })
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="text-center mt-3">
          <h1 className="text-3xl font-bold">Update now!</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handelUpdate}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="Name" />
              <label className="label">PhotoURL</label>
              <input type="text" name='photo' className="input" placeholder="photo-URL" />

              <button className="btn btn-neutral mt-4">Update Profile</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;