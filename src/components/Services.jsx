import {SERVICES_CONTENT} from '../constants';

export default function Services() {
  return (
  <section className="max-w-7xl mx-auto border-b-2" id="services">
    {/***font-size: 0.875rem
          * font-weight: 500;
          * letter-spacing: -0.025em;
          *margin-bottom: 1rem;
          * @media (min-width: 1024px) {
          margin-top: 1.5rem
           } */}
  <div className="my-20">
    {/**
    margin-top: 5rem;
    margin-bottom: 5rem; */}
  <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-20">
    私たちの住宅改修サービス</h2>
    {/** 
    font-size: 1.25rem
    letter-spacing: -0.025em;
    text-align: center
    text-transform: uppercase;
    margin-bottom: 5rem; 
    @media (min-width: 1024px) {
    font-size: 2rem
    }
    */}
  {SERVICES_CONTENT.map((service, index) => (
      <div key ={index} className="mb-12 mx-4 flex flex-col lg:flex-row"> 
        {/**
        margin-bottom: 3rem;
        margin-left: 1rem;
        margin-right: 1rem;
        display: flex
        flex-direction: column
        @media (min-width: 1024px) {
        flex-direction: row;
        }
        */}
      <div className={`lg:w-1/2 mb-4 lg:mb-0 ${
        index%2===0 ? "" : "lg:order-2"
      }`}>
        {/**
        *width: 50%
        * margin-bottom: 1rem;
        * @media (min-width: 1024px) {
        margin-bottom: 0;
        order: 2
         }
        */}
      <img src={service.image} alt={service.title} className="w-full h-auto object-cover rounded-lg"/>
        {/**
        *width: 100%
        * height: autilo
        * object-fit: cover
        * border-radius: 0.5rem;
        */}
      </div>
        <div className={`lg:w-1/2 flex flex-col ${
        index%2===0 ? "lg:pl-12" : "lg:pr-12"
        }`}>
          {/**
          *width : 50%
          * display:flex
          * flex-direction: column
          * @media (min-width: 1024px) {
          padding-left: 3rem
          padding-right: 3rem
           }
          */}
        <h3 className="text-xl lg:text-2xl font-medium mb-2">{service.title}</h3>
          {/**
          *font-size: 1.25rem;
          * font-weight: 500;
          * margin-bottom: 0.5rem
          * @media (min-width: 1024px) {
          font-size: 1.5rem;
           }
          */}
          <p className="mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9">{service.description}</p>
          {/**
          *margin-bottom: 1rem
          * font-size: 1rem
          * @media (min-width: 1024px) {
          letter-spacing: 0.025em
          font-size: 1.25rem;
          line-height: 1.5rem
           }
          */}
        </div>
      </div>
        ) )}
  </div>
  </section>
    
  )}