import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../img/2.png";
import img2 from "../img/3.png";
import img3 from "../img/4.png";
import bgImg from "../img/Rectangle 29.jpg";
import { Footer } from "./footer";
import Header from "./header";
import { Context } from "../context";
import { useContext } from "react";
import { useEffect } from "react";

const Home = () => {
  // const profile = useContext(Context)

  const [profile, setProfile] = useState(false);

  const userLogged = JSON.parse(localStorage.getItem("loggedUser"));

  useEffect(() => {
    if (userLogged) {
      setProfile(true);
    } else {
      setProfile(false);
    }
  });

  const results = [
    {
      score: "25 000+",
      title: "Succesfull projects",
      svg: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.1242 2.55754C28.5241 1.92004 27.6728 1.55251 26.7952 1.55251H24.0011C24.0124 1.05 24.0199 0.532543 24.0199 0H5.9989C5.9989 0.532469 6.00637 1.05 6.01765 1.55251H3.20481C2.32719 1.55251 1.47587 1.92004 0.875792 2.55754C0.268174 3.19884 -0.0468054 4.07628 0.00564242 4.96508C0.508218 13.3426 4.83252 18.6 11.6883 19.3801L10.3606 24C8.78171 24 7.50282 25.2787 7.50282 26.8575V30H22.5197V26.8575C22.5197 25.2787 21.2408 24 19.6618 24L18.3342 19.3801C25.175 18.5926 29.4955 13.3388 29.9944 4.96508C30.0468 4.08009 29.7318 3.20258 29.1242 2.55754ZM3.00227 4.78505C2.99854 4.70258 3.03231 4.64633 3.06227 4.6163C3.11852 4.55631 3.18606 4.55631 3.20481 4.55631H6.1602C6.60652 10.4551 7.9079 13.8 9.17185 15.69C4.35998 13.6725 3.21228 8.28382 3.00227 4.78505ZM20.847 15.6788C22.1109 13.785 23.4086 10.4438 23.8548 4.55258H26.7989C26.8214 4.55258 26.8852 4.55258 26.9415 4.61256C26.9715 4.64259 27.0052 4.69884 27.0015 4.78131C26.7877 8.28008 25.6438 13.6538 20.847 15.6788Z"
            fill="#004267"
          />
        </svg>
      ),
    },
    {
      score: "25 000+",
      title: "Succesfull projects",
      svg: (
        <svg
          width="30"
          height="37"
          viewBox="0 0 30 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.4058 8.49147L15.6217 0.173329C15.2386 -0.0577764 14.7615 -0.0577764 14.3784 0.173329L0.594234 8.49147C0.225839 8.71383 0 9.11664 0 9.55146V14.2998C0 24.301 5.69655 33.4355 14.561 36.9168C14.8432 37.0277 15.1566 37.0278 15.439 36.9168C24.282 33.4442 30 24.3294 30 14.2998V9.55146C30.0001 9.11657 29.7743 8.71383 29.4058 8.49147ZM21.007 15.7286L13.3865 23.4586C12.9117 23.9402 12.1419 23.9402 11.667 23.4586L8.99258 20.7458C8.51775 20.2642 8.51775 19.4832 8.99258 19.0016C9.46741 18.52 10.2373 18.52 10.7121 19.0016L12.5267 20.8422L19.2875 13.9844C19.7622 13.5028 20.5322 13.5028 21.007 13.9844C21.4819 14.4661 21.4819 15.247 21.007 15.7286Z"
            fill="#004267"
          />
        </svg>
      ),
    },
    {
      score: "25 000+",
      title: "Succesfull projects",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_49_12)">
            <path
              d="M31.344 0.00401357C25.0974 -0.107986 17.9733 3.15735 13.464 8.22268C9.15468 8.30402 4.95868 10.0707 1.86935 13.16C1.68935 13.3373 1.62535 13.6027 1.70401 13.8427C1.78401 14.084 1.99201 14.2587 2.24268 14.2947L7.38135 15.0307L6.74668 15.7414C6.51068 16.0054 6.52268 16.4067 6.77335 16.6574L15.3427 25.2267C15.472 25.356 15.6427 25.4214 15.8147 25.4214C15.9733 25.4214 16.132 25.3654 16.2587 25.252L16.9693 24.6173L17.7053 29.756C17.7414 30.0067 17.9387 30.1907 18.1773 30.2707C18.2387 30.2907 18.3027 30.3 18.368 30.3C18.5574 30.3 18.7507 30.2174 18.884 30.0854C21.9307 27.0387 23.6973 22.8427 23.7787 18.5333C28.8494 14.0147 32.1414 6.89335 31.996 0.65468C31.9867 0.300014 31.7 0.0133469 31.344 0.00401357ZM25.2 11.5134C24.5507 12.1627 23.6974 12.488 22.8427 12.488C21.988 12.488 21.1347 12.1627 20.4853 11.5134C19.1867 10.2133 19.1867 8.09868 20.4853 6.79868C21.7854 5.49868 23.9 5.49868 25.2 6.79868C26.5 8.09868 26.5 10.2147 25.2 11.5134Z"
              fill="#004267"
            />
            <path
              d="M3.63183 22.5401C2.20517 23.9667 0.246499 30.4121 0.0278324 31.1414C-0.0428343 31.3761 0.0224991 31.6308 0.194499 31.8041C0.322499 31.9321 0.491832 32.0001 0.666499 32.0001C0.730499 32.0001 0.794499 31.9908 0.858499 31.9721C1.58783 31.7534 8.03316 29.7947 9.45983 28.3681C11.0665 26.7614 11.0665 24.1467 9.45983 22.5401C7.85183 20.9334 5.2385 20.9347 3.63183 22.5401Z"
              fill="#004267"
            />
          </g>
          <defs>
            <clipPath id="clip0_49_12">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  const works = [
    {
      title: "New house interior",
      img: img1,
    },
    {
      title: "New house interior",
      img: img2,
    },
    {
      title: "New house interior",
      img: img3,
    },
    {
      title: "New house interior",
      img: img1,
    },
    {
      title: "New house interior",
      img: img2,
    },
    {
      title: "New house interior",
      img: img3,
    },
  ];

  const services = [
    {
      score: "25 000+",
      title: "Seccesfull projects",
      svg: (
        <svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_56_45)">
            <path
              d="M0 35.5566V47.6196C0 48.1978 0.309805 48.7317 0.812002 49.0185L11.3867 55V42.002L0 35.5566Z"
              fill="#004267"
            />
            <path
              d="M14.6094 42.002V55L25.8887 48.5547V35.5566L14.6094 42.002Z"
              fill="#004267"
            />
            <path
              d="M29.1113 35.5566V48.5547L40.3906 55V42.002L29.1113 35.5566Z"
              fill="#004267"
            />
            <path
              d="M43.6133 42.002V55L54.188 49.0185C54.6902 48.7317 55 48.1979 55 47.6197V35.5566L43.6133 42.002Z"
              fill="#004267"
            />
            <path
              d="M42.002 25.8887L29.5675 32.1058L42.002 39.2118L54.544 32.1058L42.002 25.8887Z"
              fill="#004267"
            />
            <path
              d="M28.2208 0.170076C27.767 -0.0566919 27.2331 -0.0566919 26.7794 0.170076L15.0656 6.21718L27.5001 13.3231L39.9346 6.21707L28.2208 0.170076Z"
              fill="#004267"
            />
            <path
              d="M14.6094 9.66797V23.0909L25.8887 28.7305V16.1133L14.6094 9.66797Z"
              fill="#004267"
            />
            <path
              d="M12.9981 25.8887L0.456177 32.1058L12.9981 39.2118L25.4326 32.1058L12.9981 25.8887Z"
              fill="#004267"
            />
            <path
              d="M29.1113 16.1133V28.7305L40.3906 23.0909V9.66797L29.1113 16.1133Z"
              fill="#004267"
            />
          </g>
          <defs>
            <clipPath id="clip0_56_45">
              <rect width="55" height="55" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      score: "25 000+",
      title: "Seccesfull projects",
      svg: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_58_93)">
            <path
              d="M49.2168 23.5222C49.1664 23.4884 49.1144 23.4572 49.0607 23.4287L45.5126 21.5181L25.8358 31.9359C25.313 32.2128 24.6871 32.2128 24.1644 31.9359L4.48768 21.5181L0.93941 23.4287C0.0770362 23.8865 -0.251089 24.9567 0.206675 25.819C0.235134 25.8726 0.266315 25.9247 0.300111 25.9752L25.0001 39.0519L49.7 25.9752C50.244 25.1644 50.0277 24.0662 49.2168 23.5222Z"
              fill="#004267"
            />
            <path
              d="M49.7835 34.8661C49.6181 34.5596 49.3666 34.3082 49.0603 34.1429L45.5121 32.2322L25.8353 42.65C25.3126 42.9269 24.6867 42.9269 24.1639 42.65L4.48711 32.2322L0.938843 34.1429C0.0709236 34.6113 -0.252807 35.6945 0.215629 36.5625C0.381052 36.8689 0.632481 37.1204 0.938843 37.2857L24.1531 49.7857C24.6815 50.0702 25.3176 50.0702 25.846 49.7857L49.0603 37.2857C49.9281 36.8172 50.2519 35.734 49.7835 34.8661Z"
              fill="#004267"
            />
            <path
              d="M49.2168 12.8081C49.1664 12.7743 49.1144 12.7431 49.0607 12.7146L25.8465 0.214591C25.3182 -0.0699026 24.6821 -0.0699026 24.1537 0.214591L0.93941 12.7146C0.0770362 13.1724 -0.251089 14.2426 0.206675 15.1049C0.235134 15.1585 0.266315 15.2106 0.300111 15.261L25.0001 28.3378L49.7 15.261C50.244 14.4502 50.0277 13.352 49.2168 12.8081Z"
              fill="#004267"
            />
          </g>
          <defs>
            <clipPath id="clip0_58_93">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      score: "25 000+",
      title: "Seccesfull projects",
      svg: (
        <svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.3482 9.56079H9.02226C4.04744 9.56079 0 13.6082 0 18.5833V45.9091C0 50.8841 4.04744 54.9315 9.02226 54.9315H36.3482C41.323 54.9315 45.3705 50.8841 45.3705 45.9091V18.5833C45.3705 13.6082 41.323 9.56079 36.3482 9.56079ZM21.506 36.3229C21.506 38.3393 20.9178 39.8251 19.7417 40.7803C18.5652 41.7355 17.0308 42.2131 15.1383 42.2131C13.1393 42.2131 11.6228 41.7182 10.5881 40.7273C9.55335 39.7369 9.03601 38.6226 9.03601 37.3842C9.03601 36.8715 9.15954 36.5178 9.40758 36.323C9.65508 36.1286 10.0796 36.0312 10.6811 36.0312C11.371 36.0312 11.8394 36.124 12.0873 36.3097C12.3349 36.4954 12.4588 36.8096 12.4588 37.2516C12.4588 37.853 12.7063 38.3261 13.2016 38.671C13.6966 39.016 14.3691 39.1884 15.2181 39.1884C16.2086 39.1884 16.9294 38.9628 17.3804 38.5117C17.8315 38.0607 18.0571 37.3311 18.0571 36.3229V35.8188C18.0571 34.1386 17.0842 33.2982 15.1385 33.2982C14.4661 33.2982 14.1302 32.8472 14.1302 31.9452C14.1302 31.043 14.4723 30.5921 15.157 30.5921C15.9289 30.5921 16.5259 30.4209 16.9471 30.0776C17.3683 29.7343 17.5794 29.0441 17.5794 28.006C17.5794 26.458 16.8008 25.6836 15.2446 25.6836C13.6701 25.6836 12.8831 26.2731 12.8831 27.4517C12.8831 28.3314 12.3347 28.7713 11.2382 28.7713C10.4952 28.7713 10.0131 28.6702 9.79215 28.4678C9.57075 28.2655 9.46043 27.8742 9.46043 27.2934C9.46043 26.7785 9.55743 26.2682 9.7523 25.7619C9.94673 25.2562 10.2518 24.7632 10.6676 24.2836C11.0829 23.8044 11.6891 23.4135 12.4851 23.1116C13.2811 22.8098 14.2097 22.6589 15.271 22.6589C19.0207 22.6589 20.8957 24.2479 20.8957 27.4251C20.8957 28.4822 20.7125 29.4029 20.3465 30.1869C19.9804 30.9713 19.4672 31.5131 18.8067 31.8124C20.6059 32.52 21.5059 33.8554 21.5059 35.8187V36.3229H21.506ZM36.3639 35.978C36.3639 38.0831 35.7976 39.6221 34.6659 40.5947C33.5338 41.5677 32.0214 42.0539 30.129 42.0539H25.4328C24.9904 42.0539 24.6278 41.9477 24.3449 41.7355C24.0617 41.5232 23.9204 41.2757 23.9204 40.9925V23.7201C23.9204 23.4373 24.0617 23.1894 24.3449 22.9772C24.6276 22.765 24.9904 22.6589 25.4328 22.6589H30.129C32.0215 22.6589 33.5339 23.1456 34.6659 24.1181C35.7976 25.0911 36.3639 26.6299 36.3639 28.7347V35.978Z"
            fill="#004267"
          />
          <path
            d="M30.129 25.6836H27.3696V39.0293H30.129C31.9863 39.0293 32.9149 38.0124 32.9149 35.9781V28.7348C32.9149 26.7009 31.9863 25.6836 30.129 25.6836Z"
            fill="#004267"
          />
          <path
            d="M38.91 0.0686035H16.7867C15.8977 0.0686035 15.177 0.789297 15.177 1.67832C15.177 2.56734 15.8977 3.28804 16.7867 3.28804H38.91C46.0068 3.28804 51.7805 9.06164 51.7805 16.1584V38.2818C51.7805 39.1708 52.5012 39.8915 53.3902 39.8915C54.2792 39.8915 54.9999 39.1708 54.9999 38.2818V16.1584C54.9999 7.2865 47.782 0.0686035 38.91 0.0686035Z"
            fill="#004267"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Header props="home" />
      <div className="home">
        <div className="home-header">
          <div className="center-content">
            <h1>We provide you quality service on 3D Modellign</h1>

            <p>
              We have been providing reliable custimers service for several
              years
            </p>

            <div className="btns">
              <button className="btn btn-primary">
                <Link to={profile ? "/order-project" : "/log-in"}>
                  order project
                </Link>
              </button>
              <button className="btn">
                <Link to={profile ? "/portfolio" : "/log-in"}>
                  our portfolio
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="section-results">
          <div className="text-center">
            <h1>Our results</h1>
          </div>

          <div className="results-content">
            {results.map((item, index) => {
              return (
                <div className="results" key={index}>
                  <span className="results-svg">{item.svg}</span>
                  <div className="results-text">
                    <h2>{item.score}</h2>
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="section-about">
          
          <div className="section-about--text">
            <h1>About us</h1>
            <p>
              We create digital experiences fully crafted to support your brand.
              Leveraging on web standards, usability and best practices, the
              results are fast, responsive, and mobile-optimized. We develop
              sites to deliver online conversions and frictionless user
              engagement. Designing flexible and easy to manage back-end
              foundations with a goal of crafting innovative, future-proofed web
              solutions.
            </p>
            <p>
              We create digital experiences fully crafted to support your brand.
              Leveraging on web standards, usability and best practices, the
              results are fast, responsive, and mobile-optimized. We develop
              sites to deliver online
            </p>
          </div>
          <div className="section-about--img">
            <div className="section-about--img__1">
              {/* <img src={bgImg} alt="" /> */}
            </div>
            {/* <div className="section-about--img__1"></div> */}
          </div>
        </div>

        <div className="section-works">
          <h1 className="text-center">Our works</h1>

          <div className="section-works--content">
            {works.map((item, index) => {
              return (
                <div key={index} className="section-work--content">
                  <div>
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link to={'/portfolio'}>
            <button className="btn btn-primary">See more</button>
            </Link>
          </div>
        </div>

        <div className="section-services">
          <h1 className="text-center">Our services</h1>
          <div className="section-services--content">
            {services.map((item, index) => {
              return (
                <div key={index} className="section-services--content__1">
                  <span className="svg">{item.svg}</span>
                  <div>
                    <h2>{item.score}</h2>
                    <p>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link to={profile ? "/order-project" : "/log-in"}>
          <button className="btn btn-primary">Order project</button>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
