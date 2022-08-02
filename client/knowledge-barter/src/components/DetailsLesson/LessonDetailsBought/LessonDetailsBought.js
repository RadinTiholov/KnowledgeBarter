import './LessonDetailsBought.css'
import {Link} from 'react-router-dom'
import background from '../../../images/waves-details.svg'
import { Comment } from './Comment/Comment'
import { Lesson } from './Lesson/Lesson'

export const LessonDetailsBought = () => {
    return (
        <div style = {{backgroundImage: `url(${background})`}} className="backgound-layer-details">
  {/* Login Form */}
  <div className="container">
    <div className="row pt-5">
      <div className="col-10">
        <div className="embed-responsive embed-responsive-16by9" autofocus>
          <iframe
            className="embed-responsive-item"
            style={{ height: 600, width: 1000 }}
            src="https://www.youtube.com/embed/PjGkVCAo8Fw"
            allowFullScreen=""
          />
        </div>
        <div className="card card-display my-3" style={{ width: 1000 }}>
          <div className="mx-3">
            <h1>Lesson title here</h1>
            <i className="fa-solid fa-thumbs-up fa-2xl" />
            <span className="fw-bold">: 300</span>
            <i className="fa-solid fa-eye fa-2xl" />
            <span className="fw-bold">: 1200</span>
            <button
              className="btn btn-outline-warning btn fw-bold"
              style={{ backgroundColor: "#636EA7" }}
              type="submit"
            >
              Like
            </button>
            <Link
              className="btn btn-outline-warning btn fw-bold"
              style={{ backgroundColor: "#636EA7" }}
              to='/lesson/edit/1'
            >
              Edit
            </Link>
            <h5>Super ultra description here.......yoooaooaoaoa</h5>
          </div>
          <div className="text-center">
            <h2>Information</h2>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              repellat a debitis tempore maiores molestias perferendis
              praesentium tenetur enim odio, nostrum iste facere, modi numquam
              officia cumque aspernatur illum molestiae.
            </h5>
          </div>
          <h2 className="text-center">Comments</h2>
          {/* Comment form */}
          <form action="#">
            <div className="form-outline w-100 mx-5">
              <textarea
                className="form-control"
                id="textAreaExample"
                rows={3}
                style={{ background: "#fff", height: 150, width: 900 }}
                placeholder="Comment"
                defaultValue={""}
              />
            </div>
            <div className="mt-2 pt-1 mx-5">
              <button type="submit" className="btn btn-primary btn-sm">
                Post comment
              </button>
            </div>
          </form>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
        </div>
      </div>
      <div className="col-2">
        <p>Recommended</p>
        <Lesson/>
        <Lesson/>
        <Lesson/>
        <Lesson/>
      </div>
    </div>
  </div>
</div>

    )
}