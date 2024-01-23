import  { Component } from "react"
import Slider from "react-slick"
import "./HomePage.css";
import "./Slick.css";
import "./Slick-theme.css"
import Picture from "./../../assets/images/picture.jpg"

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
        className: "center",
        centerMode: true,

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
        <div className="slider">
          <h2>სიახლეები</h2>
          <Slider {...settings}>
            <div>

              <div className="slider-container">
                <img src={Picture} alt="" />
                <p className="slider-headline">ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი</p>
              </div>

            </div>
            <div>

            <div className="slider-container">
                <img src={Picture} alt="" />
                <p className="slider-headline">ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი</p>
              </div>
            </div>

            <div>

            <div className="slider-container">
                <img src={Picture} alt="" />
                <p className="slider-headline">ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი</p>
              </div>
            </div>

            <div>

            <div className="slider-container">
                <img src={Picture} alt="" />
                <p className="slider-headline">ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი</p>
              </div>
            </div>

            <div>

            <div className="slider-container">
                <img src={Picture} alt="" />
                <p className="slider-headline">ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი</p>
              </div>
            </div>

            <div>

            <div className="slider-container">
                <img src={Picture} alt="" />
                <p className="slider-headline">ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი, ერთი ორი სამი ოთხი ხუთი ექვსი შვიდი რვა ცხრა ათი</p>
              </div>

            </div>
          </Slider>
        </div>
      );
    }
  }