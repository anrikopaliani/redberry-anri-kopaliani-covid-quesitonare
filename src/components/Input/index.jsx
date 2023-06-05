import PropTypes from 'prop-types';

const Input = ({ label, placeholder, name, register, errors }) => {
  return (
    <div className='flex flex-col w-513 mt-47 relative'>
      <label className='font-bold text-2xl' htmlFor={name}>
        {label}
      </label>
      <input
        className='mt-2 w-full h-50 bg-transparent  border-0.8 border-black px-5 placeholder-black'
        type='text'
        {...register(name)}
        id={name}
        name={name}
        placeholder={placeholder}
      />
      {errors && (
        <p className='text-error pl-5 absolute top-24  text-center'>{errors}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.string,
};

export default Input;
