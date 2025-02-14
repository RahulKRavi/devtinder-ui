const CardShimmer = () => {
  return (
    <div className="card bg-base-300 w-64 shadow-sm opacity-70">
      <figure>
        <img
          src="https://st.depositphotos.com/25790974/61426/v/450/depositphotos_614265050-stock-illustration-gym-logo-vector-flat-design.jpg"
          alt="Profile Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"></h2>
        <p></p>
        <div className="card-actions justify-center">
          <button className="btn btn-error"></button>
          <button className="btn btn-success"></button>
        </div>
      </div>
    </div>
  );
}

export default CardShimmer