export const Lesson = () => {
    return (
        <div className="col">
        <div className="card card-display border-0" style={{ width: "15rem" }}>
            <img
                src="https://picsum.photos/100/300"
                className="card-img"
                style={{ height: "15rem" }}
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title fw-bold">C# free course</h5>
                <a
                    href="/"
                    className="btn"
                    style={{ backgroundColor: "#636EA7", color: "#fff" }}
                >
                    Details
                </a>
            </div>
        </div>
    </div>  
    )
}