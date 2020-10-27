import React, { useState, useEffect } from 'react';
import {
  DropdownMenuWrapper,
  DropdownMenuItemsWrapper,
  DropdownMenuItemWrapper
} from './dropdown.style';
import Box from '../Box';

const DropdownMenu = (props) => {
  const [menuState, setMenuState] = useState({
    show: false
  });
  useEffect(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  });

  const handleToggle = () => {
    setMenuState((prevState) => ({
      ...menuState,
      show: !prevState.show
    }));
  };

  const handleDocumentClick = (item) => {
    if (menuState.show) {
      handleToggle();
      onSelect(item);
    }
  };

  const { content, dropdownItems, dropdownDirection, className, onSelect } = props;
  return (
    <DropdownMenuWrapper onClick={(e) => e.stopPropagation()}>
      <Box
        onClick={handleToggle}
        flexBox
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        width={"100%"}
        pr="80px"
        pl="80px"
        height="30px"
        border="1px solid #ebebeb"
      >
        <span>{content}</span>
        <i className="fas fa-caret-down" style={{right:10, position:"absolute"}} />
      </Box>
      {menuState.show && (
        <DropdownMenuItemsWrapper
          className={className}
          dropdownDirection={dropdownDirection}
        >
          {dropdownItems &&
            dropdownItems.map((item, index) => (
              <DropdownMenuItemWrapper
                key={index}
                onClick={() => handleDocumentClick(item)}
              >
                {item}
              </DropdownMenuItemWrapper>
            ))}
        </DropdownMenuItemsWrapper>
      )}
    </DropdownMenuWrapper>
  );
};

export default DropdownMenu;
