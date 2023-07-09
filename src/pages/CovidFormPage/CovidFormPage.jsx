import { Wrapper, Header } from '@/components';
import { CovidForm } from '@/components/Forms';
import { SickPerson } from 'public';
import { motion } from 'framer-motion';

const CovidFormPage = () => {
  return (
    <Wrapper>
      <Header pageNumber={2} />
      <div className='flex justify-between'>
        <CovidForm />
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, top: 200, left: 70 }}
            animate={{
              opacity: 0.7,
              width: 229,
              height: 229,
              background: '#DD3939',
            }}
            exit={{ left: 95, top: 130, opacity: 0 }}
            className='absolute rounded-full'
          ></motion.div>
          <img src={SickPerson} className='h-703' alt='sick person' />
        </div>
      </div>
    </Wrapper>
  );
};

export default CovidFormPage;
