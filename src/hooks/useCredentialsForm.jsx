import { useForm } from 'react-hook-form';
import useYupValidationResolver from './useYupValidationResolver';
import { UserCredentialsFormValidation } from '@/schemas';

const useCredentialsForm = () => {
  const resolver = useYupValidationResolver(UserCredentialsFormValidation);

  const form = useForm({
    mode: 'all',
    resolver,
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  return [form, handleSubmit, errors];
};

export default useCredentialsForm;
