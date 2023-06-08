import PropTypes from 'prop-types';

const Select = ({ label, name }) => {
  return (
    <div className='flex items-center'>
      <input type='radio' name={name} id={name} />
      <label htmlFor={name} className='mt-3 ml-1'>
        {label}
      </label>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Select;
