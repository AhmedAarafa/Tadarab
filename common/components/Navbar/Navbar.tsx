/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./navbar.module.css";
import {
  Navbar as NavBar,
  Container,
  Nav,
  Form,
  Button,
  Badge,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import {popoverHandler} from "./utils";

export default function Navbar() {

  React.useEffect(() => {
    popoverHandler();
  }, [])

  return (
    <>
      <NavBar fixed="top" className={styles["navbar"]}>
        <NavBar.Brand href="#home">
        <svg className={styles["navbar__img"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 92.658 31.401">
    <g id="logo" transform="translate(-0.393)">  
    <path id="Path_12775" data-name="Path 12775" d="M29.77,21.1q-.335.255-.828.61a6.036,6.036,0,0,1-.935.565,5.882,5.882,0,0,1-1.268.409,7.224,7.224,0,0,1-1.441.132,4.4,4.4,0,0,1-3.088-1.14,3.773,3.773,0,0,1-1.244-2.915,3.932,3.932,0,0,1,.633-2.316,4.241,4.241,0,0,1,1.8-1.417,10.16,10.16,0,0,1,2.856-.737q1.706-.219,3.537-.322V13.9a1.494,1.494,0,0,0-.876-1.482,6.3,6.3,0,0,0-2.58-.41,7.335,7.335,0,0,0-2.189.364c-.775.242-1.333.429-1.671.559H22.1V9.81c.439-.116,1.149-.252,2.137-.408A18.711,18.711,0,0,1,27.2,9.165q3.536,0,5.109,1.087a3.862,3.862,0,0,1,1.573,3.417v8.8H29.77Zm0-2.013V16.4q-.84.07-1.821.191a8.5,8.5,0,0,0-1.482.282,2.038,2.038,0,0,0-.949.568,1.421,1.421,0,0,0-.329.981,2.548,2.548,0,0,0,.069.656,1,1,0,0,0,.346.482,1.7,1.7,0,0,0,.633.338A4.363,4.363,0,0,0,27.388,20a3.428,3.428,0,0,0,1.263-.253A3.952,3.952,0,0,0,29.77,19.087Z" transform="translate(-8.613 -3.836)" fill="#be1622"/>
    <path id="Path_12776" data-name="Path 12776" d="M58.719,19.144H54.56V17.8a9.123,9.123,0,0,1-2,1.284,5.256,5.256,0,0,1-2.152.414,4.544,4.544,0,0,1-3.774-1.82,7.769,7.769,0,0,1-1.415-4.908A8.275,8.275,0,0,1,45.7,9.849,6.674,6.674,0,0,1,47,7.668a5.386,5.386,0,0,1,1.9-1.343,5.639,5.639,0,0,1,2.232-.478,6.131,6.131,0,0,1,1.9.247,12.454,12.454,0,0,1,1.525.629V1.218h4.16Zm-4.16-3.562V9.226a4.067,4.067,0,0,0-.919-.266,5.352,5.352,0,0,0-.889-.081A2.943,2.943,0,0,0,50.3,9.9a4.433,4.433,0,0,0-.816,2.833,4.612,4.612,0,0,0,.656,2.766,2.462,2.462,0,0,0,2.1.86,3.739,3.739,0,0,0,1.194-.213A4.214,4.214,0,0,0,54.56,15.583Z" transform="translate(-18.764 -0.51)" fill="#be1622"/>
    <path id="Path_12777" data-name="Path 12777" d="M79.165,21.1q-.333.255-.829.61a5.982,5.982,0,0,1-.933.565,5.918,5.918,0,0,1-1.268.409,7.241,7.241,0,0,1-1.441.132,4.4,4.4,0,0,1-3.086-1.14,3.778,3.778,0,0,1-1.244-2.915A3.932,3.932,0,0,1,71,16.445a4.243,4.243,0,0,1,1.8-1.417,10.2,10.2,0,0,1,2.857-.737q1.7-.219,3.537-.322V13.9a1.494,1.494,0,0,0-.875-1.482,6.293,6.293,0,0,0-2.581-.41,7.323,7.323,0,0,0-2.189.367q-1.165.364-1.671.559h-.38V9.81q.656-.174,2.137-.408a18.72,18.72,0,0,1,2.964-.237q3.537,0,5.11,1.087a3.862,3.862,0,0,1,1.573,3.417v8.8H79.165Zm0-2.013V16.4q-.84.07-1.82.191a8.506,8.506,0,0,0-1.482.282,2.04,2.04,0,0,0-.951.568,1.434,1.434,0,0,0-.328.981,2.54,2.54,0,0,0,.07.656.988.988,0,0,0,.344.482,1.713,1.713,0,0,0,.633.338A4.417,4.417,0,0,0,76.784,20a3.419,3.419,0,0,0,1.261-.253A3.953,3.953,0,0,0,79.165,19.087Z" transform="translate(-29.291 -3.836)" fill="#be1622"/>
    <path id="Path_12778" data-name="Path 12778" d="M104.523,13.719h-.367a3.559,3.559,0,0,0-.852-.138c-.4-.032-.716-.047-.977-.047a9.355,9.355,0,0,0-1.562.12,8.818,8.818,0,0,0-1.46.4v8.664H95.146V9.767H99.3v1.9a8.655,8.655,0,0,1,2.379-1.561,5.269,5.269,0,0,1,1.862-.385c.147,0,.311,0,.494.012s.346.019.483.035Z" transform="translate(-39.665 -4.069)" fill="#be1622"/>
    <path id="Path_12779" data-name="Path 12779" d="M120.351,21.1q-.335.255-.83.61a6.02,6.02,0,0,1-.933.565,5.926,5.926,0,0,1-1.266.409,7.275,7.275,0,0,1-1.446.132,4.4,4.4,0,0,1-3.087-1.14,3.779,3.779,0,0,1-1.244-2.915,3.925,3.925,0,0,1,.635-2.316,4.259,4.259,0,0,1,1.8-1.417,10.186,10.186,0,0,1,2.857-.737q1.706-.219,3.536-.322V13.9a1.494,1.494,0,0,0-.876-1.482,6.294,6.294,0,0,0-2.579-.41,7.336,7.336,0,0,0-2.19.364q-1.165.364-1.67.559h-.38V9.81q.656-.174,2.138-.408a18.713,18.713,0,0,1,2.964-.237q3.535,0,5.109,1.087a3.857,3.857,0,0,1,1.572,3.417v8.8h-4.106Zm0-2.013V16.4q-.842.07-1.821.191a8.512,8.512,0,0,0-1.482.282,2.042,2.042,0,0,0-.951.568,1.422,1.422,0,0,0-.328.981,2.517,2.517,0,0,0,.069.656,1,1,0,0,0,.346.482,1.678,1.678,0,0,0,.633.338A4.381,4.381,0,0,0,117.97,20a3.424,3.424,0,0,0,1.262-.253A3.956,3.956,0,0,0,120.351,19.087Z" transform="translate(-46.529 -3.836)" fill="#be1622"/>
    <path id="Path_12780" data-name="Path 12780" d="M150.046,12.5a7.279,7.279,0,0,1-1.686,4.978,5.357,5.357,0,0,1-4.2,1.924,7.061,7.061,0,0,1-1.9-.23A6.4,6.4,0,0,1,140.7,18.5l-.174.646h-3.984V1.218H140.7V7.554a10.143,10.143,0,0,1,1.951-1.232,5.31,5.31,0,0,1,2.3-.472,4.429,4.429,0,0,1,3.772,1.769A7.992,7.992,0,0,1,150.046,12.5Zm-4.274.088a5.013,5.013,0,0,0-.585-2.658,2.275,2.275,0,0,0-2.094-.932,4.357,4.357,0,0,0-1.205.178,5.055,5.055,0,0,0-1.185.513v6.487a4.408,4.408,0,0,0,.851.218,7.082,7.082,0,0,0,.965.057,3,3,0,0,0,2.448-.966A4.459,4.459,0,0,0,145.772,12.584Z" transform="translate(-56.994 -0.51)" fill="#be1622"/>
    <path id="Path_12781" data-name="Path 12781" d="M11.338,18.574a13.378,13.378,0,0,1-1.594.3,16.271,16.271,0,0,1-2.06.111,6.258,6.258,0,0,1-4.051-1.1,4.631,4.631,0,0,1-1.325-3.766v-6.8H.393V4.156H2.309V0H6.986V4.159h4.352V7.321H6.986v5.164q0,.768.013,1.337a2.741,2.741,0,0,0,.2,1.022,1.429,1.429,0,0,0,.638.719,2.706,2.706,0,0,0,1.338.268,3.964,3.964,0,0,0,.949-.156,3.982,3.982,0,0,0,.82-.286h.387Z" transform="translate(0)" fill="#be1622"/>
    <path id="Path_12782" data-name="Path 12782" d="M4.066,41.408c0-.653-.16-.91-.593-.91a.507.507,0,0,0-.51.554.921.921,0,0,0,.33.683l.21.188a1.668,1.668,0,0,1,.73,1.514v.7H2.986v-.544a.75.75,0,0,0-.351-.683A6,6,0,0,1,2,42.359a1.861,1.861,0,0,1-.436-1.227,1.831,1.831,0,0,1,1.9-1.86,2.1,2.1,0,0,1,1.387.485,2.111,2.111,0,0,1,.6,1.652ZM2.986,45.841V44.525H4.236v1.316Z" transform="translate(-0.492 -16.439)" fill="#6d6e71"/>
    <path id="Path_12783" data-name="Path 12783" d="M13.419,46.968H12.1c-.661,0-.921.3-.921.9v.852H9.927v-.889a1.8,1.8,0,0,1,1.651-1.989,3.222,3.222,0,0,1-.26-1.375c0-1.482.771-2.5,2.1-2.5,1.351,0,2.121,1.01,2.121,2.513S14.8,46.968,13.419,46.968Zm0-3.928c-.494,0-.821.346-.821,1.415,0,1.02.33,1.375.821,1.375.51,0,.85-.375.85-1.365C14.269,43.386,13.929,43.04,13.419,43.04Z" transform="translate(-3.991 -17.566)" fill="#6d6e71"/>
    <path id="Path_12784" data-name="Path 12784" d="M25.307,47.247a2.131,2.131,0,0,1-2.041,1.86l-.22.02V47.979A.908.908,0,0,0,24,47.247h-.751a1.949,1.949,0,0,1-2.012-2.174c0-1.574.731-2.444,2.012-2.444H25.32v3.483h1.186V47.25Zm-1.24-3.516h-.8c-.68,0-.781.831-.781,1.336,0,.553.261,1.038.781,1.038h.8Z" transform="translate(-8.724 -17.845)" fill="#6d6e71"/>
    <path id="Path_12785" data-name="Path 12785" d="M29.151,49.251V48.014h1.111v1.237Zm3.713-2a2.371,2.371,0,0,1-1.512-.485,2.164,2.164,0,0,1-1.482.485h-.355V46.114h.36c.521,0,.811-.277.811-.712v-2.76h1.261v2.79c0,.416.3.683.921.683h.36v1.138Zm-2.1,2V48.014h1.111v1.237Z" transform="translate(-12.039 -17.85)" fill="#6d6e71"/>
    <path id="Path_12786" data-name="Path 12786" d="M35.64,45.969V44.831c.861,0,1.262-.316,1.262-.9V39.577h1.251V44C38.152,45.22,37.191,45.969,35.64,45.969Z" transform="translate(-14.755 -16.567)" fill="#6d6e71"/>
    <path id="Path_12787" data-name="Path 12787" d="M41.63,45.955V39.543h1.251v6.412Z" transform="translate(-17.262 -16.553)" fill="#6d6e71"/>
    <path id="Path_12788" data-name="Path 12788" d="M55.138,46.968a2,2,0,0,1-1.651-.692,1.962,1.962,0,0,1-1.6.692H50.565c-.66,0-.92.3-.92.9v.852H48.393v-.889a1.8,1.8,0,0,1,1.652-1.989,3.206,3.206,0,0,1-.261-1.375c0-1.482.771-2.5,2.1-2.5,1.352,0,2.121,1.01,2.121,2.513a3.409,3.409,0,0,1-.03.455c.07.593.47.9,1.181.9h.21V46.97ZM51.886,43.04c-.494,0-.82.346-.82,1.415,0,1.02.33,1.375.82,1.375.511,0,.851-.356.851-1.365C52.737,43.386,52.4,43.04,51.886,43.04Z" transform="translate(-20.093 -17.566)" fill="#6d6e71"/>
    <path id="Path_12789" data-name="Path 12789" d="M63.224,45.967a2.371,2.371,0,0,1-1.511-.485,2.168,2.168,0,0,1-1.482.485h-.357V44.828h.361c.52,0,.81-.277.81-.712V39.571h1.261v4.571c0,.416.3.683.921.683h.361v1.138Z" transform="translate(-24.899 -16.565)" fill="#6d6e71"/>
    <path id="Path_12790" data-name="Path 12790" d="M70.2,47.146a3.3,3.3,0,0,1-.971-.138,3.4,3.4,0,0,1-.98.138h-2.5V46.008h1.991l-1.261-1.087a2.762,2.762,0,0,1,5.5,0l-1.272,1.087h2v1.138Zm-.959-3.671A1.306,1.306,0,0,0,67.807,44.6c.361.326,1.1.97,1.421,1.227L70.638,44.6A1.313,1.313,0,0,0,69.237,43.475Z" transform="translate(-27.356 -17.745)" fill="#6d6e71"/>
    <path id="Path_12791" data-name="Path 12791" d="M77.021,40.253V39.016h1.021v1.237Zm3.452,5.481a2.371,2.371,0,0,1-1.511-.485,2.168,2.168,0,0,1-1.482.485H77.12V44.6h.361c.52,0,.81-.277.81-.712V41.117h1.26v2.8c0,.416.3.683.921.683h.361v1.138Zm-1.951-5.481V39.016H79.54v1.237Z" transform="translate(-32.077 -16.332)" fill="#6d6e71"/>
    <path id="Path_12792" data-name="Path 12792" d="M83.059,45.734V44.6c.861,0,1.261-.306,1.261-.889V41.113h1.256v2.652C85.575,44.984,84.609,45.734,83.059,45.734Zm.08-5.481V39.016h1v1.237Zm1.5,0V39.016h1v1.237Z" transform="translate(-34.605 -16.332)" fill="#6d6e71"/>
    <path id="Path_12793" data-name="Path 12793" d="M94.29,47.505a2.474,2.474,0,0,1-.271,0,1.964,1.964,0,0,1-2.012-2.038V41.113h1.251v4.324a.8.8,0,0,0,.911.91c.63,0,.88-.317.88-.91V41.113h1.261v4.365A1.957,1.957,0,0,1,94.29,47.505Zm-.78-7.253V39.016H94.77v1.237Z" transform="translate(-38.351 -16.332)" fill="#6d6e71"/>
    <path id="Path_12794" data-name="Path 12794" d="M99.8,37.531v-.484h.44v-.1a.821.821,0,0,1,.822-.91.757.757,0,0,1,.769.494c-.08.01-.53.089-.53.089a.261.261,0,0,0-.095-.087.266.266,0,0,0-.125-.032c-.291,0-.291.3-.291.435v.11h1.151v.484Zm.741,6.957V38.076H101.8v6.412Z" transform="translate(-41.615 -15.086)" fill="#6d6e71"/>
    <path id="Path_12795" data-name="Path 12795" d="M107.842,47.195V46.057h2.121V44.721c0-.889-.219-1.118-.83-1.118l.22-1.1c1.284,0,1.841.614,1.841,1.81v1.742h1.284v1.138Z" transform="translate(-44.979 -17.793)" fill="#6d6e71"/>
    <path id="Path_12796" data-name="Path 12796" d="M114.555,49.243V48.006h1.12v1.237Zm.581-2h-.1V46.106h.1c.84-.02,1.11-.316,1.11-.889V42.624H117.5v2.652C117.5,46.483,116.666,47.235,115.136,47.244Zm1.031,2V48.006h1.11v1.237Z" transform="translate(-47.789 -17.843)" fill="#6d6e71"/>
    <path id="Path_12797" data-name="Path 12797" d="M123.69,47.244a2.174,2.174,0,0,1-1.14-.3,2,2,0,0,1-2.212,2.068V47.907c1.02,0,.981-.821.981-1.494v-3.79h1.231s0,1.691.02,2.593c0,.623.451.889,1.12.889h.16v1.138Z" transform="translate(-50.21 -17.843)" fill="#6d6e71"/>
    <path id="Path_12798" data-name="Path 12798" d="M125.845,45.734V44.6c.861,0,1.261-.306,1.261-.889V41.113h1.251v2.652C128.357,44.984,127.4,45.734,125.845,45.734Zm.08-5.481V39.016h1v1.237Zm1.5,0V39.016h1v1.237Z" transform="translate(-52.515 -16.332)" fill="#6d6e71"/>
    <path id="Path_12799" data-name="Path 12799" d="M134.8,45.955V39.543h1.251v6.412Z" transform="translate(-56.264 -16.553)" fill="#6d6e71"/>
    <path id="Path_12800" data-name="Path 12800" d="M138.6,45.734V44.6h2.121V43.26c0-.889-.219-1.118-.83-1.118l.22-1.1c1.285,0,1.841.614,1.841,1.81v2.88Zm1.5-5.481V39.016h1.252v1.237Z" transform="translate(-57.854 -16.332)" fill="#6d6e71"/>
    <path id="Path_12801" data-name="Path 12801" d="M146.036,43.926V39.543h1.251V43.9c0,.6.28.92,1.14.92v1.138C146.856,45.955,146.036,45.183,146.036,43.926Z" transform="translate(-60.968 -16.553)" fill="#6d6e71"/>
    <path id="Path_12802" data-name="Path 12802" d="M152.652,47.016a1.637,1.637,0,0,1-1.491-.732,1.775,1.775,0,0,1-1.7.732V45.878c1.061,0,1.03-.979,1.061-1.632a2.081,2.081,0,0,1,2.131-2.168c1.36,0,2.131.988,2.131,2.47S154.023,47.016,152.652,47.016Zm0-3.889c-.5,0-.841.356-.841,1.444,0,1.039.331,1.4.841,1.4s.851-.366.851-1.383C153.5,43.483,153.163,43.127,152.652,43.127Z" transform="translate(-62.401 -17.614)" fill="#6d6e71"/>
  </g>
        </svg>

        </NavBar.Brand>

        <Nav>
            <Nav.Link className={styles["navbar__links"]} id="discover" >
              استكشف
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="0.625rem" height="0.375rem" viewBox="0 0 10 5.993">
  <g id="dropdown" >
    <path id="Path_12841" data-name="Path 12841" d="M11.454,4.29a.961.961,0,0,1,.164-.13L15.494.284a.969.969,0,0,1,1.37,1.37L13.525,4.992,16.88,8.347a.968.968,0,1,1-1.369,1.369L11.618,5.824a1.005,1.005,0,0,1-.164-1.534Z" transform="translate(-11.171 -0.001)" fill="#222"/>
  </g>
</svg> */}



              <img alt="dropdown icon" src="/images/dropdown.svg" id="dropdown"/>
            </Nav.Link>
            <div className={styles["navbar__discover-popover"]} id="discover-popover" >
                <div className={styles["navbar__discover-popover__box"]}>
                  <div className={styles["navbar__discover-popover__caption"]}>
                    التخصصات
                  </div>
                  <ul className={styles["navbar__discover-popover__list"]}>
                    <li>تنمية بشرية</li>
                    <li>تربية الأطفال</li>
                    <li>فنون</li>
                    <li>حياة</li>
                    <li>بيزنس</li>
                    <li>تنمية بشرية</li>
                    <li>تربية الأطفال</li>
                    <li>فنون</li>
                    <li>حياة</li>
                  </ul>
                </div>
                <div className={styles["navbar__discover-popover__box"]}>
                  <div className={styles["navbar__discover-popover__caption"]}>
                  الأقسام
                  </div>
                  <ul className={styles["navbar__discover-popover__list"]}>
                      <li>دورات تدريبية</li>
                      <li>دورات مباشرة</li>
                      <li>الاستشارات</li>
                      <li>كتيبات وملخصات</li>
                      <li>مقالات</li>
                  </ul>
                </div>
                <div className={styles["navbar__discover-popover__box"]}>
                  <div className={styles["navbar__discover-popover__caption"]}>
                  أخري
                  </div>
                  <ul className={styles["navbar__discover-popover__list"]}>
                      <li>عروض</li>
                      <li>المدربين</li>
                      <li>عن تدرب</li>
                      <li>تواصل معنا</li>
                  </ul>
                </div>
              </div>
          {/* </OverlayTrigger> */}

          <div className={styles["navbar__search-bar-container"]}>
            <div
              className={styles["navbar__search-bar-container__icon-wrapper"]}
            >
              {/* <img src="/images/search.svg" alt="search icon" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem" viewBox="0 0 20 20">
  <path id="search" d="M14.677,12.911a8.155,8.155,0,1,0-1.767,1.768L18.233,20,20,18.234l-5.323-5.323Zm-6.552.841A5.625,5.625,0,1,1,13.75,8.127,5.631,5.631,0,0,1,8.125,13.752Z" transform="translate(0 -0.002)" fill="#777"/>
              </svg>
            </div>
            <Form.Control
              type="text"
              placeholder="اكتشف هواياتك..."
              className={styles["navbar__search-bar-container__search-bar"]}
            />
          </div>

          <Nav.Link className={styles["navbar__links"]}>تدرب للشركات</Nav.Link>

          <Nav.Link className={styles["navbar__links"]}>انضم كمدرب</Nav.Link>

          <Button className={styles["navbar__register-btn"]}>حساب جديد</Button>

          <Button className={styles["navbar__sign-in-btn"]}>تسجيل دخول</Button>

          <OverlayTrigger
          trigger='click'
          rootClose
            placement="bottom-start"
            overlay={
              <div className={styles["navbar__cart-popover"]} id="cart-popover">
                <div className={styles["navbar__cart-popover__outer-box"]}>
                  <img
                    src="/images/course img1.png"
                    alt="course image"
                    className={styles["navbar__cart-popover__img"]}
                  />
                  <div
                    className={styles["navbar__cart-popover__course-details"]}
                  >
                    <div
                      className={
                        styles["navbar__cart-popover__course-details__title"]
                      }
                    >
                      مفاتيح النجاح في الحياة
                    </div>
                    <div
                      className={
                        styles["navbar__cart-popover__course-details__author"]
                      }
                    >
                      {" "}
                      د. حسين عبدالكريم{" "}
                    </div>
                    <div
                      className={
                        styles[
                          "navbar__cart-popover__course-details__price-container"
                        ]
                      }
                    >
                      <span
                        className={
                          styles["navbar__cart-popover__course-details__price"]
                        }
                      >
                        850
                      </span>
                      <span
                        className={
                          styles[
                            "navbar__cart-popover__course-details__currency"
                          ]
                        }
                      >
                        جنية مصري
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "navbar__cart-popover__course-details__old-price-container"
                        ]
                      }
                    >
                      <span
                        className={
                          styles[
                            "navbar__cart-popover__course-details__old-price"
                          ]
                        }
                      >
                        950
                      </span>
                      <span
                        className={
                          styles[
                            "navbar__cart-popover__course-details__old-price-currency"
                          ]
                        }
                      >
                        جنية مصري
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles["navbar__cart-popover__outer-box"]}>
                  <img
                    src="/images/course img1.png"
                    alt="course image"
                    className={styles["navbar__cart-popover__img"]}
                  />
                  <div
                    className={styles["navbar__cart-popover__course-details"]}
                  >
                    <div
                      className={
                        styles["navbar__cart-popover__course-details__title"]
                      }
                    >
                      مفاتيح النجاح في الحياة
                    </div>
                    <div
                      className={
                        styles["navbar__cart-popover__course-details__author"]
                      }
                    >
                      {" "}
                      د. حسين عبدالكريم{" "}
                    </div>
                    <div
                      className={
                        styles[
                          "navbar__cart-popover__course-details__price-container"
                        ]
                      }
                    >
                      <span
                        className={
                          styles["navbar__cart-popover__course-details__price"]
                        }
                      >
                        850
                      </span>
                      <span
                        className={
                          styles[
                            "navbar__cart-popover__course-details__currency"
                          ]
                        }
                      >
                        جنية مصري
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "navbar__cart-popover__course-details__old-price-container"
                        ]
                      }
                    >
                      <span
                        className={
                          styles[
                            "navbar__cart-popover__course-details__old-price"
                          ]
                        }
                      >
                        950
                      </span>
                      <span
                        className={
                          styles[
                            "navbar__cart-popover__course-details__old-price-currency"
                          ]
                        }
                      >
                        جنية مصري
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles["navbar__cart-popover__checkout-box"]}>
                  <div
                    className={
                      styles[
                        "navbar__cart-popover__checkout-box__total-price-box"
                      ]
                    }
                  >
                    <div
                      className={
                        styles["navbar__cart-popover__checkout-box__items"]
                      }
                    >
                      الإجمالي (2 دورة)
                    </div>
                    <div>
                      <span
                        className={
                          styles[
                            "navbar__cart-popover__checkout-box__total-price"
                          ]
                        }
                      >
                        1450
                      </span>
                      <span
                        className={
                          styles[
                            "navbar__cart-popover__checkout-box__total-price-currency"
                          ]
                        }
                      >
                        جنية مصري
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "navbar__cart-popover__checkout-box__old-total-price-box"
                        ]
                      }
                    >
                      <span
                        className={
                          styles[
                            "navbar__cart-popover__checkout-box__old-total-price"
                          ]
                        }
                      >
                        1550
                      </span>
                      <span
                        className={
                          styles[
                            "navbar__cart-popover__checkout-box__old-total-price-currency"
                          ]
                        }
                      >
                        جنية مصري
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      styles["navbar__cart-popover__checkout-box__cart-btn"]
                    }
                  >
                    <Button>إذهب للسلة</Button>
                  </div>
                </div>
              </div>
            }
          >
            <div className={styles["navbar__cart-icon-container"]}>
            <svg className={styles["navbar__cart-icon"]} xmlns="http://www.w3.org/2000/svg" width="2.063rem" height="1.875rem" viewBox="0 0 33.02 30.22">
  <g id="cart" transform="translate(0 -21.705)">
    <g id="Group_7" data-name="Group 7" transform="translate(22.027 43.691)">
      <g id="Group_6" data-name="Group 6">
        <path id="Path_12874" data-name="Path 12874" d="M345.664,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,345.664,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,345.664,368.376Z" transform="translate(-341.547 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_9" data-name="Group 9" transform="translate(0 21.705)">
      <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
        <path id="Path_12875" data-name="Path 12875" d="M32.758,27.778a1.234,1.234,0,0,0-.972-.474H7.624L6.513,22.653a1.236,1.236,0,0,0-1.2-.948H1.235a1.235,1.235,0,1,0,0,2.47h3.1l4.014,16.8a1.235,1.235,0,0,0,1.2.948H28.78a1.235,1.235,0,0,0,1.2-.938l3.006-12.146A1.237,1.237,0,0,0,32.758,27.778ZM27.813,39.45H10.527L8.215,29.775H30.207Z" transform="translate(0 -21.705)" fill="#0e0b1d"/>
      </g>
    </g>
    <g id="Group_11" data-name="Group 11" transform="translate(7.082 43.691)">
      <g id="Group_10" data-name="Group 10">
        <path id="Path_12876" data-name="Path 12876" d="M113.923,362.612a4.117,4.117,0,1,0,4.117,4.117A4.122,4.122,0,0,0,113.923,362.612Zm0,5.764a1.647,1.647,0,1,1,1.647-1.647A1.649,1.649,0,0,1,113.923,368.376Z" transform="translate(-109.806 -362.612)" fill="#0e0b1d"/>
      </g>
    </g>
  </g>
            </svg>

             
              <Badge className={styles["navbar__cart-icon__badge"]}>2</Badge>
            </div>
          </OverlayTrigger>
        </Nav>
      </NavBar>
    </>
  );
}
