import aboutImage from '../assets/about.webp';

export default function About() {
  return (
 <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
   {/**font-size: 0.875rem
          * font-weight: 500;
          * letter-spacing: -0.025em;
          *margin-bottom: 1rem;
          * @media (min-width: 1024px) {
          margin-top: 1.5rem */}
   <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12">について</h2>
   {/** */}
 <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
   {/** */}
 <div className="mb-8 lg:mb-0">
   {/** */}
  <img src={aboutImage} alt="About Vatuspaze" className="w-full h-auto"/>
   {/** */}
 </div>
   <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">At VastuSpaze, we believe in transfo rming houses into dream homes. With a passion for design and a commitment to quality, our team of skilled professionals has been dedicated to delivering exceptional renovation services for over a decade. We specialize in creating beautiful, functional spaces that reflect our clients unique tastes and lifestyles. From mode rn kitchens and luxurious bathrooms to serene outdoor living areas and cozy home offices, we bring our expertise to every project, ensuring each renovation is tailo red to meet your specific needs and desires. Our mission is to enhance the beauty and functionality of your home, making it a place where you can truly thrive. </p>
   {/** */}
 </div>
 </section>
    
  )}