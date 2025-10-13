import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>SANTHOSH</h3>
            <p>Full Stack Java Developer</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} Kommireddy Santhosh. Made with <Heart size={16} fill="currentColor" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
