import React from "react";
import Styles from "../pages/login.module.css";
import signinImg from "../assets/signin.png";
import logo1 from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/Instagram.png";
import Tiktok from "../assets/TikTok.png";
import snapchat from "../assets/Snapchat.png";

const Login = () => {
  return (
    <div className={Styles.ContainerProps}>
      <div className={Styles.header}>
        <div className={Styles.loginPage}>
          <div className={Styles.items}>
            <div className={Styles.loginLogoWrapper}>
              <div className={Styles.loginLogo}>
                <img src={logo1} alt="loginLogo" />
              </div>
            </div>
            <div className={Styles.loginWelcome}>
              <h1>Welcome Back 👋 </h1>
            </div>
            <div className={Styles.loginDescription}>
              <p>
                Today is a new day. It's your day. You shape it. Sign in to
                start ordering.
              </p>
            </div>
            <form>
              <div className={Styles.input}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Example@email.com"
                />
              </div>
              <div className={Styles.input}>
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="At least 8 characters"
                />
                <span> Forgot Password?</span>
              </div>

              <button className={Styles.loginBtn} type="submit">
                Sign in
              </button>
            </form>
            <div className={Styles.signup}>
              <p>
                Don't you have an account?<span> Sign up</span>
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.signinImg}>
          <div className={Styles.img}>
            <img src={signinImg} alt="signinImg" />
          </div>
        </div>
      </div>
      <div className={Styles.footer}>
        <div className={Styles.footerList1}>
          <div className={Styles.listItems1}>
            <div className={Styles.logo2}>
              <img src={logo2} alt="logo2-image" />
            </div>
            <div className={Styles.store}>
              <div className={Styles.store1}>
                <img src={appstore} alt="appStore-image" />
              </div>
              <div className={Styles.store2}>
                <img src={playstore} alt="playStore-image" />
              </div>
            </div>
            <div className={Styles.company}>
              <p>Company # 490039-445, Registered with</p>
              <p>House of companies.</p>
            </div>
          </div>

          <div className={Styles.listItems2}>
            <div className={Styles.item1}>
              <p className={Styles.item1Heading}>
                Get Exclusive Deals in your Inbox
              </p>
              <div className={Styles.item1Input}>
                <input type="text" readOnly placeholder="youremail@gmail.com" />
                <button>Subscribe</button>
              </div>
              <div className={Styles.policy}>
                <h3>
                  we wont spam, read our <span>email policy</span>
                </h3>
              </div>
              <div className={Styles.item1Logo}>
                <img src={facebook} alt="facebook_image" />

                <img src={instagram} alt="instagram_image" />

                <img src={Tiktok} alt="tiktok_image" />

                <img src={snapchat} alt="snapchat_image" />
              </div>
            </div>
            <div className={Styles.item2}>
              <p>Legal Pages</p>
              <ul>
                <li>Terms and conditions</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Modern Slavery Statement</li>
              </ul>
            </div>
            <div className={Styles.item3}>
              <p>Important Links</p>
              <ul>
                <li>Get help</li>
                <li>Add your restaurant</li>
                <li>Sign up to deliver</li>
                <li>Create a business account</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.footerList2}>
          <div className={Styles.copyright}>
            <p>Order.uk Copyright 2024, All Rights Reserved.</p>
          </div>
          <div className={Styles.terms}>
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Pricing</p>
            <p>Do not sell or share my personal information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
