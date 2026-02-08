import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/AyushiChakrabarty" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/ayushi-chakrabarty-7b504220b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>© 2026 Ayushi Chakrabarty. All rights reserved.</p>
    </footer>
  );
}

export default Footer;