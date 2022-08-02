import {Link} from 'react-router-dom'
export const Lesson = (props) => {
    return (
        <div className="col">
        <div className="card card-display border-0" style={{ width: "15rem" }}>
            <img
                src={props.tumbnail}
                className="card-img"
                style={{ height: "15rem" }}
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title fw-bold">{props.title}</h5>
                <Link
                    to={"/lesson/details/" + props._id}
                    className="btn"
                    style={{ backgroundColor: "#636EA7", color: "#fff" }}
                >
                    Details
                </Link>
            </div>
        </div>
    </div>  
    )
}