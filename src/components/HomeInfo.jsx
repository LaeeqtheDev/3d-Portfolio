import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
  Hi, I'm
  <span className='font-semibold mx-2 text-white'>Laeeq</span>
  — a frontend-focused fullstack engineer from Lahore, PK.<br />
  I build performant web applications using React, Next.js, Node.js, and React Native.
</h1>
      
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
       <p className='font-medium sm:text-xl text-center'>
  I’m a self-driven engineer with 4+ years of hands-on experience. I’ve learned by building, shipping, and scaling real-world applications.
</p>


        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
       <p className='font-medium text-center sm:text-xl'>
  I specialize in building end-to-end products — from responsive UI to backend integration — with an emphasis on code quality, scalability, and maintainability.
</p>


        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
  Looking to collaborate on a complex frontend system or scale a production-ready app? Let’s connect — I’m open to serious technical challenges.
</p>


        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
