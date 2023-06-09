import { Wrapper, Header } from '@/components';
import { CovidForm } from '@/components/Forms';
import { SickPerson } from 'public';

const CovidFormPage = () => {
  return (
    <Wrapper>
      <Header pageNumber={2} />
      <div className='flex justify-between'>
        <CovidForm />
        <img src={SickPerson} alt='sick person' />
      </div>
    </Wrapper>
  );
};

export default CovidFormPage;
