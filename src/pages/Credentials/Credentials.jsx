import Header from 'src/components/Header/Header';
import FormPageWrapper from 'src/components/Wrapper';
import CredentialsForm from 'src/components/Forms/Credentials';
import CredentialsPicture from 'src/icons/scan2.png';

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
