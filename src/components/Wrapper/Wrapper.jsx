import PropTypes from 'prop-types';

const FormPageWrapper = ({ children, hidden = true }) => {
  return (
    <div
      className={`h-screen w-screen px-48 ${
        hidden ? 'overflow-hidden' : 'overflow-x-hidden'
      }`}
    >
      {children}
    </div>
  );
};

FormPageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  hidden: PropTypes.bool,
};
export default FormPageWrapper;
