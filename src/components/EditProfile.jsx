import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import UserCard from "./UserCard"
import { addUser } from "../utils/userSlice";

const EditProfile = ({user}) => {
  const [firstName, setFirstName] = useState(user.firstName || '')
  const [lastName, setLastName] = useState(user.lastName || '')
  const [photoURL, setPhotoURL] = useState(user.photoURL || '')
  const dispatch = useDispatch()
  const handleUpdate = async () => {
    try {
      const res = await axios.patch(BASE_URL + '/profile/edit', 
        {
          firstName,lastName,photoURL
        },
        {
          withCredentials: true
        })
      dispatch(addUser(res?.data?.data))
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-300 shadow-sm my-14 mx-5">
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold">Profile</h2>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">FirstName</legend>
            <input
              type="text"
              className="input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <legend className="fieldset-legend">LastName</legend>
            <input
              type="text"
              className="input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <legend className="fieldset-legend">PhotoURL</legend>
            <input
              type="options"
              className="input"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </fieldset>
          <div className="mt-6">
            <button
              className="btn btn-primary btn-block"
              onClick={handleUpdate}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-300 shadow-sm my-14 mx-5">
        <UserCard user={user}></UserCard>
      </div>
    </div>
  );
}

export default EditProfile