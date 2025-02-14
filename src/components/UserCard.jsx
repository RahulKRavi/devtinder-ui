import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({user}) => {
  const dispatch = useDispatch();
  const {_id,firstName,lastName,about,photoURL} = user
  const handleRequest = async (status,id) => {
    await axios.post(BASE_URL + '/request/send/'+ status + '/' + id,{},{
      withCredentials: true
    })
    dispatch(removeFeed(_id))
  }
  return (
    <div className="card bg-base-300 w-64 shadow-sm max-h-96">
      <figure>
        <img
          src={photoURL}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " +lastName}</h2>
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-error" onClick={()=>handleRequest('ignored',_id)}>Ignore</button>
          <button className="btn btn-success" onClick={()=>handleRequest('interested',_id)}>Interested</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard