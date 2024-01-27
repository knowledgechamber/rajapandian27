import { Container } from "./styles";
import emailIcon from "../../assets/Gm.png";
import phoneIcon from "../../assets/ph2.png"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p></p>
        <p></p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:rajapandian.p27@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:rajapandian.p27@gmail.com">rajapandian.p27@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919363297947"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919363297947">(+91) 9363297947</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}