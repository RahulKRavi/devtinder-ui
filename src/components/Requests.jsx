import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../utils/constants"

const Requests = () => {
  const [requests, setRequests] = useState([])
  const fetchRequests = async () => {
    const res = await axios.get(BASE_URL + '/user/requests/recieved',{
      withCredentials:true
    })
    console.log(res?.data?.data)
    setRequests(res?.data?.data)
  }
  useEffect(()=>{
    fetchRequests()
  },[])
  return (
    requests.length === 0 ? (<h1>No Requests Found</h1>):(
      requests.map((item) => {
        const {_id,firstName,lastName,about} = item.senderId
        return (
            <div key={_id} className="card w-96 bg-base-100 card-sm shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <p>{about}</p>
                <div className="justify-end card-actions">
                  <button className="btn btn-primary">ACCEPT</button>
                  <button className="btn btn-primary">REJECT</button>
                </div>
              </div>
            </div>
        );
      })
    )
  )
}

export default Requests