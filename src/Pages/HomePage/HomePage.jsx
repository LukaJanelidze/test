import { Component } from "react"
import { Link } from "react-router-dom";
import Slider from "react-slick"
import "./HomePage.css";
import "./Slick.css";
import "./Slick-theme.css"
// import PictureForSlider1 from './../../assets/images-2/pic1.jpg'
// import PictureForSlider2 from './../../assets/images-2/pic2.jpg'
// import PictureForSlider3 from './../../assets/images-2/pic3.webp'
// import PictureForSlider4 from './../../assets/images-2/pic4.jpg'
// import PictureForSlider5 from './../../assets/images-2/pic5.jpg'
// import PictureForSlider6 from './../../assets/images-2/pic6.webp'
// import PictureForSlider7 from './../../assets/images-2//pic7.jpg'
import Picture from './../../assets/images/picture.jpg'

export default class Homepage extends Component{
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,


        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      return (
        <div className="homepage-main">
          <Slider {...settings}>
            
          <Link to="/" className="slider-container-links">
            <div>

              <div className="slider-container">
                <img src={Picture} alt="" />
                <div className="slider-news-container">
                <span className="slider-date">20 იანვარი</span>
                <div className="slider-detail-1">
                <div className="slider-detail-2"></div>
                </div>
                <p className="slider-paragraph">აქ იქნება ტექსტი</p>
                </div>
              </div>

            </div>
          </Link>


          <Link to="/" className="slider-container-links">
            <div>

              <div className="slider-container">
                <img src={Picture} alt="" />
                <div className="slider-news-container">
                <span className="slider-date">20 იანვარი</span>
                <div className="slider-detail-1">
                <div className="slider-detail-2"></div>
                </div>
                <p className="slider-paragraph">აქ იქნება ტექსტი</p>
                </div>
              </div>

            </div>
          </Link>

          <Link to="/" className="slider-container-links">
            <div>

              <div className="slider-container">
                <img src={Picture} alt="" />
                <div className="slider-news-container">
                <span className="slider-date">20 იანვარი</span>
                <div className="slider-detail-1">
                <div className="slider-detail-2"></div>
                </div>
                <p className="slider-paragraph">აქ იქნება ტექსტი</p>
                </div>
              </div>

            </div>
          </Link>

          <Link to="/" className="slider-container-links">
            <div>

              <div className="slider-container">
                <img src={Picture} alt="" />
                <div className="slider-news-container">
                <span className="slider-date">20 იანვარი</span>
                <div className="slider-detail-1">
                <div className="slider-detail-2"></div>
                </div>
                <p className="slider-paragraph">აქ იქნება ტექსტი</p>
                </div>
              </div>

            </div>
          </Link>

          <Link to="/" className="slider-container-links">
            <div>

              <div className="slider-container">
                <img src={Picture} alt="" />
                <div className="slider-news-container">
                <span className="slider-date">20 იანვარი</span>
                <div className="slider-detail-1">
                <div className="slider-detail-2"></div>
                </div>
                <p className="slider-paragraph">აქ იქნება ტექსტი</p>
                </div>
              </div>

            </div>
          </Link>

          <Link to="/" className="slider-container-links">
            <div>

              <div className="slider-container">
                <img src={Picture} alt="" />
                <div className="slider-news-container">
                <span className="slider-date">20 იანვარი</span>
                <div className="slider-detail-1">
                <div className="slider-detail-2"></div>
                </div>
                <p className="slider-paragraph">აქ იქნება ტექსტი</p>
                </div>
              </div>

            </div>
          </Link>

          <Link to="/" className="slider-container-links">
            <div>

              <div className="slider-container">
                <img src={Picture} alt="" />
                <div className="slider-news-container">
                <span className="slider-date">20 იანვარი</span>
                <div className="slider-detail-1">
                <div className="slider-detail-2"></div>
                </div>
                <p className="slider-paragraph">აქ იქნება ტექსტი</p>
                </div>
              </div>

            </div>
          </Link>

          </Slider>

          <hr className="homepage-hr"/>

          <div className="section">

          <Link to="/" className="section-links">
            <div className="section-div">
                <img src={ Picture } alt="picture" />
                <div className="news-section">
                  <h3>30 დეკემბერი</h3>
                  <h2>სათაური</h2>
                  <p>აქ იქნება ტექსტი</p>
                </div>
              </div>
          </Link>

          <Link to="/" className="section-links">
            <div className="section-div">
                <img src={ Picture } alt="picture" />
                <div className="news-section">
                  <h3>30 დეკემბერი</h3>
                  <h2>სათაური</h2>
                  <p>აქ იქნება ტექსტი</p>
                </div>
              </div>
          </Link>

          <Link to="/" className="section-links">
            <div className="section-div">
                <img src={ Picture } alt="picture" />
                <div className="news-section">
                  <h3>30 დეკემბერი</h3>
                  <h2>სათაური</h2>
                  <p>აქ იქნება ტექსტი</p>
                </div>
              </div>
          </Link>

          </div>

          <div className="second-section-box">
          <Link to="/" className="second-section-links">
            <div className="second-section">
              <img src={ Picture } alt="სურათი" />
              <h2 className="second-section-h2">აქ იქნება ტექსტი</h2>
            </div>
          </Link>
 
          <Link to="/" className="second-section-links">
            <div className="second-section">
              <h2 className="second-section-h2">აქ იქნება ტექსტი</h2>
              <img src={ Picture } alt="სურათი" />
            </div>
          </Link>

            <Link to="/" className="second-section-links">
            <div className="second-section">
              <img src={ Picture } alt="სურათი" />
              <h2 className="second-section-h2">აქ იქნება ტექსტი</h2>
            </div>
          </Link>

          </div>

        </div>
      );
    }
  }