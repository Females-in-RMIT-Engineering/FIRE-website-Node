import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./socialmedia.css";
import {
    faDiscord,
    faFacebook,
    faLinkedin,
    faInstagramSquare,
    faTiktok
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function SocialFollow() {
  return (
    <div class="social-container">

      <a target={"_blank"} rel='noreferrer' href="https://www.instagram.com/firengineering_/" class="social">
        <FontAwesomeIcon icon={faInstagramSquare} size="3x" /> 
      </a>

      <a target={"_blank"} rel='noreferrer' href="https://www.facebook.com/firengineering/" class="social">
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>

      <a target={"_blank"} rel='noreferrer' href="https://www.linkedin.com/company/firengineering/" class="social">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>

      <a target={"_blank"} rel='noreferrer' href="https://discord.com/channels/799421462598647851/799422177912684596" class="social">
        <FontAwesomeIcon icon={faDiscord} size="3x" />
      </a>

      <a target={"_blank"} rel='noreferrer' href="https://www.tiktok.com/@firengineering?lang=en" class="social">
        <FontAwesomeIcon icon={faTiktok} size="3x" />
      </a>

      <a target={"_blank"} rel='noreferrer' href="mailto:firengineering@rmit.edu.au" class="social">
        <FontAwesomeIcon icon={faEnvelope} size="3x" />
      </a>

    </div>
  );
}

export default SocialFollow;