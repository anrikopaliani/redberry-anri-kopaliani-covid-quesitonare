import { FormProvider } from 'react-hook-form';
import { useCovidPoliticsForm } from '@/hooks';
import { RadioGroup, Textarea } from '@/components';

const CovidPoliticsForm = () => {
  const {
    form,
    onSubmit,
    errors,
    handleSubmit,
    RADIO_OPTIONS,
    RADIO_OPTIONS_2,
  } = useCovidPoliticsForm();

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className='relative'>
        <RadioGroup
          label='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*'
          name='non_formal_meetings'
          options={RADIO_OPTIONS}
          error={errors.non_formal_meetings?.message}
        />

        <RadioGroup
          label='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'
          name='number_of_days_from_office'
          options={RADIO_OPTIONS_2}
          error={errors.number_of_days_from_office?.message}
        />
        <div className='flex flex-col mt-11'>
          <label
            htmlFor='what_about_meetings_in_live'
            className='font-bold text-2xl'
          >
            რას ფიქრობ ფიზიკურ შეკრებებზე?
          </label>
          <Textarea
            label='რას ფიქრობ ფიზიკურ შეკრებებზე?'
            name='what_about_meetings_in_live'
          />
        </div>
        <div className='flex flex-col mt-11'>
          <label
            htmlFor='tell_us_your_opinion_about_us'
            className='font-bold text-2xl'
          >
            რას ფიქრობ არსებულ გარემოზე: <br /> რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი?
          </label>
          <Textarea name='tell_us_your_opinion_about_us' />
        </div>
        <button
          className='bg-submitButtonColor text-white mt-14  float-right font-bold  text-lg w-44 h-14'
          type='submit'
          style={{ borderRadius: '42px' }}
        >
          დასრულება
        </button>
      </form>
    </FormProvider>
  );
};

export default CovidPoliticsForm;
