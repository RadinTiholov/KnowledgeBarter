import './CreateLesson.css'
import background from '../../images/waves-login.svg'
import { useContext, useState } from 'react';
import * as lessonsService from '../../services/lessonsService'
import { useNavigate } from 'react-router-dom';
import { LessonContext } from '../../contexts/LessonContext';

export const CreateLesson = () => {
    const [inputData, setInputData] = useState({
        title: "",
        description: "",
        tumbnail: "",
        article: "",
        video: "",
        tags: [],
        resources: "",
    });
    const navigate = useNavigate();
    const {create} = useContext(LessonContext)

    const onChange = (e) => {
        setInputData(state => {
            if (e.target.name === 'tags') {
                const newValue = { ...state };
                newValue.tags = e.target.value.split(',');
                return newValue;
            }
            else {
                return { ...state, [e.target.name]: e.target.value }
            }
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputData)

        lessonsService.create(inputData)
            .then(res => {
                create(res);
                navigate('/lesson/details/' + res._id)
            })
            .catch(err => {
                //setError({active: true, message: res.message})
            })
    }
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="backgound-layer-create">
            {/* Login Form */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-bold fs-5">
                                    Create Lesson
                                </h5>
                                <form onSubmit={onSubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            id="title"
                                            placeholder="Some title"
                                            value={inputData.title}
                                            onChange={onChange}
                                        />
                                        <label htmlFor="title">Title</label>
                                    </div>
                                    {/* Alert */}
                                    {/* <div
                                        className="alert alert-danger d-flex align-items-center"
                                        role="alert"
                                    >
                                        <i className="fa-solid fa-triangle-exclamation me-2" />
                                        <div className="text-center">
                                            An example Title danger alert with an icon
                                        </div>
                                    </div> */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="description"
                                            id="description"
                                            placeholder="Some description"
                                            value={inputData.description}
                                            onChange={onChange}
                                        />
                                        <label htmlFor="description">Description</label>
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An example Description danger alert with an icon
                  </div>
                </div> */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="video"
                                            id="video"
                                            placeholder="Some link"
                                            value={inputData.video}
                                            onChange={onChange}
                                        />
                                        <label htmlFor="video">Video Link</label>
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An example Video Link danger alert with an icon
                  </div>
                </div> */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="tumbnail"
                                            id="tumbnail"
                                            placeholder="Some link"
                                            value={inputData.tumbnail}
                                            onChange={onChange}
                                        />
                                        <label htmlFor="tumbnail">Thumbnail Link</label>
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An example Video Link danger alert with an icon
                  </div>
                </div> */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="tags"
                                            id="tags"
                                            placeholder="Tags"
                                            value={inputData.tags}
                                            onChange={onChange}
                                        />
                                        <label htmlFor="tags">Tags (split them by comma(,))</label>
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An example Video Link danger alert with an icon
                  </div>
                </div> */}
                                    <div className="form-control mb-3">
                                        <label htmlFor="resources">Resources</label>
                                        <input
                                            className="form-control"
                                            name="resources"
                                            type="file"
                                            id="resources"
                                            placeholder="Files"
                                        />
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An example Resources danger alert with an icon
                  </div>
                </div> */}
                                    <div className="form-control mb-3">
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            name="article"
                                            id="article"
                                            rows={10}
                                            value={inputData.article}
                                            onChange={onChange}
                                        />
                                        <label htmlFor="article">Article</label>
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An example Video Link danger alert with an icon
                  </div>
                </div> */}
                                    <div className="d-grid">
                                        <button
                                            className="btn btn-outline-warning"
                                            style={{ backgroundColor: "#636EA7" }}
                                            type="submit"
                                        >
                                            Create
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}