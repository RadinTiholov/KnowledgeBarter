import './Banner.css'
import knowledgeIcon from '../../../images/knowledgeIcon.png'
import wave from '../../../images/wave1.png'


export const Banner = () => {
    return (
        <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="promo-title">Knowledge</h1>
                            <h1 style={{ marginLeft: 250, fontSize: 70, fontWeight: 600 }}>
                                Barter
                            </h1>
                            <p>Learn new things by sharing knowledge you have.</p>
                            <p style={{ marginLeft: 340 }}>Barter your knowledge.</p>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-1 text-light"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn btn-outline-warning"
                                    style={{ backgroundColor: "#636EA7" }}
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                                id="knowledge-image"
                                className="image-fluid"
                                src={knowledgeIcon}
                                alt="icon"
                            />
                        </div>
                    </div>
                </div>
                <img className="wave-image" src={wave} alt="wave" />
            </section>
    )
}