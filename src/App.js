import React, { useState, useEffect } from 'react';
import MOCKDATA from './MOCK_DATA.json';
import InputField from './components/Input';
import DropDownMenu from './components/DropDown';
import {
  AppContainer,
  StyledWrapper,
} from '../src/components/styled/appContainer.style';

const App = () => {
  const [contactList, setContactList] = useState([]);
  const [selectedName, setSelectedName] = useState('');

  useEffect(() => {
    const contactsArray = MOCKDATA.map((name) => name.name);
    const delNullValues = contactsArray.filter((contact) => contact != null);
    setContactList(delNullValues);
  }, []);

  const filteredNames = contactList.filter((name) => {
    if (selectedName == '') {
      return name;
    } else if (name.toLowerCase().includes(selectedName.toLowerCase())) {
      return name;
    }
  });
  return (
    <AppContainer>
      <StyledWrapper>
        <InputField
          selectedName={selectedName}
          setSelectedName={setSelectedName}
        />
        <DropDownMenu
          selectedName={selectedName}
          setSelectedName={setSelectedName}
          filteredNames={filteredNames}
        />
      </StyledWrapper>
    </AppContainer>
  );
};

export default App;
