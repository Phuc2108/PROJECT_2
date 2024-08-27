import {HERO_CONTENT} from '../constants';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
      {/**
      *max-width: 72rem;
      * margin-left: auto;
      * margin-right: auto;
      * border-bottom: 2px solid;
      */}
      <div className="flex flex-col items-center my-20">
        {/**
        * display: flex
        * flex-direction: column
        * align-items: center
        * margin-top: 5rem;
        *margin-bottom: 5rem;
        */}
      <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold">
        {/**
        *font-size: 3rem;
        * padding: 0.5rem;
        *text-transform: uppercase;
        * font-weight: 700;
         @media (min-width: 1024px) {
        font-size: 10rem;
        }
        * 
        */}
        {HERO_CONTENT.title}
      </h1>
        <p className="lg:mt-6 text-sm mb-4 font-medium tracking-tighter">
          {/** 
          *font-size: 0.875rem
          * font-weight: 500;
          * letter-spacing: -0.025em;
          *margin-bottom: 1rem;
          * @media (min-width: 1024px) {
          margin-top: 1.5rem
           }
          * 
          */}
          {HERO_CONTENT.subtitle}
        </p>
        <img src={HERO_CONTENT.image} className="w-full h-[65vh] object-cover rounded-2xl p-2" alt="Hero"/>
        {/**
        *width: 100%;
        * height: 65vh
        * object-fit: cover
        * border-radius: 1rem
        * padding: 0.5rem
        */}
      </div>
    
    </section>
    
  )}