import './NotFound.css'
import background from '../../images/waves-login.svg'

export const NotFound = () => {
    return (
        <div style = {{backgroundImage: `url(${background})`}} className="backgound-layer-not-found">
            <div className='text-center'>
                <h1 className='pt-4' style={{fontWeight: "600"}}>404...Not Found!</h1>
                <img src="https://i.pinimg.com/originals/a0/26/1b/a0261b885cfba5a65c675c33327acf5a.png" className="img-fluid" alt="404"/>
            </div>
        </div>
    )
}