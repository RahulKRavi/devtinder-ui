import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";
import CardShimmer from "./CardShimmer";

const Feed = () => {
  const feed = useSelector((store)=>store.feed)
  const dispatch  = useDispatch();
  const fetchFeed = async () => {
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
  return !feed ? (
    <div className="flex justify-center my-4 min-h-screen">
      <CardShimmer />
    </div>
  ) : feed.length == 0 ? (<div className="min-h-screen flex justify-center text-center text-4xl mt-14">No New Users Found Found</div>): 
  (
    <div className="flex justify-center my-4 min-h-screen">
      <UserCard user={feed[0]} />
    </div>
  );
}

export default Feed