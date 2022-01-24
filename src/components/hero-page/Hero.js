import hero from '../../resources/img/hero-image.jpg';
import './hero.css';

const Hero = (props) =>{
    const heroImage = hero;
    return(
        <div className="hero-page">
            <div className="hero-slice"><img src={heroImage} alt="hero" className="hero-image"/></div>
                <div className="embrassing">
                    <h2 className="embrassing-slogan">Embracing  Reality</h2>
                    <h6 className="embrassing-text">Our design projects are of impeccable style, homey comfort, gentle simplicity and the utmost attention to details.</h6>
            </div>
        <div className="contacts"><h1>DESIGN STUDIO BAKAY, Inc.</h1><div className="cont"><a href="tel:+13053162494">Phone:+1 305 316 2494</a><a href="mailto:bakay782@gmail.com">Email: bakay782@gmail.com</a></div></div>
       
        </div>
    )
}

export default Hero;