import background from '../../images/waves-lessons.svg'
import { Lesson } from './Lesson/Lesson'
import './Liked.css'
export const Liked = () => {
    return (
        <div style = {{backgroundImage: `url(${background})`}}className="backgound-layer-lessons">
            <div className="col text-xl-center">
                <h1 className="fw-bold mb-3 pt-5">Liked</h1>
            </div>
            <div className="container">
                <div className="text-center">
                    <div className="row row-cols-5 gy-3 pb-5">
                        <Lesson/>
                        <Lesson/>
                        <Lesson/>
                        <Lesson/>
                        <Lesson/>
                        <Lesson/>
                        <Lesson/>
                        <Lesson/>
                        <Lesson/>
                        <Lesson/>
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