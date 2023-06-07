import classes from './StartPage.module.css';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/icons';


const StartPage = () => {
  return (
    <div
      className={`h-screen flex items-center justify-center flex-col  ${classes.container}`}
    >
      <Logo classes='absolute top-343' />
      <Link to='/credentials' className=' overflow-hidden mx-auto'>
        <h1
          to='/credentials'
          className={`font-extrabold text-3xl overflow-hidden opacity-0 hover:cursor-pointer text-black ${classes.heading} text-center `}
        >
          კითხვარის <br /> დაწყება
        </h1>
      </Link>
    </div>
  );
};

export default StartPage;
