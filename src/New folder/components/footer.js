import React from "react";
import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic
            cum labore, culpa rem eaque alias repellat ea enim voluptatibus quam
            commodi illo, exercitationem ad laudantium facere laboriosam,
            mollitia eligendi.
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
  );
};

export default Footer;