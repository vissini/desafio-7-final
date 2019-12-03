import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:3000/data"
  baseURL: "http://localhost:1338/api/"
});

const getThreads = async (  ) => {
  try{
    const { data } = await API.get(`threads`);
    return data;
  }catch (error){
    return null;

  }
};

const getThreadBySlug = async ( slug ) => {
  try{
    console.log(slug);
    const { data } = await API.get(`threads/${slug}`);
    return data;
  }catch (error){
    return null;

  }
};

export { getThreads, getThreadBySlug };
