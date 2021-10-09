// import { StyledInputField } from './inputField.styles';
import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledInputField = styled.input`
  border: 1px solid ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSizes.primary};
  width: 300px;
  height: 60px;
  border-radius: 3px;
  outline: none;
  padding-left: 34px;
  position: relative;
  letter-spacing: 1px;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.extraDark};
  }
  &:focus {
    box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);
  }
`;
// the contact label
export const ContactLabel = styled.label`
  font-size: ${(props) => props.theme.fontSizes.primary};
  color: ${(props) => props.theme.colors.dark};
  position: absolute;
  left: 20px;
  top: 16px;
  pointer-events: none;
  transition: 0.7s ease all;
  /* events for contact  label on focusing the input field  */
  ${StyledInputField}:focus ~ & {
    color: ${(props) => props.theme.colors.extraDark};
    font-size: ${(props) => props.theme.fontSizes.medium};
    top: -25px;
    left: 8px;
  }
  /* events for contact  label on focusing the input field for valid form  */
  ${StyledInputField}:valid ~ & {
    color: ${(props) => props.theme.colors.extraDark};
    font-size: ${(props) => props.theme.fontSizes.medium};
    top: -25px;
    left: 8px;
  }
`;
// label for search icon and search word
export const TypeLabel = styled.label`
  font-size: ${(props) => props.theme.fontSizes.primary};
  color: ${(props) => props.theme.colors.light};

  position: absolute;
  left: 15px;
  top: 16px;
  pointer-events: none;
  display: none;

  ${StyledInputField}:focus ~ & {
    display: block;
  }
  ${StyledInputField}:valid ~ & {
    display: none;
  }
`;

export const ArrowLabel = styled.label`
  position: absolute;
  right: 20px;
  top: 16px;
  pointer-events: none;
`;
// FontAwesome Icon (search and arrow)
export const StyledSearchIcon = styled(FontAwesomeIcon)`
  color: #144766;
  font-size: ${(props) => props.theme.fontSizes.primary};
  margin-right: 5px;
`;

export const StyledArrowDownIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.dark};
  font-size: 16px;
`;

// error message
const StyledMessage = styled.p`
  color: ${(props) => props.theme.colors.error};
  padding: 5px 0 5px 15px;
  font-size: ${(props) => props.theme.fontSizes.primary};
`;
export const Message = ({ message }) => {
  return <StyledMessage>{message}</StyledMessage>;
};
