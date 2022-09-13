import React, { useState } from "react";
import img from "../img/2222.png";
import imgHead from "../img/pic-4.png";
import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
const App = () => {
  const [data, setData] = useState([
    {
      score: "8",
      description: "Week of intesive education. Lessons are 3 times a week",
    },
    {
      score: "24",
      description: "Checked lessons and tasks from teachers",
    },
    {
      score: "7",
      description:
        "Works in portfolio at the end of course. 6 shots and 1 total work",
    },
    {
      score: "4",
      description: "Students in a group, teachers for every single group",
    },
  ]);

  const [dataSource, setDataSource] = useState([
    {
      text: "Animating objects",
      icon: (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 8.46918C19 13.1801 14.9722 17 10.005 17C5.03776 17 1.00999 13.1801 1.00999 8.46918M1 8.46919C1 4.34596 4.52803 1 8.87562 1C13.2232 1 16.7512 4.34596 16.7512 8.46918C16.7512 12.0047 13.7329 14.8673 10.005 14.8673C6.27707 14.8673 3.25874 12.0047 3.25874 8.46918C3.25874 5.52131 5.77734 3.14219 8.87562 3.14219C11.9839 3.14219 14.4925 5.53079 14.4925 8.46918M14.5025 8.46918C14.5025 10.8294 12.4936 12.7346 10.005 12.7346C7.51638 12.7346 5.50749 10.8294 5.50749 8.46918C5.50749 6.70615 7.01666 5.26541 8.88562 5.26541C10.7446 5.26541 12.2637 6.69667 12.2637 8.46918M12.2537 8.46918C12.2537 9.64454 11.2443 10.6019 10.005 10.6019C8.76568 10.6019 7.75624 9.64454 7.75624 8.46918C7.75624 7.88151 8.25596 7.4076 8.87562 7.4076C9.49527 7.4076 9.995 7.88151 9.995 8.46918"
            stroke="#FA9F42"
            stroke-miterlimit="10"
          />
        </svg>
      ),
    },
    {
      text: "Working with personel",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.525548 15.5C0.775746 13.0656 2.83279 11.1667 5.33333 11.1667C7.83388 11.1667 9.89092 13.0656 10.1411 15.5H0.525548ZM15.5 10.1411C13.0656 9.89092 11.1667 7.83388 11.1667 5.33333C11.1667 2.83279 13.0656 0.775746 15.5 0.525548V10.1411ZM15.5 15.5H11.1922C11.4255 13.2299 13.2299 11.4255 15.5 11.1922V15.5ZM10.1667 5.33333C10.1667 8.00271 8.00271 10.1667 5.33333 10.1667C2.66396 10.1667 0.5 8.00271 0.5 5.33333C0.5 2.66396 2.66396 0.5 5.33333 0.5C8.00271 0.5 10.1667 2.66396 10.1667 5.33333Z"
            stroke="#FA9F42"
          />
        </svg>
      ),
    },
    {
      text: "Usage After Effects",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.8 9H9M5.8 9C3.15111 9 1 11.1422 1 13.8M5.8 9V5.8M5.8 9C3.15111 9 1 6.84889 1 4.2V1H4.2M9 9V12.2M9 9V5.8M9 9H12.2M9 12.2H5.8M9 12.2C9 14.8489 6.84889 17 4.2 17H1V13.8M9 12.2C9 14.8489 11.1511 17 13.8 17M5.8 12.2C4.92 12.2 4.2 12.92 4.2 13.8M5.8 12.2C5.8 13.08 5.08 13.8 4.2 13.8M4.2 13.8H1M9 5.8C9 3.14222 6.84889 1 4.2 1M9 5.8H12.2M9 5.8C9 3.14222 11.1511 1 13.8 1H17V4.2M5.8 5.8C5.8 4.92 5.08 4.2 4.2 4.2M5.8 5.8C4.92 5.8 4.2 5.08 4.2 4.2M4.2 4.2V1M12.2 9C14.8489 9 17 6.84889 17 4.2M12.2 9V12.2M12.2 9C14.8489 9 17 11.1422 17 13.8V17H13.8M12.2 5.8C13.08 5.8 13.8 5.08 13.8 4.2M12.2 5.8C12.2 4.92 12.92 4.2 13.8 4.2M13.8 4.2H17M12.2 12.2C12.2 13.08 12.92 13.8 13.8 13.8M12.2 12.2C13.08 12.2 13.8 12.92 13.8 13.8M13.8 13.8V17"
            stroke="#FA9F42"
            stroke-miterlimit="10"
          />
        </svg>
      ),
    },
    {
      text: "Sound working",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 16V0.0041222H14.773V16H16Z" fill="#FA9F42" />
          <path
            d="M3.68914 13.9971V2.00018H2.46218V13.9971H3.68914Z"
            fill="#FA9F42"
          />
          <path d="M1.22697 15.9959V0H0V15.9959H1.22697Z" fill="#FA9F42" />
          <path
            d="M6.15132 11.9983V4.00032H4.92436V11.9983H6.15132Z"
            fill="#FA9F42"
          />
          <path
            d="M8.6135 9.99951V6.00054H7.38654V9.99951H8.6135Z"
            fill="#FA9F42"
          />
          <path
            d="M11.0756 11.9996V4.0017H9.84868V11.9996H11.0756Z"
            fill="#FA9F42"
          />
          <path
            d="M13.5378 13.9998V2.00291H12.3109V13.9998H13.5378Z"
            fill="#FA9F42"
          />
          <path d="M16 16V0.0041222H14.773V16H16Z" fill="#FA9F42" />
          <path
            d="M3.68914 13.9971V2.00018H2.46218V13.9971H3.68914Z"
            fill="#FA9F42"
          />
          <path d="M1.22697 15.9959V0H0V15.9959H1.22697Z" fill="#FA9F42" />
          <path
            d="M6.15132 11.9983V4.00032H4.92436V11.9983H6.15132Z"
            fill="#FA9F42"
          />
          <path
            d="M8.6135 9.99951V6.00054H7.38654V9.99951H8.6135Z"
            fill="#FA9F42"
          />
          <path
            d="M11.0756 11.9996V4.0017H9.84868V11.9996H11.0756Z"
            fill="#FA9F42"
          />
          <path
            d="M13.5378 13.9998V2.00291H12.3109V13.9998H13.5378Z"
            fill="#FA9F42"
          />
        </svg>
      ),
    },
  ]);

  return (
    <>
      <div className="header-page-2">
        <div className="menu-page-2">
          <ul>
            <div className="logo">
              <svg
                width="128"
                height="16"
                viewBox="0 0 128 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.6484 8.9986V13.2398H40.7874V15.7083H31V0H40.6723V2.46844H33.6484V6.55259H40.0966V8.9986H33.6484Z"
                  fill="#353A5A"
                />
                <path
                  d="M51.7326 10.0533H43.2118V7.7195H51.7326V10.0533Z"
                  fill="#353A5A"
                />
                <path
                  d="M67.5484 0H70.381V15.7083H67.7326V4.51052L62.8274 12.4095H62.5049L57.5997 4.48808V15.7083H54.9513V0H57.807L62.6661 7.85414L67.5484 0Z"
                  fill="#353A5A"
                />
                <path
                  d="M84.5571 11.1304H75.3914C75.5757 11.9682 75.9902 12.619 76.635 13.0827C77.2952 13.5465 78.1089 13.7784 79.0761 13.7784C80.3811 13.7784 81.3714 13.3146 82.0469 12.3871L84.0965 13.554C82.9757 15.1847 81.2946 16 79.0531 16C77.1954 16 75.6831 15.4465 74.5163 14.3394C73.3649 13.2174 72.7891 11.8036 72.7891 10.0982C72.7891 8.43759 73.3572 7.0388 74.4933 5.90182C75.6141 4.76484 77.0726 4.19635 78.8689 4.19635C80.5423 4.19635 81.9241 4.77232 83.0141 5.92426C84.1042 7.0762 84.6492 8.47499 84.6492 10.1206C84.6492 10.4198 84.6185 10.7564 84.5571 11.1304ZM75.3684 9.15568H82.139C81.9701 8.27302 81.5863 7.59233 80.9875 7.1136C80.4041 6.63488 79.6902 6.39551 78.8458 6.39551C77.9247 6.39551 77.157 6.64236 76.5429 7.13604C75.9288 7.62973 75.5373 8.30295 75.3684 9.15568Z"
                  fill="#353A5A"
                />
                <path
                  d="M92.8944 4.19635C94.2301 4.19635 95.2971 4.61524 96.0955 5.45302C96.9092 6.27583 97.316 7.39785 97.316 8.81907V15.7083H94.8289V9.06592C94.8289 8.22814 94.5986 7.58485 94.138 7.13604C93.6774 6.68724 93.0479 6.46283 92.2496 6.46283C91.3438 6.46283 90.6299 6.7396 90.1079 7.29313C89.5859 7.8317 89.3249 8.63207 89.3249 9.69425V15.7083H86.8377V4.48808H89.3249V5.92426C90.0925 4.77232 91.2823 4.19635 92.8944 4.19635Z"
                  fill="#353A5A"
                />
                <path
                  d="M106.419 4.48808V6.82188H103.564V12.2076C103.564 12.6713 103.671 13.0079 103.886 13.2174C104.101 13.4119 104.416 13.5241 104.83 13.554C105.26 13.569 105.79 13.5615 106.419 13.5316V15.7083C104.515 15.9327 103.149 15.7756 102.32 15.237C101.491 14.6835 101.076 13.6737 101.076 12.2076V6.82188H98.9578V4.48808H101.076V2.06452L103.564 1.34642V4.48808H106.419Z"
                  fill="#353A5A"
                />
                <path
                  d="M117.944 14.2945C116.777 15.4315 115.342 16 113.638 16C111.933 16 110.498 15.4315 109.331 14.2945C108.149 13.1426 107.558 11.7438 107.558 10.0982C107.558 8.45255 108.149 7.05376 109.331 5.90182C110.498 4.76484 111.933 4.19635 113.638 4.19635C115.342 4.19635 116.777 4.76484 117.944 5.90182C119.126 7.05376 119.717 8.45255 119.717 10.0982C119.717 11.7438 119.126 13.1426 117.944 14.2945ZM110.045 10.0982C110.045 11.1155 110.391 11.9607 111.081 12.6339C111.772 13.3072 112.624 13.6438 113.638 13.6438C114.651 13.6438 115.503 13.3072 116.194 12.6339C116.885 11.9607 117.23 11.1155 117.23 10.0982C117.23 9.08088 116.885 8.23562 116.194 7.56241C115.503 6.8892 114.651 6.55259 113.638 6.55259C112.624 6.55259 111.772 6.8892 111.081 7.56241C110.391 8.23562 110.045 9.08088 110.045 10.0982Z"
                  fill="#353A5A"
                />
                <path
                  d="M124.453 4.48808V6.37307C125.083 4.98177 126.265 4.28612 128 4.28612V6.91164C127.063 6.8518 126.234 7.0762 125.513 7.58485C124.807 8.07854 124.453 8.90135 124.453 10.0533V15.7083H121.966V4.48808H124.453Z"
                  fill="#353A5A"
                />
                <path
                  d="M0 6.73684C0 3.01619 3.13401 0 7 0H21V0.842105C21 4.56276 17.866 7.57895 14 7.57895H0V6.73684Z"
                  fill="#FA9F42"
                />
                <path
                  d="M0 13.4737C0 11.1483 1.95875 9.26316 4.375 9.26316H5.25C7.183 9.26316 8.75 10.7713 8.75 12.6316C8.75 14.4919 7.183 16 5.25 16H0V13.4737Z"
                  fill="#FA9F42"
                />
                <path
                  d="M12.25 13.4737C12.25 11.1483 14.2088 9.26316 16.625 9.26316H17.5C19.433 9.26316 21 10.7713 21 12.6316C21 14.4919 19.433 16 17.5 16H12.25V13.4737Z"
                  fill="#FA9F42"
                />
              </svg>
            </div>
            <div className="li">
              <li>About us</li>
              <li>Platform</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact</li>
            </div>
          </ul>
        </div>

        <div className="span">
          <p>Main</p>
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3737 0.667818C1.21732 0.491887 0.959406 0.448856 0.754378 0.564489C0.54935 0.680121 0.45274 0.923099 0.52239 1.14795L1.8705 5.5L0.52239 9.85205C0.45274 10.0769 0.54935 10.3199 0.754378 10.4355C0.959406 10.5511 1.21732 10.5081 1.3737 10.3322L5.3737 5.83218C5.5421 5.64274 5.5421 5.35726 5.3737 5.16782L1.3737 0.667818Z"
              fill="#FA9F42"
              stroke="#FA9F42"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Courses</p>
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3737 0.667818C1.21732 0.491887 0.959406 0.448856 0.754378 0.564489C0.54935 0.680121 0.45274 0.923099 0.52239 1.14795L1.8705 5.5L0.52239 9.85205C0.45274 10.0769 0.54935 10.3199 0.754378 10.4355C0.959406 10.5511 1.21732 10.5081 1.3737 10.3322L5.3737 5.83218C5.5421 5.64274 5.5421 5.35726 5.3737 5.16782L1.3737 0.667818Z"
              fill="#FA9F42"
              stroke="#FA9F42"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Motion design</p>
        </div>

        <div className="page-head-content">
          <h1>Practical course of animation for beginner motion-designers</h1>
          <div className="head-content-img">
            <img src={imgHead} alt="" />
          </div>
          <div className="ads">
            <h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              expedita accusamus eaque aperiam quos, autem, odit perspiciatis
              cumque a, itaque error natus porro quod accusantium veritatis
              asperiores doloremque ut corrupti?
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              odio asperiores minima adipisci consectetur atque non? Provident
              nesciunt, voluptates architecto quod nobis officia totam dolorem
              numquam perferendis quas vel enim. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Explicabo odio asperiores minima
              adipisci consectetur atque non? Provident nesciunt, voluptates
              architecto quod nobis officia totam dolorem numquam perferendis
              quas vel enim. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Explicabo odio asperiores minima adipisci consectetur atque
              non? Provident nesciunt, voluptates architecto quod nobis officia
              totam dolorem numquam perferendis quas vel enim. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Explicabo odio asperiores
              minima adipisci consectetur atque non? Provident nesciunt,
              voluptates architecto quod nobis officia totam dolorem numquam
              perferendis quas vel enim. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo odio asperiores minima adipisci
              consectetur atque non? Provident nesciunt, voluptates architecto
              quod nobis officia totam dolorem numquam perferendis quas vel
              enim.
            </p>
          </div>
        </div>
      </div>
      <div className="head-content page">
        <div>
          {data.map((data, index) => {
            return (
              <div className="head-content-div" key={index}>
                <h3 className="data-score">{data.score}</h3>
                <p className="data-description">{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section-type-1">
        <div className="section-type-text">
          <h2>Actual knowladge
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            eaque pariatur laborum libero in. Ullam deserunt quae voluptate
            reprehenderit, blanditiis quo laboriosam sit, aut laudantium
            necessitatibus odit porro. Quasi, quia.
          </p>
          <button className="btn btn-secondary">Buy course</button>
        </div>
        <div className="section-type-img section-type-img-page-2">
          <div></div>
          <img src={img} alt="" />
        </div>
      </div>

      <div className="section-popular-courses">
        <h1 className="center-text-popular">You will learn at this course</h1>

        <div className="section-popular-content">
          {dataSource.map((item, index) => {
            return (
              <div key={index} className="sec-pop-img">
                <div className="icon-pop">
                  {item.icon}
                <h4 className="text">{item.text}</h4>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, commodi dicta quod nihil possimus deleniti
                  molestias numquam? Aliquam at dignissimos ab sapiente nihil
                  molestiae neque, ducimus autem illum, enim unde!
                </p>
              </div>
            );
          })}
        </div>
        <button className="btn btn-primary">All courses</button>
      </div>

      <div className="section-pre-footer page-2">
        <div></div>
        <div>
          <h1>Sale 40% until July, 30</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            molestias nostrum maiores nesciunt similique necessitatibus saepe
            amet ipsa deleniti excepturi, fuga illo voluptas fugit reprehenderit
            perspiciatis exercitationem inventore minus veniam.
          </p>
          <button className="btn btn-secondary">Buy course</button>
        </div>
      </div>

      <div className="section-footer">
        <hr />
        <div className="footer-content">
          <div className="footer-main">
            <div>
              <svg
                width="128"
                height="16"
                viewBox="0 0 128 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.6484 8.9986V13.2398H40.7874V15.7083H31V0H40.6723V2.46844H33.6484V6.55259H40.0966V8.9986H33.6484Z"
                  fill="#353A5A"
                />
                <path
                  d="M51.7326 10.0533H43.2118V7.7195H51.7326V10.0533Z"
                  fill="#353A5A"
                />
                <path
                  d="M67.5484 0H70.381V15.7083H67.7326V4.51052L62.8274 12.4095H62.5049L57.5997 4.48808V15.7083H54.9513V0H57.807L62.6661 7.85414L67.5484 0Z"
                  fill="#353A5A"
                />
                <path
                  d="M84.5571 11.1304H75.3914C75.5757 11.9682 75.9902 12.619 76.635 13.0827C77.2952 13.5465 78.1089 13.7784 79.0761 13.7784C80.3811 13.7784 81.3714 13.3146 82.0469 12.3871L84.0965 13.554C82.9757 15.1847 81.2946 16 79.0531 16C77.1954 16 75.6831 15.4465 74.5163 14.3394C73.3649 13.2174 72.7891 11.8036 72.7891 10.0982C72.7891 8.43759 73.3572 7.0388 74.4933 5.90182C75.6141 4.76484 77.0726 4.19635 78.8689 4.19635C80.5423 4.19635 81.9241 4.77232 83.0141 5.92426C84.1042 7.0762 84.6492 8.47499 84.6492 10.1206C84.6492 10.4198 84.6185 10.7564 84.5571 11.1304ZM75.3684 9.15568H82.139C81.9701 8.27302 81.5863 7.59233 80.9875 7.1136C80.4041 6.63488 79.6902 6.39551 78.8458 6.39551C77.9247 6.39551 77.157 6.64236 76.5429 7.13604C75.9288 7.62973 75.5373 8.30295 75.3684 9.15568Z"
                  fill="#353A5A"
                />
                <path
                  d="M92.8944 4.19635C94.2301 4.19635 95.2971 4.61524 96.0955 5.45302C96.9092 6.27583 97.316 7.39785 97.316 8.81907V15.7083H94.8289V9.06592C94.8289 8.22814 94.5986 7.58485 94.138 7.13604C93.6774 6.68724 93.0479 6.46283 92.2496 6.46283C91.3438 6.46283 90.6299 6.7396 90.1079 7.29313C89.5859 7.8317 89.3249 8.63207 89.3249 9.69425V15.7083H86.8377V4.48808H89.3249V5.92426C90.0925 4.77232 91.2823 4.19635 92.8944 4.19635Z"
                  fill="#353A5A"
                />
                <path
                  d="M106.419 4.48808V6.82188H103.564V12.2076C103.564 12.6713 103.671 13.0079 103.886 13.2174C104.101 13.4119 104.416 13.5241 104.83 13.554C105.26 13.569 105.79 13.5615 106.419 13.5316V15.7083C104.515 15.9327 103.149 15.7756 102.32 15.237C101.491 14.6835 101.076 13.6737 101.076 12.2076V6.82188H98.9578V4.48808H101.076V2.06452L103.564 1.34642V4.48808H106.419Z"
                  fill="#353A5A"
                />
                <path
                  d="M117.944 14.2945C116.777 15.4315 115.342 16 113.638 16C111.933 16 110.498 15.4315 109.331 14.2945C108.149 13.1426 107.558 11.7438 107.558 10.0982C107.558 8.45255 108.149 7.05376 109.331 5.90182C110.498 4.76484 111.933 4.19635 113.638 4.19635C115.342 4.19635 116.777 4.76484 117.944 5.90182C119.126 7.05376 119.717 8.45255 119.717 10.0982C119.717 11.7438 119.126 13.1426 117.944 14.2945ZM110.045 10.0982C110.045 11.1155 110.391 11.9607 111.081 12.6339C111.772 13.3072 112.624 13.6438 113.638 13.6438C114.651 13.6438 115.503 13.3072 116.194 12.6339C116.885 11.9607 117.23 11.1155 117.23 10.0982C117.23 9.08088 116.885 8.23562 116.194 7.56241C115.503 6.8892 114.651 6.55259 113.638 6.55259C112.624 6.55259 111.772 6.8892 111.081 7.56241C110.391 8.23562 110.045 9.08088 110.045 10.0982Z"
                  fill="#353A5A"
                />
                <path
                  d="M124.453 4.48808V6.37307C125.083 4.98177 126.265 4.28612 128 4.28612V6.91164C127.063 6.8518 126.234 7.0762 125.513 7.58485C124.807 8.07854 124.453 8.90135 124.453 10.0533V15.7083H121.966V4.48808H124.453Z"
                  fill="#353A5A"
                />
                <path
                  d="M0 6.73684C0 3.01619 3.13401 0 7 0H21V0.842105C21 4.56276 17.866 7.57895 14 7.57895H0V6.73684Z"
                  fill="#FA9F42"
                />
                <path
                  d="M0 13.4737C0 11.1483 1.95875 9.26316 4.375 9.26316H5.25C7.183 9.26316 8.75 10.7713 8.75 12.6316C8.75 14.4919 7.183 16 5.25 16H0V13.4737Z"
                  fill="#FA9F42"
                />
                <path
                  d="M12.25 13.4737C12.25 11.1483 14.2088 9.26316 16.625 9.26316H17.5C19.433 9.26316 21 10.7713 21 12.6316C21 14.4919 19.433 16 17.5 16H12.25V13.4737Z"
                  fill="#FA9F42"
                />
              </svg>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              hic cum labore, culpa rem eaque alias repellat ea enim
              voluptatibus quam commodi illo, exercitationem ad laudantium
              facere laboriosam, mollitia eligendi.
            </p>

            <div className="footer-icons">
              <FacebookOutlined />
              <YoutubeOutlined />
              <InstagramOutlined />
            </div>
          </div>
          <div className="footer-secondary">
            <h5>Education</h5>
            <ul>
              <li>Courses</li>
              <li>Webinars</li>
              <li>Trainings</li>
              <li>Workshops</li>
            </ul>
          </div>
          <div className="footer-secondary">
            <h5>About us</h5>
            <ul>
              <li>About platform</li>
              <li>Teachers</li>
              <li>Rates</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className="footer-secondary">
            <h5>Contact</h5>
            <ul>
              <li>Contact us</li>
              <li>Consultation</li>
              <li>Props</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-secondary">
            <h5>Any question?</h5>
            <p>Write us on e-mail</p>
            <p>education@ementor.info</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
