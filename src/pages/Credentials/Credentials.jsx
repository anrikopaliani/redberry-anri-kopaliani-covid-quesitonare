import Header from '@/components/Header/Header';
import FormPageWrapper from '@/components/Wrapper';
import CredentialsForm from '@/components/Forms/Credentials';
import CredentialsPicture from '@/icons/scan2.png';

const Credentials = () => {
  return (
    <FormPageWrapper>
      <Header pageNumber={1} />
      <div className='flex justify-between'>
        <CredentialsForm />
        <img src={CredentialsPicture} alt='' />
      </div>
    </FormPageWrapper>
  );
};

export default Credentials;
