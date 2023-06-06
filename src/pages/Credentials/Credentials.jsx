import { Header, Wrapper, CredentialsForm } from '@/components';
import CredentialsPicture from 'public/scan2.png';

const Credentials = () => {
  return (
    <Wrapper>
      <Header pageNumber={1} />
      <div className='flex justify-between'>
        <CredentialsForm />
        <img src={CredentialsPicture} alt='credentials form picture' />
      </div>
    </Wrapper>
  );
};

export default Credentials;
