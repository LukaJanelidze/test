import {useState} from 'react'
import BackCard from './../../assets/images/bg-card-back.png'
import Logos from './../../assets/images/card-logo.png'
import ReactInputMask from 'react-input-mask'
import './PaymentsPage.css'

export default function PaymentsPage(props) {

    const [holderError, setHolderError] = useState("")
    const [numberError, setNumberError] = useState("")
    const [monthError, setMonthError] = useState("")
    const [yearError, setYearError] = useState("")
    const [cvcError, setCvcError] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!props.holder) {
            setHolderError("არ უნდა იყოს ცარიელი!")
        }

        if(props.number.replaceAll(" ", "").length <= 15) {
            setNumberError("უნდა იყოს არანაკლებ 16 ციფრი")
        }

        if(!props.number) {
            setNumberError("არ უნდა იყოს ცარიელი!")
        }

        if(!props.month) {
            setMonthError("შესავსებია")
        }

        if(!props.year) {
            setYearError("შესავსებია")
        }

        if(!props.cvc) {
            setCvcError("შესავსებია")
        }

    }

    return (
        <div className='paymentspage'>

        <div className='cards'>

        <div className="back-card-box">
        <img src={BackCard} alt="Card back" className='back-card' />
        <p className="card-back-cvc">{props.cvc ? props.cvc : "123"}</p>
        </div>

        <div className='front-card-box'>
        <div alt="Card front" className='front-card'> </div>
        <img src={Logos} alt="Card logo" className='logos' />
        <p className="card-numbers">{props.number ? props.number : "0000 0000 0000 0000"}{" "}</p>
        <p className="card-holder-name">{props.holder ? props.holder : "სახელი გვარი"}</p>
        <p className="card-date">{props.month ? props.month : "00"}/{props.year ? props.year : "00"}</p>
        </div>

        <form className='first-form'>
                
                <div className="information">

                    <div className='card-holder'>
                            <label htmlFor="holder" >Cardholder Name</label>
                            <input 
                            type="text" 
                            id='holder'
                            placeholder='e.g. Jane Appleseed'
                            onChange={(event) => {props.setHolder(event.target.value.toUpperCase())
                            setHolderError("")
                            }}
                            />
                            <p className='error'>{holderError}</p>
                        </div>

                        <div className='card-number'>
                            <label htmlFor="number" >Card Number</label>
                            <ReactInputMask
                            mask={"9999 9999 9999 9999"}
                            maskChar={null}
                            id='number'
                            placeholder='e.g. 1234 5678 9123 0000'
                            onChange={(event) => {props.setNumber(event.target.value)
                            setNumberError("")
                            }}
                            />
                            <p className="error">{numberError}</p>
                        </div>

                        <div className='cvcdate'>
                            <div className='date-info'>
                                <label htmlFor="date">Exp. Date (MM/YY)</label>

                                <input 
                                type="number" 
                                id='month' 
                                placeholder='MM' 
                                value={props.month}
                                onChange={(event) => {
                                    if(event.target.value.length <=2) {
                                        props.setMonth(event.target.value)
                                    }
                                    setMonthError("")
                                    }}
                                />

                                <input 
                                type="number" 
                                id='year' 
                                placeholder='YY'
                                value={props.year}
                                onChange={(event) => {
                                    if(event.target.value.length <=2) {
                                        props.setYear(event.target.value)
                                    }
                                    setYearError("")
                                    }} 
                                />
                                <p className='error'>{monthError || yearError && yearError}</p>

                            </div>

                            <div className='cvc-info'>
                            <label htmlFor="cvc" className='classcvc'>CVC</label>
                            <input 
                            type="number" 
                            id="cvc" 
                            placeholder='e.g. 123' 
                            value={props.cvc}
                            onChange={(event) => {
                                if(event.target.value.length <=3) {
                                    props.setCvc(event.target.value)
                                }
                                setCvcError("")
                                }} 
                            />
                            <p className='error'>{cvcError}</p>

                            </div>
                        </div>

                        <button type='submit' onClick={(event) => {
                    handleSubmit(event)
                        if(props.holder && props.number && props.month && props.year && props.cvc) {
                            props.setSubmit(true)}}}>
                        დადასტურება
                    </button>

                </div>

            </form>

        </div>

    </div>
    )
}