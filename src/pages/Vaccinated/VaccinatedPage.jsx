import { Wrapper, Header } from '@/components';
import { VaccinatedForm } from '@/components/Forms';

const VaccinatedPage = () => {
  return (
    <Wrapper>
      <Header pageNumber={3} />
      <VaccinatedForm />
    </Wrapper>
  );
};

export default VaccinatedPage;
