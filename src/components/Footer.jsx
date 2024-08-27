import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri';

export default function Footer() {

  return (

    <footer className="max-w-7xl mx-auto">
      {/** */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
        {/** */}
      <div className="flex space-x-6 mb-2">
        {/**1 */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
      
         <RiFacebookFill />
      </a>
      
        
        {/**2 */}
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
         <RiTwitterFill />
      </a>
       
        
        {/**3 */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
         <RiInstagramFill />
      </a>
      </div>
      <p className="text-sm">&copy; 2024 VastuSpaze. All rights reserved.</p>
      
      </div>
    </footer>
  )}