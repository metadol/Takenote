import Helix from '../assets/images/helix2.png'
import Emostar from '../assets/images/emojistar.png'
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 overflow-clip">
      <div className="container max-w-xl relative">

        <Image src={Helix} alt={"helix"} className='absolute top-6 left-[calc(100%+36px)]' />
        <Image src={Emostar} alt={"emostar"} className='absolute -top-[109px] right-[calc(100%+24px)]' />

        <h2 className='text-center font-bold text-5xl sm:max-w-[648px] mx-auto sm:text-6xl tracking-tighter'>
          Get instant access
        </h2>
        <div className=' mx-auto'>
          <p className='text-center mt-5 text-xl text-white/70'>
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
        </div>

        <form className="mt-10 flex flex-col max-w-96 mx-auto sm:flex-row gap-2.5">
          <input
            type="email"
            placeholder="email"
            className="h-12 bg-white/20 rounded-lg px-5 sm:flex-1"
          />
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Get access</button>
        </form>

      </div>
    </div>
  );
};
