import { useState } from 'react'
import logo from '../assets/logo.webp';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import {LINKS} from '../constants';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <nav className="border-b-2">
      {/**border-bottom: 2px solid; */}
    <div className="max-w-7xl mx-auto flex items-center justify-between py-8">
      {/**
      *max-width: 72rem
      *margin-left: auto;
      * display: flex;
      * align-items: center;
      * justify-content: space-between;
      * py-8{
      padding-top: 2rem;
      padding-bottom: 2rem;
      * }
      */}
      <div className="pl-2">
        {/** padding-left: 0.5rem;*/}
        <a href="#">
        <img src={logo} width={150} height={15} alt="VastuSpace"/>
        </a>
        </div>
     
      <div className="md:hidden">
        {/** 
        * @media(768px){
        display:hidden
         }
        */}
         <button onClick={toggleMenu} className="text-2xl pr-2 focus:outline:none" aria-label={isOpen ? "Close menu" : "Open menu"}>
         {/**
         *button:focus{}
         * .button {
  font-size: 2rem;
         padding-right: 0.5rem
         outline: none
          }
         */}
         {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
         </button>
      </div>

      <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
        {/**
        *display: none
        * padding-right: 0.5rem;
        * @media (min-width: 768px) {
              display: flex;
              gap: 2rem;
              }
        * @media (min-width: 1024px) {
            gap: 1rem;
        }
        */}
        {LINKS.map((link, index) => (
      <a key={index} href={link.link} className="uppercase text-sm font-medium">
        {/**
        *text-transform: uppercase;
        *font-size: 0.875rem;
        * font-weight: 500
        */}
        {link.name}
      </a>
        ) )}
      </div>
      
    </div>

      <div className={`${
      isOpen ? "block" : "hidden"} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}>
      {/**.mobile-nav {
       *display: none;
       * position: absolute
       * background-color: #f3f4f6;
       *width: 100%
        py-5 [
       *padding-top: 2rem;
       * padding-bottom: 2rem;
       ]
       px-4[
       * padding-left: 1rem; 
       * padding-right: 1rem;
       ]
       margin-top: 0.5rem;
       border-bottom: 4px solid;
       } 
       * display:none
       */}
        {LINKS.map((link, index) => (
      <a key={index} href={link.link} className="uppercase text-lg font-medium block py-2 tracking-wide">
        {/**
        *text-transform: uppercase
        *font-size: 1.125rem;
        * font-weight: 500
        * display: block
        * padding-top: 0.5rem;
        * padding-bottom: 0.5rem;
        * letter-spacing: 0.05em
        */}
        {link.name}
      </a>
        ) )}
      </div>
    </nav>
  )
    }