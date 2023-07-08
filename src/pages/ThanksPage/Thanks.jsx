import { motion } from 'framer-motion';
import { Star } from '@/components';
import { useThanks } from '@/hooks';

const Thanks = () => {
  useThanks();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='bg-black w-screen h-screen flex justify-center items-center z-30'
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        className='text-white text-6xl leading-76 relative'
      >
        <Star width='53' height='53' bigStar={true} />
        მადლობა
        <Star width='33' height='33' bigStar={false} />
      </motion.div>
    </motion.div>
  );
};

export default Thanks;
