import React, { useState } from "react";
import Header from "./header";
import img from "../img/Ellipse 1.png";
import { Link, Navigate } from "react-router-dom";

const Settings = () => {

  const [userLoggedOut, setUserLoggedOut] = useState(false)

  function loggedOut() {
    localStorage.removeItem('loggedUser')
    setUserLoggedOut(!userLoggedOut)
  }

  if (userLoggedOut) {
    return <Navigate to={'/'} />
  }

  const data = [
    {
      id: 1,
      name: "Your name",
      title: "Jaloliddin Esonboyev",
      svg: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.0001 3C12.5956 3 10.6465 4.94916 10.6465 7.35357C10.6465 9.75798 12.5956 11.7071 15.0001 11.7071C17.4045 11.7071 19.3536 9.75798 19.3536 7.35357C19.3536 4.94916 17.4045 3 15.0001 3ZM7.64648 7.35357C7.64648 3.29231 10.9388 0 15.0001 0C19.0613 0 22.3536 3.29231 22.3536 7.35357C22.3536 11.4148 19.0613 14.7071 15.0001 14.7071C10.9388 14.7071 7.64648 11.4148 7.64648 7.35357Z"
            fill="#004267"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2768 20.0845C6.70553 20.0845 3 23.79 3 28.3612V28.4979C3 29.3263 2.32843 29.9979 1.5 29.9979C0.671573 29.9979 0 29.3263 0 28.4979V28.3612C0 22.1331 5.04867 17.0845 11.2768 17.0845H18.7232C24.9513 17.0845 30 22.1331 30 28.3612V28.4979C30 29.3263 29.3284 29.9979 28.5 29.9979C27.6716 29.9979 27 29.3263 27 28.4979V28.3612C27 23.79 23.2945 20.0845 18.7232 20.0845H11.2768Z"
            fill="#004267"
          />
        </svg>
      ),
      isOpen: false,
    },
    {
      id: 2,
      name: "E-mail",
      title: "jaloliddinrmcf03@gmail.com",
      svg: (
        <svg
          width="29"
          height="20"
          viewBox="0 0 29 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.75 1.5625C0.75 0.872144 1.36561 0.3125 2.125 0.3125H26.875C27.6344 0.3125 28.25 0.872144 28.25 1.5625V18.4375C28.25 19.1279 27.6344 19.6875 26.875 19.6875H2.125C1.36561 19.6875 0.75 19.1279 0.75 18.4375V1.5625ZM3.5 2.8125V17.1875H25.5V2.8125H3.5Z"
            fill="#004267"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.08104 0.749013C1.57524 0.224851 2.44327 0.164141 3.01985 0.613413L14.5 9.55882L25.9802 0.613413C26.5568 0.164141 27.4248 0.224851 27.919 0.749013C28.4132 1.27317 28.3464 2.0623 27.7699 2.51157L15.3949 12.1542C14.8799 12.5555 14.1201 12.5555 13.6052 12.1542L1.2302 2.51157C0.653619 2.0623 0.586838 1.27317 1.08104 0.749013Z"
            fill="#004267"
          />
        </svg>
      ),
      isOpen: false,
    },
    {
      id: 3,
      name: "Phone number",
      title: "(998)99 123-45-67",
      svg: (
        <svg
          width="17"
          height="26"
          viewBox="0 0 17 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7656 1H1.23438V25H15.7656V1Z"
            stroke="#004267"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.49219 20.5H8.50672"
            stroke="#004267"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      isOpen: false,
    },
    {
      id: 4,
      name: "Change password",
      title: "*****************",
      svg: (
        <svg
          width="27"
          height="28"
          viewBox="0 0 27 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.583984 11C0.583984 10.2636 1.16228 9.66669 1.87565 9.66669H25.1257C25.839 9.66669 26.4173 10.2636 26.4173 11V26C26.4173 26.7364 25.839 27.3334 25.1257 27.3334H1.87565C1.16228 27.3334 0.583984 26.7364 0.583984 26V11ZM3.16732 12.3334V24.6667H23.834V12.3334H3.16732Z"
            fill="#004267"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5007 3.33335C10.2474 3.33335 7.52669 6.1761 7.52669 9.78802C7.52669 10.5244 6.94839 11.1214 6.23503 11.1214C5.52166 11.1214 4.94336 10.5244 4.94336 9.78802C4.94336 4.79894 8.72976 0.666687 13.5007 0.666687C18.2715 0.666687 22.0579 4.79894 22.0579 9.78802C22.0579 10.5244 21.4796 11.1214 20.7663 11.1214C20.0529 11.1214 19.4746 10.5244 19.4746 9.78802C19.4746 6.1761 16.7539 3.33335 13.5007 3.33335Z"
            fill="#004267"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5007 16.301C14.214 16.301 14.7923 16.8979 14.7923 17.6343V19.1343C14.7923 19.8707 14.214 20.4676 13.5007 20.4676C12.7873 20.4676 12.209 19.8707 12.209 19.1343V17.6343C12.209 16.8979 12.7873 16.301 13.5007 16.301Z"
            fill="#004267"
          />
        </svg>
      ),
      isOpen: false,
    },
    {
      id: 5,
      name: "My orders",
      title: `${7} orders`,
      svg: (
        <svg
          width="31"
          height="32"
          viewBox="0 0 31 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.7758 26.3886L26.3914 8.38138C26.3052 7.22125 25.3547 6.31244 24.2275 6.31244H21.4931V6.18556C21.4931 2.77481 18.805 0 15.5008 0C12.1966 0 9.50854 2.77481 9.50854 6.18556V6.31244H6.77412C5.64692 6.31244 4.69639 7.22119 4.61041 8.37894L3.22559 26.3911C3.11842 27.8333 3.60309 29.2691 4.55526 30.3302C5.50742 31.3913 6.85719 32 8.25842 32H22.7431C24.1443 32 25.4941 31.3914 26.4463 30.3302C27.3985 29.269 27.8831 27.8333 27.7758 26.3886ZM11.3243 6.18556C11.3243 3.80838 13.198 1.87437 15.5008 1.87437C17.8036 1.87437 19.6773 3.80844 19.6773 6.18556V6.31244H11.3243V6.18556ZM25.1141 29.0566C24.4955 29.7459 23.6535 30.1256 22.7431 30.1256H8.25848C7.3481 30.1256 6.50614 29.7459 5.88747 29.0566C5.26886 28.3671 4.96649 27.4714 5.036 26.5369L6.4207 8.52469C6.43475 8.33519 6.58999 8.18681 6.77412 8.18681H9.50854V10.4952C9.50854 11.0128 9.91505 11.4324 10.4164 11.4324C10.9178 11.4324 11.3243 11.0128 11.3243 10.4952V8.18681H19.6773V10.4952C19.6773 11.0128 20.0838 11.4324 20.5852 11.4324C21.0866 11.4324 21.4931 11.0128 21.4931 10.4952V8.18681H24.2275C24.4116 8.18681 24.5668 8.33525 24.5811 8.52719L25.9655 26.5344C26.0352 27.4714 25.7327 28.3671 25.1141 29.0566Z"
            fill="#004267"
          />
          <path
            d="M19.5891 15.8928C19.2347 15.5268 18.6598 15.5268 18.3053 15.8928L14.2513 20.0776L12.6925 18.4685C12.338 18.1025 11.7631 18.1025 11.4085 18.4685C11.0539 18.8345 11.0539 19.4278 11.4085 19.7938L13.6093 22.0657C13.7866 22.2487 14.019 22.3402 14.2512 22.3402C14.4835 22.3402 14.7159 22.2487 14.8932 22.0657L19.5891 17.2183C19.9437 16.8522 19.9437 16.2588 19.5891 15.8928Z"
            fill="#004267"
          />
        </svg>
      ),
      isOpen: false,
    },
  ];

  return (
    <>
      <Header />
      <div className="section-settings">
        <button className="btn-back">
          <Link to={"/profile"}>
            <div></div>
            Back
          </Link>
        </button>

        <h1 className="text-center">Settings</h1>

        <div className="profile">
          <div className="profile--img">
            <img src={img} alt="" />
          </div>
          <div className="profile--data">
            <div className="profile--data__name">
              <h1>jaloliddin esonboyev</h1>
            </div>
            <div className="profile--data__username">
              <p>jaloliddinrmcf03@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="profile-data">
          {data.map((item, index) => {
            return (
              <div className="profile-data__content" key={index}>
                <div className="profile-data__content--1">
                  {item.svg}
                  <h3>{item.name}</h3>
                  <p>{item.title}</p>
                </div>
                <div className="profile-data__content--2">
                  <div className="dropdown">
                    <div className={item.isOpen ? "up" : "down"}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={loggedOut } className="btn btn-log">
          <Link to={""}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.66667 21H3.22222C2.63285 21 2.06762 20.7659 1.65087 20.3491C1.23413 19.9324 1 19.3671 1 18.7778V3.22222C1 2.63285 1.23413 2.06762 1.65087 1.65087C2.06762 1.23413 2.63285 1 3.22222 1H7.66667"
                stroke="#FF001E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.4453 16.5557L21.0009 11.0001L15.4453 5.44458"
                stroke="#FF001E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.9993 10.9999H7.66602"
                stroke="#FF001E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Log out
          </Link>
        </button>
      </div>
    </>
  );
};

export default Settings;
