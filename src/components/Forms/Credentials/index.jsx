import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '@/components';
import { useYupValidationResolver } from '@/hooks/validation';
import { UserCredentialsFormValidation } from '@/schemas';

const CredentialsForm = () => {
  const resolver = useYupValidationResolver(UserCredentialsFormValidation);
  const form = useForm({ resolver });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data) => console.log(data);

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
        <button type='submit'>heloo</button>
      </form>
    </FormProvider>
  );
};

export default CredentialsForm;
