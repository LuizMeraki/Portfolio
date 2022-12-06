import { MdOutlineEmail } from "react-icons/md";
import { ImLinkedin2 } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";


export const contactList = [
  {
    logo: MdOutlineEmail,
    contactName: "E-mail",
    goTo: "mailto:luizollvrsantos@gmail.com",
  },
  {
    logo: BsWhatsapp,
    contactName: "WhatsApp",
    goTo: "https://api.whatsapp.com/send?phone=5571996036876",
  },
  {
    logo: ImLinkedin2,
    contactName: "Linkedin",
    goTo: "https://www.linkedin.com/in/luiz-henrique-dev-frontend/",
  },
  {
    logo: FiGithub,
    contactName: "GitHub",
    goTo: "https://github.com/LuizMeraki",
  },
  {
    logo: BsInstagram,
    contactName: "Instagram",
    goTo: "https://www.instagram.com/luizmeraki/",
  },
];