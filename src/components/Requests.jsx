import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../utils/constants"

const Requests = () => {
  const [requests, setRequests] = useState([])

  const fetchRequests = async () => {
    const res = await axios.get(BASE_URL + '/user/requests/recieved',{
      withCredentials:true
    })
    setRequests(res?.data?.data)
  }

  const handleRequest = async (status,id) => {
    await axios.post(BASE_URL + '/request/recieved/' + status + "/" + id,{},{
      withCredentials:true
    })
    setRequests(requests.filter((item)=>item._id !== id))
  }
  useEffect(()=>{
    fetchRequests()
  },[])

  return (
    <div className="min-h-screen">    
      {requests.length === 0 ? (<div className="flex justify-center text-center text-4xl mt-14">No Requests Found</div>):(
      requests.map((item) => {
        const {_id,firstName,lastName,about} = item.senderId
        const req_id = item._id
        return (
          <div key={_id} className="card w-96 bg-base-300 card-sm shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{firstName + " " + lastName}</h2>
              <p>{about}</p>
              <div className="justify-end card-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => handleRequest("accepted", req_id)}
                >
                  ACCEPT
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleRequest("rejected", req_id)}
                >
                  REJECT
                </button>
              </div>
            </div>
          </div>
        );
      })
    )}
    </div>

  )
}

export default Requests