import { useForm } from 'react-hook-form';
import useYupValidationResolver from './useYupValidationResolver';
import { UserCredentialsFormValidation } from '@/schemas';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate('/covid');
  };

  return [form, handleSubmit, errors, onSubmit];
};

export default useCredentialsForm;
