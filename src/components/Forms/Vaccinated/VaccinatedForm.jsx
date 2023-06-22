import { FormProvider } from 'react-hook-form';
import { useVaccinatedForm } from '@/hooks';
import { NextArrow, BackArrow, RadioGroup } from '@/components';
import { Link } from 'react-router-dom';

const VaccinatedForm = () => {
  const {
    form,
    handleSubmit,
    onSubmit,
    errors,
    userHadVaccine,
    userVaccinationStage,
    RADIO_OPTIONS,
    RADIO_OPTIONS_2,
    RADIO_OPTIONS_3,
  } = useVaccinatedForm();
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioGroup
          label='უკვე აცრილი ხარ?*'
          name='had_vaccine'
          options={RADIO_OPTIONS}
          error={errors.had_vaccine?.message}
        />

        {userHadVaccine === 'true' && (
          <RadioGroup
            label='აირჩიე რა ეტაპზე ხარ*'
            options={RADIO_OPTIONS_2}
            name='vaccination_stage'
            error={errors.vaccination_stage?.message}
          />
        )}

        {userHadVaccine === 'false' && (
          <RadioGroup
            label='რას ელოდები?*'
            name='vaccination_stage'
            error={errors.vaccination_stage?.message}
            options={RADIO_OPTIONS_3}
          />
        )}

        {userVaccinationStage ===
          'first_dosage_and_not_registered_on_the_second' && (
          <p className='ml-10 mt-10 text-xl'>
            რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი <br />
            <a
              href='https://booking.moh.gov.ge/'
              target='_blank'
              rel='noreferrer'
              className='text-link'
            >
              https://booking.moh.gov.ge/
            </a>
          </p>
        )}

        {userVaccinationStage === 'not_planned' && (
          <p className='ml-10 mt-10 text-xl'>
            👉
            <a
              href='https://booking.moh.gov.ge/'
              target='_blank'
              rel='noreferrer'
              className='text-link'
            >
              https://booking.moh.gov.ge/
            </a>
          </p>
        )}

        {userVaccinationStage === 'had_covid_and_planning_to_vaccinate' && (
          <div className='ml-10 mt-10 text-xl'>
            <p>
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br /> თვის შემდეგ
              შეგიძლიათ ვაქცინის გაკეთება.
            </p>
            <p className='pt-4'>👉 რეგისტრაციის ბმული</p>
            <a
              href='https://booking.moh.gov.ge/'
              target='_blank'
              rel='noreferrer'
              className='text-link'
            >
              https://booking.moh.gov.ge/
            </a>
          </div>
        )}

        <div className='w-32 flex justify-between absolute bottom-28 left-0 right-0 z-10 mx-auto'>
          <Link to='/covid'>
            <BackArrow />
          </Link>
          <button type='submit'>
            <NextArrow />
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default VaccinatedForm;
