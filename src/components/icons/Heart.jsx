import { useContext } from 'react';
import { FormContext } from '@/store';
import { motion } from 'framer-motion';

const navigateThanksPageAnimation = {
  left: 0,
  top: 400,
  scale: 100,
  opacity: 1,
  zIndex: 11,
  transition: { duration: 0.9 },
};

const regularExitAnimation = {
  left: -70,
  top: -10,
  opacity: 0,
};

const Heart = () => {
  const { navigateThanksPage } = useContext(FormContext);
  return (
    <motion.svg
      viewBox='0 0 196 173'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial={{
        opacity: 0,
        position: 'absolute',
        left: 85,
        top: 130,
        width: 196,
        height: 173,
      }}
      animate={{
        opacity: 0.75,
        transition: { delay: 0.3 },
      }}
      exit={
        navigateThanksPage ? navigateThanksPageAnimation : regularExitAnimation
      }
    >
      <motion.path
        d='M48.5005 12C75.7005 9.6 94.5005 28.3333 100.501 38C110.501 1.5 143.5 0.5 161.5 0.5C179.5 0.5 203.5 22 192.5 69C183.7 106.6 144.5 153.667 126 172.5C87.6668 153.5 9.30051 107.3 2.50051 74.5C-5.99949 33.5 14.5005 15 48.5005 12Z'
        fill={navigateThanksPage ? '#232323' : '#F39494'}
      />
    </motion.svg>
  );
};

export default Heart;
