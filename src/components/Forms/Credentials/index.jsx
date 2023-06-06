import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@/components/Input';

import { UserCredentialsFormValidation } from '@/schemas/forms';

const CredentialsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserCredentialsFormValidation),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form className='mt-11' onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        name='first_name'
        label='სახელი*'
        placeholder='იოსებ'
        errors={errors.first_name?.message}
      />
      <Input
        register={register}
        name='last_name'
        label='გვარი*'
        placeholder='ჯუღაშვილი'
        errors={errors.last_name?.message}
      />
      <Input
        register={register}
        name='email'
        label='მეილი*'
        placeholder='fbi@redberry.ge'
        errors={errors.email?.message}
      />
    </form>
  );
};

export default CredentialsForm;
