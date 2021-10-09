import React from 'react';
import { Message } from './styled/labels.style';
import { StyledDropDownMenu, StyledOption } from './styled/dropDown.style';

const DropDownMenu = ({ selectedName, filteredNames, setSelectedName }) => {
  const handleOnMouse = (e) => {
    setSelectedName(e.target.value);
  };

  return (
    <>
      <StyledDropDownMenu>
        {selectedName && filteredNames.length === 0 ? (
          <Message Message message='No! contact with provided name'></Message>
        ) : (
          filteredNames.map((name, index) => (
            <StyledOption key={index} onMouseDown={handleOnMouse} value={name}>
              {name}
            </StyledOption>
          ))
        )}
      </StyledDropDownMenu>
    </>
  );
};

export default DropDownMenu;
