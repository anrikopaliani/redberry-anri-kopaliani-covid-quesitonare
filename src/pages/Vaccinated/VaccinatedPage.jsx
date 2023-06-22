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
              left: 30,
              top: -20,
            }}
            animate={{ opacity: 0.7 }}
            exit={{ top: 90, left: 100, opacity: 0 }}
          />
          <img src={DoctorPicture} alt='sick person' />
        </div>
      </div>
    </Wrapper>
  );
};

export default VaccinatedPage;
