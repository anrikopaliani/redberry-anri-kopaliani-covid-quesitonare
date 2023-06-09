import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const Select = ({ label, name, options, error }) => {
  const { register } = useFormContext();
  return (
    <div className='mt-11'>
      <p className='text-2xl font-bold'>{label}</p>
      {options.map((opt) => {
        return (
          <div key={opt.label} className='flex items-center ml-5'>
            <input
              {...register(name)}
              type='radio'
              name={name}
              id={opt.value}
              value={opt.value}
            />
            <label htmlFor={opt.value} className='mt-3 ml-5 text-xl'>
              {opt.label}
            </label>
          </div>
        );
      })}
      <p className='text-red-500'>{error}</p>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  error: PropTypes.string,
};

export default Select;
