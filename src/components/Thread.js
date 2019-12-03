import React, {useEffect, useState} from "react";
import { getThreadBySlug } from "./Api";

import {
  useParams,
  Link,
  useHistory
} from "react-router-dom";


const Thread = ({history}) => {
  const { thread_slug } = useParams();
  const [thread, setThread] = useState([]);
  const handleGetThreadBySlug = async (slug) => {
    const result = await getThreadBySlug(slug); 
    if(!result){
      history.push("/404");
      return false;
    }    
    setThread(result.data);
    return result;
  }

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    handleGetThreadBySlug(thread_slug);
  },[]);

  return (
    <React.Fragment>
    <p>{thread.title}</p>
    <p>{thread.total_replies}</p>
    <ul>
      {thread.replies ? thread.replies.map((el, idx) => (
        <li key={idx} data-test="thread">
          <h5>{el.user.name}</h5>
          <p>{el.body}</p>
        </li>
      )):<li>Nenhum registro</li>}
    </ul>

    <Link to="/" data-test="voltar">Voltar Inicio</Link>
    </React.Fragment>
  );
};

export {Thread}