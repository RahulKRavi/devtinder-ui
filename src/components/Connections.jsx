import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Connections = () => {
  const [connections, setConnections] = useState([])
  const fetchConnections = async () => {
    const res = await axios.get(BASE_URL + '/user/requests/connections',{
      withCredentials: true
    })
    console.log(res?.data?.data)
    setConnections(res?.data?.data)
  }
  useEffect(()=>{
    fetchConnections();
  },[])
  return (
    connections.length !==0 && (
      <>
        {connections.map((item)=>{
          const {_id,firstName,lastName,about,photoURL} = item;

          return (
            <div key={_id}className="card card-side bg-base-100 shadow-sm w-80 m-auto my-4">
              <figure>
                <img src={photoURL} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <p>kindey</p>
              </div>
            </div>
          );
        })}
      </>
    )
  )
}

export default Connections