import Image from 'next/image';
import LogoImage from '../assets/images/logosaas.png'
import MenuIcon from '../assets/icons/menu.svg'

export const Navbar = () => {
  return (
    <div className='bg-black px-4'>
        <div className='py-4 flex items-center justify-between'>
          
          {/* <div className='relative'>
            <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#FCD6FF,#29DFFF,#FFFD80,#F89ABF,#FCD6FF)] blur-md' />
            <Image src={LogoImage} alt='saas-logo' className='h-12 w-12 relative' />
          </div>

          <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
            <MenuIcon className='text-white' />
          </div>

          <nav className='gap-6 items-center hidden sm:flex'>
            <a className='text-white text-opacity-60 hover:text-opacity-100 transiton'>About</a>
            <a className='text-white text-opacity-60 hover:text-opacity-100 transiton'>Features</a>
            <a className='text-white text-opacity-60 hover:text-opacity-100 transiton'>Updates</a>
            <a className='text-white text-opacity-60 hover:text-opacity-100 transiton'>Help</a>
            <a className='text-white text-opacity-60 hover:text-opacity-100 transiton'>Customers</a>
            <button className='bg-white py-2 px-4 rounded-lg'>Get for free</button>
          </nav> */}

        </div>
    </div>
  );
};
