import { FormEvent, useState } from 'react'
import './App.css'
import mainImg from './assets/illustration-dashboard.png'
import { HeaderIcon } from './components/HeaderIcon'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Footer } from './components/Footer'

export function App() {
  const [formVisible, setFormVisible] = useState(true)
  const [subscribedVisible, setSubscribedVisible] = useState(false)
  const [emailValue, setEmailValue] = useState("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value)
  }

  const changeMenu = (event: FormEvent): void => {
    event.preventDefault()

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailValue)) {
      console.log("Email Invalido")
      return
    }

    setFormVisible(!formVisible)
    setSubscribedVisible(!subscribedVisible)
  }

  const invalidInputOutline = () => {
    console.log('Invalid email:');
  }

  return (
    <>
      <header className='header1'>
        <HeaderIcon />
      </header>
      <main>
        <section className='info' >
          <h1>We are launching <span>soon!</span></h1>
          <p>Subscribe and get notified</p>
        </section>
        <section className='formSection'>
          { formVisible && <form onSubmit={changeMenu} >
            <Input 
              type="email" 
              onChange={handleInputChange} 
              onInvalid={invalidInputOutline} 
              required={true} 
              placeholder='Your email address...'
            />
            <Button type='submit'>Notify Me</Button>
          </form>}
          {subscribedVisible && <div className="subscribed">
            <h2>Thank you for subscribing, we will get back to you at <span>{emailValue}</span> as soon as possible.</h2>
            <Button type='button' onClick={changeMenu} >Back</Button>
          </div>}
        </section>
        <section>
         <img src={mainImg} />
        </section>
      </main>
      <footer className='footerMain'>
        <Footer />
      </footer>
    </>
  )
}
