import { Header, Wrapper, CredentialsForm } from '@/components';
import CredentialsPicture from '@/icons/scan2.png';

const Credentials = () => {
  return (
    <Wrapper>
      <Header pageNumber={1} />
      <div className='flex justify-between'>
        <CredentialsForm />
        <img src={CredentialsPicture} alt='' />
      </div>
    </Wrapper>
  );
};

export default Credentials;
