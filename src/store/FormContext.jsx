import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const FormContext = createContext({});

export const FormContextProvider = ({ children }) => {
  const [navigateThanksPage, setNavigateThanksPage] = useState(false);

  return (
    <FormContext.Provider value={{ navigateThanksPage, setNavigateThanksPage }}>
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
