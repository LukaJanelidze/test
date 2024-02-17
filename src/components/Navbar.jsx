/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";
// import MainPicture from "./../assets/images/MainImg.png"
import Picture from './../assets/images/picture.jpg'
import "./Navbar.css";

export default function Navbar({ isInline = false, setOpenMenu }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/${e.key}`);
    setOpenMenu(false);
  };

  const items = [
    {
      label: "პროფილი",
      key: "profile",
    },
    {
      label: "მოხალისეობა",
      key: "volunteer",
    },
    {
      label: "შესვლა",
      key: "login",
    },
    {
      label: "შემოწირულობა",
      key: "payment",
    }
  ];

  return (
    <header>
      <Link to="/" className="homepage"
      onClick={
        () => setOpenMenu(false)
      }>
        <img src={Picture} alt="" />
      </Link>
      <Menu
        className="navbar"
        mode={isInline ? "inline" : "horizontal"}
        onClick={handleClick}
      >
        {items.map((item) => (
          <Menu.Item key={item.key}>{item.label}</Menu.Item>
        ))}
      </Menu>
    </header>
  );
}