import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Connections = () => {
  const [connections, setConnections] = useState([])

  const fetchConnections = async () => {
    const res = await axios.get(BASE_URL + '/user/requests/connections',{
      withCredentials: true
    })
    setConnections(res?.data?.data)
  }

  useEffect(()=>{
    fetchConnections();
  },[])

  return (
    <div className="min-h-screen flex flex-col flex-wrap">
      {connections.length === 0 ? 
      (<div className="flex justify-center text-center text-4xl mt-14">No Collections Found</div>):(
          connections.map((item) => {
            const { _id, firstName, lastName, about, photoURL } = item;

            return (
              <div key={_id} className="card card-side bg-base-100 shadow-sm w-80 my-4">
                <figure>
                  <img src={photoURL} alt="Movie" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{firstName + " " + lastName}</h2>
                  <p>{about}</p>
                </div>
              </div>
            );
          })
      )}
    </div>
  );
}

export default Connections