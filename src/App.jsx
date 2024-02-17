import { useState } from 'react'
import {Routes , Route } from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import PaymentsPage from './Pages/PaymentsPage/PaymentsPage'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import VolunteerPage from './Pages/VolunteerPage/VolunteerPage'
import PaymentSubmitPage from './components/PaymentSubmitPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage'
import './App.css'
import { Drawer } from 'antd'
import { MenuOutlined } from "@ant-design/icons"
import Footer from './components/Footer'

function App() {

  const [holder, setHolder] = useState("")
  const [number, setNumber] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [cvc, setCvc] = useState("")
  const [submit, setSubmit] = useState(false)

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='main'>
      
      <div className='menuheader'>
        <MenuOutlined onClick={() => {
          setOpenMenu(true)
        }}/>
      </div>
      
      <div className='navbardiv'>
      <Navbar />  
      </div>


      <Drawer 
      open={openMenu}
      onClose={() => {
        setOpenMenu(false);
      }}
      closable={false}>
        <Navbar isInline setOpenMenu={setOpenMenu}/>
      </Drawer>

      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="payment" element={submit ? <PaymentSubmitPage /> :<PaymentsPage holder={holder} setHolder={setHolder} number={number} setNumber={setNumber} month={month} setMonth={setMonth} year={year} setYear={setYear} cvc={cvc} setCvc={setCvc} setSubmit={setSubmit} submit={submit}/>} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="login" element={<LoginPage /> } />
        <Route path="register" element={<RegisterPage />} />
        <Route path="volunteer" element={<VolunteerPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
