import { Wrapper, Header } from '@/components';
import { VaccinatedForm } from '@/components/Forms';
import { DoctorPicture } from 'public';

const VaccinatedPage = () => {
  return (
    <Wrapper>
      <Header pageNumber={3} />
      <div className='flex justify-between'>
        <VaccinatedForm />
        <img src={DoctorPicture} alt='sick person' />
      </div>
    </Wrapper>
  );
};

export default VaccinatedPage;
