import { Container } from "./styles";
import VinayakSingh from "../../assets/banner5.png";
import wordpress from "../../assets/wordpress.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about">
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={VinayakSingh} alt="Vinayak Singh" />
        </ScrollAnimation>
      </div>

      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Greetings, I'm Rajapandian, a creative professional deeply passionate about transforming ideas into captivating user experiences through UI/UX and graphic design. 
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          My expertise lies in crafting imaginative websites and mobile applications that seamlessly blend aesthetics with functionality. I've honed my skills using tools such as Figma, Adobe XD, Adobe Photoshop, and Illustrator. </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          Notably, I've successfully cloned real-time applications using Figma, showcasing my ability to bring ideas to life in a virtual space. You can explore these designs in the dedicated project section of my portfolio. With advanced proficiency in Bootstrap Studio, I specialize in creating visually striking and responsive websites. Complementing this, my intermediate knowledge in HTML, CSS, JavaScript, React Js, and Angular allows me to infuse interactivity and dynamic elements into web projects. I extend an invitation to delve into my portfolio, where each project reflects a unique journey of creativity and innovation. Experience firsthand the world I've meticulously crafted through my design endeavors.
Feel free to reach out if you have any specific inquiries or if there's a particular aspect you'd like to explore further!</p>

        </ScrollAnimation>

        

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      
    </Container>
  )
}
