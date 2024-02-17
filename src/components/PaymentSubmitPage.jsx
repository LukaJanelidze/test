import './PaymentSubmitPage.css'
import MainImage from './../assets/images/MainImg.png'

export default function PaymentSubmitPage() {
    return (
        <form className='second-form'>
        <img src={MainImage}  alt="გამარჯვების კოალიცია - ერთიანი ნაციონალური მოძრაობა / სტრატეგია აღმაშენებელი"></img>
        <h1>მადლობა!</h1>
        <p>საკრედიტო ბარათის მონაცემები წარმატებით დაემატა</p>
        <button>მთავარზე გადასვლა</button>
    </form>
    )
}