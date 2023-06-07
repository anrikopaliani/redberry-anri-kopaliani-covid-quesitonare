import { Header, Wrapper, CredentialsForm } from '@/components';
import { CredentialsPicture } from 'public';

const Credentials = () => {
  return (
    <Wrapper>
      <Header pageNumber={1} />
      <div className='flex justify-between'>
        <div>
          <CredentialsForm />
          <div className='mt-28 w-60 h-0.8 bg-black'></div>
          <p className='text-hint leading-5 mt-5'>
            *-ით მონიშნული ველების შევსება <br /> სავალდებულოა
          </p>
        </div>
        <img src={CredentialsPicture} alt='credentials form picture' />
      </div>
    </Wrapper>
  );
};

export default Credentials;
