import {useState, useEffect} from "react";
import './career.css';
import {useSelector} from 'react-redux';

const Careers = () => {
  const [jobPositions, updateJobPositions] = useState([]);

  const jobs = useSelector(state => state.jobs.value);

  useEffect(() => {
    updateJobPositions(jobs);
  }, [jobs])

  return(
    <>
      <h1>Careers</h1>
      <div className="career-body">
        {
          jobPositions.map((item, index) => {
            return(
              <div className="career-body-inner" key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button>Apply here</button>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default Careers;
