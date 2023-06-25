import { Header, Wrapper } from '@/components';
import { CredentialsPicture } from 'public';
import { CredentialsForm } from '@/components/Forms';
import { motion } from 'framer-motion';

const Credentials = () => {
  return (
    <Wrapper>
      <Header pageNumber={1} />
      <div className='flex justify-between '>
        <div>
          <CredentialsForm />
          <div className='mt-28 w-60 h-0.8 bg-black'></div>
          <p className='text-hint leading-5 mt-5'>
            *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
          </p>
        </div>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, width: 0, top: 300, left: 100 }}
            animate={{
              opacity: 0.8,
              width: 622,
              left: 160,
              top: 224,
              transition: { delay: 0.3 },
            }}
            exit={{
              top: 265,
              left: 100,
              width: 229,
              height: 229,
              background: '#DD3939',
            }}
            className='absolute  w-20 h-20 bg-credentialsDivColor'
          ></motion.div>
          <img src={CredentialsPicture} alt='credentials form picture' />
        </div>
      </div>
    </Wrapper>
  );
};

export default Credentials;
