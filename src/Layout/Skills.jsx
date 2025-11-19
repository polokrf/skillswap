import React from 'react';
import { useSkills } from '../Hooks/useSkills';
import SkilsCard from './SkilsCard';
import Loader from '../Loder/Loader';

const Skills = () => {
  const { skills,loading } = useSkills();

  if (loading) {
    return <Loader></Loader>
  }
  
  return (
    <div>
      <div className="my-[30px] ">
        <h1 className="text-3xl font-bold md:text-left text-center">Popular Skills </h1>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 '>
        {skills.map(skill => (
          <SkilsCard key={skill.skillId} skill={skill}></SkilsCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;