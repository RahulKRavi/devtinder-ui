const UserCard = ({user}) => {
  const {firstName,lastName,age,about,photoURL} = user
  return (
    <div className="card bg-base-300 w-64 shadow-sm">
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
          <button className="btn btn-error">Ignore</button>
          <button className="btn btn-success">Interested</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard