export const Comment = () => {
    return (
        <div
            className="card card-display-details mx-5 my-2"
            style={{ height: 150, width: 900 }}
          >
            <div className="row">
              <div className="col-1">
                <img
                  className="img-fluid rounded-circle profile-comment m-3"
                  src="https://avatars.githubusercontent.com/u/74610360?v=4"
                  alt="Lesson Pic"
                />
              </div>
              <div className="col-11">
                <p className="mt-4">Radin Tiholov</p>
              </div>
            </div>
            <div className="row mx-3">
              <h5>this lesson sucsss just don't watch it.</h5>
            </div>
          </div>
    )
}