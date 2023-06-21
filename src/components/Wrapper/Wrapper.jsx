import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const FormPageWrapper = ({ children, hidden = true }) => {
  return (
    <motion.div
      className={`h-screen w-screen px-48 ${
        hidden ? 'overflow-hidden' : 'overflow-x-hidden'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
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
