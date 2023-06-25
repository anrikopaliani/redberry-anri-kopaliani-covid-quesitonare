import { useForm, useWatch } from 'react-hook-form';
import useYupValidationResolver from './useYupValidationResolver';
import { UserCredentialsFormValidation } from '@/schemas';
import { useStoredValues, usePersistData } from '@/hooks';

const useCredentialsForm = () => {
  const resolver = useYupValidationResolver(UserCredentialsFormValidation);

  const getStoredValues = useStoredValues('credentialsForm', {
    first_name: '',
    last_name: '',
    email: '',
  });

  const form = useForm({
    mode: 'all',
    resolver,
    defaultValues: getStoredValues,
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const first_name = useWatch({ control, name: 'first_name' });
  const last_name = useWatch({ control, name: 'last_name' });
  const email = useWatch({ control, name: 'email' });

  usePersistData('credentialsForm', { first_name, last_name, email }, [
    first_name,
    last_name,
    email,
  ]);

  return [form, handleSubmit, errors];
};

export default useCredentialsForm;
