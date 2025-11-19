import React, { useEffect, useState } from 'react';
import { useSkills } from '../Hooks/useSkills';
import { useParams } from 'react-router';
import Details from './Details';
import Loader from '../Loder/Loader';

const SkillsDetails = () => {
  const { skills,loading } = useSkills();
  const { id } = useParams();
 
  const findId = skills.find(sId => sId.skillId == id);

  
  
  if (loading) {
    return <Loader></Loader>
  }
  
  return (
    <div className="bg-gray-800 p-2 md:p-0 ">
      <Details findId={findId}></Details>
    </div>
  );
};

export default SkillsDetails;