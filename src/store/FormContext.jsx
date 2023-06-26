import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const FormContext = createContext({});

export const FormContextProvider = ({ children }) => {
  const [navigateThanksPage, setNavigateThanksPage] = useState(false);
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem('formData')) || {}
  );

  return (
    <FormContext.Provider
      value={{
        navigateThanksPage,
        setNavigateThanksPage,
        setFormData,
        formData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FormContext;
