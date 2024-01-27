import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/Profile.png"
import { NavHashLink } from "react-router-hash-link"
import Li from '../../assets/linkedin_3665214.png'
import git from '../../assets/github.png'
import WA from '../../assets/whatsapp_3665204.png'
import Hello from '../../assets/Hello.gif'
import behance from '../../assets/behance_3665240.png'
import tele from '../../assets/Telegram.png'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>RAJAPANDIAN</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Ui/Ux & Graphic Designer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Fresher</p>
        </ScrollAnimation>


        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
        <div className="social-media">
        <a
          href="https://www.behance.net/rajapandian27"
          target="_blank"
          rel="noreferrer"
        >
          <img src={behance} alt="behance" />
        </a>  
        <a
          href="https://www.linkedin.com/in/rajapandian1811/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Li} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Rajapandi-2713"
          target="_blank"
          rel="noreferrer"
        >
          <img src={git} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919363297947&text=Hello+RAJAPANDIAN"
          target="_blank"
          rel="noreferrer"
        >
          <img src={WA} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/rajapandian127"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tele} alt="telegram" />
        </a>
     
      </div>
        </ScrollAnimation>

      </div>
     

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="illustration" />
        </ScrollAnimation>
      </div>
     
    </Container>

  )
}