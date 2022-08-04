export const Lesson = (props) => {
    return (
        <div className="row mb-2">
          <div className="card card-display-details" style={{ width: "15rem" }}>
            <img
              src={props.tumbnail}
              className="card-img mt-2"
              style={{ height: "7rem" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">{props.title}</h5>
              <a
                href="#"
                className="btn"
                style={{ backgroundColor: "#f0ad4e", color: "#fff" }}
              >
                Details
              </a>
            </div>
          </div>
        </div>
    )
}