import { memo } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const Input = memo(function Input({
  type = 'text',
  label,
  placeholder,
  name,
  errors,
  min,
  max,
}) {
  const { register } = useFormContext();
  return (
    <div className='flex flex-col w-513 mt-47 relative'>
      <label className='font-bold text-2xl' htmlFor={name}>
        {label}
      </label>
      <input
        className='mt-2 w-full h-50 bg-transparent  border-0.8 border-black px-5'
        type={type}
        {...register(name)}
        id={name}
        min={min}
        max={max}
        name={name}
        placeholder={placeholder}
      />
      {errors && (
        <span className='text-error absolute top-24 pl-5 w-622'>{errors}</span>
      )}
    </div>
  );
});

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.string,
};

export default Input;
