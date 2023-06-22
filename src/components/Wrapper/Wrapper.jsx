import { useContext } from 'react';
import { FormContext } from '@/store';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const FormPageWrapper = ({ children, hidden = true }) => {
  const { navigateThanksPage } = useContext(FormContext);
  return (
    <motion.div
      className={`h-screen w-screen px-48 ${
        hidden ? 'overflow-hidden' : 'overflow-x-hidden'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={
        navigateThanksPage
          ? { opacity: 1, background: '#232323' }
          : { opacity: 0 }
      }
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
