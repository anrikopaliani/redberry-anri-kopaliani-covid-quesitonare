import classes from './StartPage.module.css';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/icons';
import { motion } from 'framer-motion';

const StartPage = () => {
  return (
    <motion.div
      className={`h-screen flex items-center justify-center flex-col  ${classes.container}`}
      exit={{ opacity: 0 }}
    >
      <Logo classes='absolute top-400' />
      <Link to='/credentials' className='mt-24 overflow-hidden mx-auto'>
        <h1
          to='/credentials'
          className={`font-extrabold text-3xl overflow-hidden opacity-0 hover:cursor-pointer text-black ${classes.heading} text-center `}
        >
          კითხვარის <br /> დაწყება
        </h1>
      </Link>
    </motion.div>
  );
};

export default StartPage;
