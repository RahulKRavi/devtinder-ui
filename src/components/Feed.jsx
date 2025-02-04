import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store)=>store.feed)
  const dispatch  = useDispatch();
  const fetchFeed = async () => {
    if(feed) return;
    try {
      const res = await axios.get(BASE_URL + '/user/feeds',{
        withCredentials:true
      })
      dispatch(addFeed(res?.data?.data))
    } catch (err) {
      res.status(400).send(err.message)
    }
  }
  useEffect(()=>{
    fetchFeed()
  },[])
  return (
    feed && (
      <div className="flex justify-center my-4">
        <UserCard user={feed[1]}/>
      </div>
    )
  );
}

export default Feed