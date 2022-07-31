import './Profile.css'
import background from '../../images/waves-profile.svg'

export const Profile = () => {
    return (
        <div style = {{backgroundImage: `url(${background})`}}  className="backgound-layer-profile">
            {/* Profile page */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h1 className="card-title text-center fw-bold">
                                    Profile information
                                </h1>
                                <div className="text-center">
                                    <img
                                        className="img-fluid rounded-circle"
                                        style={{ width: 300, height: 300 }}
                                        src="https://avatars.githubusercontent.com/u/74610360?v=4"
                                        alt="Lesson Pic"
                                    />
                                </div>
                                <hr className="my-4" />
                                <h3 className="card-title text-center ">Username: RadinTiholov</h3>
                                <h3 className="card-title text-center ">
                                    Email: radin.tiholov@mail.bg
                                </h3>
                                <h3 className="card-title text-center ">KBPoints: 223</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}