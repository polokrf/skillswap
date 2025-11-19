import axios from "axios";
import { useEffect, useState } from "react"

export const useSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios('../Skils.json').then(data => setSkills(data.data)).catch(err => setError(err)).finally(() => setLoading(false));
    
  }, []);

  return {skills,loading,error}
}