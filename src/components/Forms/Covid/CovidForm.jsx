import { FormProvider } from 'react-hook-form';
import { useCovidForm } from '@/hooks';
import { NextArrow, BackArrow, Input, RadioGroup } from '@/components';
import { Link } from 'react-router-dom';

const CovidForm = () => {
  const {
    form,
    handleSubmit,
    errors,
    userHadCovid,
    userHadAntibodyTest,
    RADIO_OPTIONS,
    RADIO_OPTIONS_2,
    onSubmit,
  } = useCovidForm();

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioGroup
          label='გაქვს გადატანილი Covid-19?*'
          name='had_covid'
          options={RADIO_OPTIONS}
          error={errors.had_covid?.message}
        />
        {userHadCovid === 'yes' && (
          <RadioGroup
            label='ანტისხეულების ტესტი გაქვს გაკეთებული?*'
            name='had_antibody_test'
            options={RADIO_OPTIONS_2}
            error={errors.had_antibody_test?.message}
          />
        )}
        {userHadAntibodyTest !== 'now' && JSON.parse(userHadAntibodyTest) && (
          <div className='mt-12'>
            <p className='text-2xl font-bold'>
              თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
              ანტისხეულების რაოდენობა*
            </p>
            <div className='ml-5'>
              <Input name='test_date' placeholder='რიცხვი' />
              <p className='text-error'>{errors.test_date?.message}</p>
              <Input placeholder='ანტისხეულების რაოდენობა' name='number' />
              <p className='text-error'>{errors.number?.message}</p>
            </div>
          </div>
        )}
        {JSON.parse(userHadAntibodyTest) === false && (
          <div className='mt-12'>
            <p className='text-2xl font-bold'>
              მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
            </p>
            <div className='ml-5'>
              <Input name='had_covid_date' placeholder='დდ/თთ/წწ' />
              <p className='text-error'>{errors.had_covid_date?.message}</p>
            </div>
          </div>
        )}
        <div className='w-32 flex justify-between absolute bottom-28 left-0 right-0 mx-auto'>
          <Link to='/credentials'>
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

export default CovidForm;
