import { Card } from './Card/Card'
import './LessonsDisplay.css'
export const LessonsDisplay = (props) => {
    return (
        <section id="lessons-display">
                <div className="container">
                    <div className="row">
                        <div className="col text-xl-center">
                            <h1 className="fw-bold mb-4 mt-5">{props.title}</h1>
                        </div>
                    </div>
                    <div className="row gy-5">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
    )
}