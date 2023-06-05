import PropTypes from 'prop-types';

const FormPageWrapper = (props) => {
  return <div className='h-screen w-screen px-48'>{props.children}</div>;
};

FormPageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default FormPageWrapper;
