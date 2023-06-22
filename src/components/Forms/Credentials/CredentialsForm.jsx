import { FormProvider } from 'react-hook-form';
import { Input } from '@/components';
import { useCredentialsForm } from '@/hooks';
import { NextArrow } from '@/components';
import { useNavigate } from 'react-router-dom';

const CredentialsForm = () => {
  const [form, handleSubmit, errors] = useCredentialsForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate('/covid');
  };

  return (
    <FormProvider {...form}>
      <form className='mt-11' onSubmit={handleSubmit(onSubmit)}>
        <Input
          name='first_name'
          label='სახელი*'
          placeholder='იოსებ'
          errors={errors.first_name?.message}
        />
        <Input
          name='last_name'
          label='გვარი*'
          placeholder='ჯუღაშვილი'
          errors={errors.last_name?.message}
        />
        <Input
          name='email'
          label='მეილი*'
          placeholder='fbi@redberry.ge'
          errors={errors.email?.message}
        />
        <button type='submit' className='absolute bottom-28 left-1/2 z-10'>
          <NextArrow />
        </button>
      </form>
    </FormProvider>
  );
};

export default CredentialsForm;
