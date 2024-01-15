import { Link } from "react-router-dom"
import { Menu } from "antd"
import "./Navbar.css"

export default function Navbar({isInline=false}) {

    return (
        <header>
        <Link to="/" className='homepage'>მთავარი</Link>
        <Menu 
        className="navbar" 
        mode={ isInline?"inline":"horizontal"}
        items={
            [
                {
                    label: "პროფილი",
                    key: "profile",
                },
                {
                    label: "მოხალისეობა",
                    key: "volunteer",
                },
                {
                    label: "რეგისტრაცია",
                    key: "register",
                },
                {
                    label: "შემოწირულობა",
                    key: "payment",
                },
            ]
        }
        >
        {/* <Link to="profile" className='links' >პროფილი</Link>
        <Link to="volunteer" className='links' >მოხალისეობა</Link>
        <Link to="register" className='links' >რეგისტრაცია</Link>
        <Link to="payment" className='links' >შემოწირულობა</Link> */}

        </Menu>

        </header>
    )
}