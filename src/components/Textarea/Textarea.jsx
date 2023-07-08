import { memo } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const Textarea = memo(function Textarea({ name }) {
  const { register } = useFormContext();
  return (
    <textarea
      {...register(name)}
      name={name}
      className='w-622 mt-5  bg-transparent border-0.8 px-2 border-black'
      id={name}
      cols='30'
      rows='10'
    ></textarea>
  );
});

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Textarea;
