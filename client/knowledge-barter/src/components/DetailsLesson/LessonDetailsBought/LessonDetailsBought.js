import './LessonDetailsBought.css'
import { Link } from 'react-router-dom'
import background from '../../../images/waves-details.svg'
import { Comment } from './Comment/Comment'
import { Lesson } from './Lesson/Lesson'

export const LessonDetailsBought = (props) => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="backgound-layer-details">
            {/* Login Form */}
            <div className="container">
                <div className="row pt-5">
                    <div className="col-10">
                        <div className="embed-responsive embed-responsive-16by9" autoFocus>
                            <iframe
                                className="embed-responsive-item"
                                style={{ height: 600, width: 1000 }}
                                src={props.lesson.video}
                                allowFullScreen=""
                            />
                        </div>
                        <div className="card card-display my-3" style={{ width: 1000 }}>
                            <div className="mx-3">
                                <h1>{props.lesson.title}</h1>
                                <i className="fa-solid fa-thumbs-up fa-2xl" />
                                <span className="fw-bold">: {props.lesson.likes}</span>
                                <i className="fa-solid fa-eye fa-2xl" />
                                <span className="fw-bold">: {props.lesson.views}</span>
                                <button
                                    className="btn btn-outline-warning btn fw-bold"
                                    style={{ backgroundColor: "#636EA7" }}
                                    type="submit"
                                >
                                    Like
                                </button>
                                <a
                                    className="btn btn-outline-warning btn fw-bold"
                                    style={{ backgroundColor: "#636EA7" }}
                                    href={props.lesson?.resources}
                                >
                                    Resources
                                </a>
                                <Link
                                    className="btn btn-outline-warning btn fw-bold"
                                    style={{ backgroundColor: "#636EA7" }}
                                    to={'/lesson/edit/' + props.lesson._id}
                                >
                                    Edit
                                </Link>
                                <h5>{props.lesson.description}</h5>
                            </div>
                            <div className="text-center">
                                <h2>Information</h2>
                                <h5>
                                    {props.lesson.article}
                                </h5>
                            </div>
                            <h2 className="text-center">Comments</h2>
                            {/* Comment form */}
                            <form>
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
                            {props.lesson.comments?.map(x => <Comment key = {x._id} {...x} commentedUsers = {props.commentedUsers.filter(y => y._id === x.owner)}/>) }
                        </div>
                    </div>
                    <div className="col-2">
                        <p>Recommended</p>
                        <Lesson />
                        <Lesson />
                        <Lesson />
                        <Lesson />
                    </div>
                </div>
            </div>
        </div>
    )
}