import EcosystemIcon from '../assets/icons/ecosystem.svg'
import { GrAd } from "react-icons/gr";
import { GrAggregate } from "react-icons/gr";
import { GrValidate } from "react-icons/gr";



const features = [
  {
    icon: GrAggregate,
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    icon: GrAd,
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    icon: GrAd,
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Everything you need</h2>
        <div className='max-w-xl mx-auto'>
          <p className='text-center mt-5 text-xl text-white/70'>
            Enjoy customizable lists, team work tools, and smart tracking all in one place.
            Set tasks, get reminders, and see your progress simply and quickly.
          </p>
        </div>

        <div className='mt-16 flex flex-col sm:flex-row gap-4'>
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className='border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1'>
              <div className='mx-auto inline-flex h-14 w-14 border border-white/30 justify-center items-center rounded-lg'>
                <Icon className='text-[#A46EDB]'/>
              </div>
              <h3 className='mt-6 font-bold'>{title}</h3>
              <p className='mt-2 text-white/70'>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
