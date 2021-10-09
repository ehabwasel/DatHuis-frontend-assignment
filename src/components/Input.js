import React from 'react';
// import {StyledInputField} from './styled/inputField.styles';
import {
  StyledInputField,
  TypeLabel,
  ContactLabel,
  ArrowLabel,
  StyledArrowDownIcon,
  StyledSearchIcon,
} from './styled/labels.style';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const InputField = ({ selectedName, setSelectedName }) => {
  const handleChange = (e) => {
    setSelectedName(e.target.value);
  };

  return (
    <>
      <StyledInputField
        value={selectedName}
        onKeyUp={handleChange}
        onChange={handleChange}
        required
      />

      <ContactLabel>Contact</ContactLabel>
      <TypeLabel>
        <StyledSearchIcon icon={faSearch} />
        Type or search...
      </TypeLabel>
      <ArrowLabel>
        <StyledArrowDownIcon icon={faChevronDown} />
      </ArrowLabel>
    </>
  );
};

export default InputField;
