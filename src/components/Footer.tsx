import { Facebook, Twitter, Instagram } from 'lucide-react'
import './Footer.module.css'

export function Footer() {
  return (
    <footer>
      <ul>
        <li> <a href="#">
          <Facebook color='#4f85f3' width={20}/>
        </a> </li>
        <li> <a href="#">
          <Twitter color='#4f85f3' width={20}/>
        </a> </li>
        <li> <a href="#">
          <Instagram color='#4f85f3' width={20}/>
        </a> </li>
      </ul>
      <p>&copy; Copyright Ping. All rights reserved.</p>
      <p><a href="https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da" target='_blank'>FrontEnd Mentor</a></p>
    </footer>
  )
}