import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/AyushiChakrabarty" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/ayushi-chakrabarty-7b504220b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
        <a href="https://scholar.google.com/citations?user=xof8C5gAAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="Google Scholar"><SchoolIcon/></a>
      </div>
      <p>© 2026 Ayushi Chakrabarty. All rights reserved.</p>
    </footer>
  );
}

export default Footer;