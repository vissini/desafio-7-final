import React, {useEffect, useState} from "react";
import { getThreads } from "./Api";

import {
  Link
} from "react-router-dom";


const Threads = () => {

  const [threads, setThreads] = useState([]);
  
  const handleGetThreads = async () => {
    const result = await getThreads();     
    setThreads(result.data);
    return result;
  }

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    handleGetThreads();
  },[]);

  return (
    <React.Fragment>
      <ul>
        {threads.map((el, idx) => (
          <li key={idx} data-test="thread">
            <Link to={"/thread/"+el.slug} >
              <h5>{el.title}</h5>
            </Link>
            
          </li>
        ))}
      </ul>
]
    </React.Fragment>
  );
};

export { Threads };
