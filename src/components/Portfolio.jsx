import {PORTFOLIO_PROJECTS} from '../constants';

export default function Portfolio() {
  return (
 <section className="max-w-7xl mx-auto border-b-2" id="portfolio">
   {/**font-size: 0.875rem
          * font-weight: 500;
          * letter-spacing: -0.025em;
          *margin-bottom: 1rem;
          * @media (min-width: 1024px) {
          margin-top: 1.5rem */}
 <div className="mb-20">
   {/**margin-top: 5rem;
    margin-bottom: 5rem;  */}
 <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12">ポートフォリオ</h2>
   {/**font-size: 1.25rem
    letter-spacing: -0.025em;
    text-align: center
    text-transform: uppercase;
    margin-top: 5rem; 
    margin-bottom: 3rem;
    @media (min-width: 1024px) {
    font-size: 2rem
    } */}
   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
     {/**display: grid;
     *grid-template-columns: repeat(1, minmax(0, 1fr))
     * @media (min-width: 768px) {
     grid-template-columns: repeat(2, minmax(0, 1fr))
      }
     */}
     {PORTFOLIO_PROJECTS.map((project) => (
        <div key={project.id} className="group relative overflow-hidden rounded-3xl mx-4">
          {/**
          position: relative
          overflow: hidden;
          border-radius: 1.5rem;
          margin-left: 1rem;
          margin-right: 1rem;
          */}
        <img src={project.image} alt={project.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-100"/>
          {/**
          *height: 100%;
          * width:100%
          * object-fit: cover;
          * transition: transform 0.5s
          * .portfolio-item:hover .portfolio-image {
  transform: scale(1);}
          */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg trasition-opacity duration-500 group-hover:opacity-100">
            {/** 
            *position: absolute;
            * inset: 0;
            * display: flex;
            * flex-direction: column;
            * align-items-center
            * justify-content: center
            * backdrop-filter: blur(10px);
            * transition: opacity 0.5s
            * :hover{
               opacity:1
               }
            */}
          <h3 className="mb-2 text-xl font-medium">{project.name}</h3>
            {/**
            *margin-bottom: 0.5rem
            * font-size: 1.25rem;  2
line-height: 1.75rem
           font-weight: 500;
            */}
            <p className="mb-12 p-4">{project.description}</p>
            {/** 
            *margin-bottom: 3rem
            * padding: 1rem;
            */}
          </div>
          
        </div>
     )) }
   </div>
 </div>
 </section>
    
  )}