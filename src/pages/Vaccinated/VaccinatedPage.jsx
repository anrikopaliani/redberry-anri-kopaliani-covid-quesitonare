import { Wrapper, Header } from '@/components';
import { VaccinatedForm } from '@/components/Forms';
import { DoctorPicture, Star } from 'public';
import { motion } from 'framer-motion';

const VaccinatedPage = () => {
  return (
    <Wrapper>
      <Header pageNumber={3} />
      <div className='flex justify-between'>
        <VaccinatedForm />
        <div className='mt-11 relative'>
          <motion.img
            src={Star}
            alt='star'
            initial={{
              position: 'absolute',
              opacity: 0,
              left: 10,
              top: -20,
            }}
            animate={{ opacity: 0.7, transition: { duration: 0.7 } }}
            exit={{ top: 90, left: 100, opacity: 0 }}
          />
          <img
            className='h-660 w-full'
            src={DoctorPicture}
            alt='doctor picture'
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default VaccinatedPage;
