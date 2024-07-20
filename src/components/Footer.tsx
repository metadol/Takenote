import Insta from '../assets/icons/insta.svg'
import Twitter from '../assets/icons/x-social.svg'
import Youtube from '../assets/icons/youtube.svg'


export const Footer = () => {
  return (
    <footer className='bg-black text-white/60 py-5 border-t border-white/20'>
      <div className="container">
        <div className='flex flex-col sm:flex-row  sm:justify-between gap-4'>
          <div className='text-center'>
            © 2024 TakeNote Inc. All rights reserved
          </div>

          <ul className='flex justify-center gap-2.5'>
            <li><Insta/></li>
            <li><Twitter/></li>
            <li><Youtube/></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
