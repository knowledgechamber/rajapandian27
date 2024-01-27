import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin_3665214.png'
import githubIcon from '../../assets/github.png'
import whatsapp from '../../assets/whatsapp_3665204.png'
import telegram from '../../assets/Telegram.png'
import behance from '../../assets/behance_3665240.png'
import instagramIcon from '../../assets/insta.png'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="#" className="logo">
        <span>rajapandian</span>
        <span>.in</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>

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
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Rajapandi-2713"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919363297947&text=Hello+RAJAPANDIAN"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/rajapandian127"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href="https://www.instagram.com/rajapandian.27"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
     
      </div>
    </Container>
  )
}
