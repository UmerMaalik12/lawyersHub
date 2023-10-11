import CompanyLogo from '@/Images/justice logo.png';
import Image from 'next/image';
import linkLogo from '@/Images/link logo.svg'
const Navbar = () => {
  return (
    <>
      <div className='flex h-10'>
        <div>
          <Image
            src={CompanyLogo}
            alt='Company Logo'
            className='p-1'
            width={40}
            height={40}
          />
        </div>
        <div className='h-full w-full'>
          <ul className='flex space-x-10 items-center justify-end h-full w-full'>
            <li className='relative group'>
              <a
                href='#'
                
              >
                HOME
                <span className='absolute bottom-0 left-0 w-0 bg-black h-0.5 transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </a>
            </li>
            <li className='relative group'>
              <a
                href='#'
               
              >
                ABOUT
                <span className='absolute bottom-0 left-0 w-0 bg-black h-0.5 transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </a>
            </li>
            <li className='relative group'>
              <a
                href='#'
               
              >
                FAQ
                <span className='absolute bottom-0 left-0 w-0 bg-black h-0.5 transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </a>
            </li>
            <li className='relative group'>
              <a
                href='#'
               
              >
                FAQ1
                <span className='absolute bottom-0 left-0 w-0 bg-black h-0.5 transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </a>
            </li>
            <li className=' relative group'>
              <a
                href='#'
               
              >
                FAQ2
                <span className='absolute bottom-0 left-0 w-0 bg-black h-0.5 transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </a>
            </li>
            <li>
                <button className='flex items-center justify-center py-2 rounded-full bg-black text-white text-sm w-20'>App
                <Image src={linkLogo} alt='link' height={15} width={15}></Image>
                </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
