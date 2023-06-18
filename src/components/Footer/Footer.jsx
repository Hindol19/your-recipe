import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      <div className="footer-text">
        <div className="about footer-component">
          <h2>About</h2>
          <div className="footer-sub-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            illum dicta molestiae repudiandae ex suscipit dignissimos quas
            laborum error necessitatibus, laudantium. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Placeat, similique!
          </div>
        </div>

        <div className="contact footer-component">
          <h2>Contact Us</h2>
          <div className="footer-sub-content">
            <div className="contact-content">
              <div className="contact-icons">
                <LocationOnIcon />
              </div>
              25 Demo Lane, Demo, Demo, Demo, 123456
            </div>
            <div className="contact-content">
              <div className="contact-icons">
                <LocalPhoneIcon />
              </div>
              Phone: 012 345 6789
            </div>
            <div className="contact-content">
              <div className="contact-icons">
                <MailIcon />
              </div>
              Email: yourrecipes01@gmail.com
            </div>
          </div>
        </div>

        <div className="pages footer-component">
          <h2>Pages</h2>
          <div className="footer-sub-content">
            <div className="page-links" onClick={() => navigate("/")}>
              Home
            </div>
            <div className="page-links">About</div>
            <div className="page-links">Our Testimonials</div>
            <div className="page-links">Saved Recipes</div>
          </div>
        </div>
        <div className="socials footer-component">
          <h2>Socials</h2>
          <div className="footer-sub-content">
            <div>
              <InstagramIcon />
            </div>
            <div>
              <TwitterIcon />
            </div>
            <div>
              <FacebookIcon />
            </div>
            <div>
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
