import React from "react";
import { CFooter } from "@coreui/react";
import image1 from "../asset/image2@3x.png";
import image2 from "../asset/image4@3x.png";
import image3 from "../asset/image5@3x.png";
import image4 from "../asset/image6@3x.png";
import image5 from "../asset/image8@3x.png";
import image6 from "../asset/image10@3x.png";
import pinga from "../asset/pinga.svg";
import youtube from "../asset/icon/youtube.svg";
import twiiter from "../asset/icon/twitter-o.svg";
import insta from "../asset/icon/instagram-o.svg";

const TheFooter = () => {
  return (
    <CFooter fixed={false} style={{ padding: "0" }}>
      <div class="footer">
        <div className="footer__top">
          <div class="Be-part-of-KSP-commu">
            Your personal Digital Health Companion Always-On
          </div>
          <div className="funded__by">
            <span class="Funded-through-Millenium-alliance">
              Funded through Millenium alliance
            </span>
            <div className="funded__images">
              <img src={image1} class="image-2"></img>
              <img src={image2} class="image-2"></img>
              <img src={image3} class="image-2"></img>
              <img src={image4} class="image-2"></img>
              <img src={image5} class="image-2"></img>
              <img src={image6} class="image-2"></img>
            </div>
          </div>
        </div>
        <div className="footer__second">
          <img src={pinga} alt={pinga} className="pinga" />
        </div>
        <div className="footer__third">
          <div className="footer__icons">
            <img src={youtube} class="iconyoutube"></img>
            <img src={insta} class="iconyoutube"></img>
            <img src={twiiter} class="iconyoutube"></img>
          </div>
          <div className="footer__pages">
            <span class="About-US">About US</span>
            <span class="About-US">Contact US</span>
            <span class="About-US">TERMS & Conditions</span>
            <span class="About-US">Privacy Policy</span>
          </div>
        </div>
        <div className="footer__bottom">
          <span class="Copyright-2022">Copyright © 2022</span>
          <span class="supportpingawebcom">support@pingaweb.com</span>
        </div>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
