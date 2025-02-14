import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from './Footer'
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react"
import { addUser } from "../utils/userSlice"
import { useDispatch, useSelector } from "react-redux"

const Body = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector(store => store.user)

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        BASE_URL + '/profile/view',{
          withCredentials: true
        })
        dispatch(addUser(res?.data?.data))
    } catch (err) {
      if(err.status===401){
        navigate('/')
      }
      console.error(err.message)
    }
  }

  useEffect(()=>{
    if(!userData){
      fetchUser();
    }
  },[])

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Body