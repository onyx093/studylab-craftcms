import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Input from 'common/src/components/Input';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';

import whatsapp from "common/src/assets/image/whatsApp.svg";
import mail from "common/src/assets/image/mail.svg";
import phone from "common/src/assets/image/phone.svg";


import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon
} from 'common/src/components/Accordion';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import FaqSectionWrapper from './faqSection.style';

import data from 'common/src/data/Agency';
import DropdownMenu from 'common/src/components/Dropdown';

const roles = ['Principal', 'Student'];

const FaqSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  titleStyle,
  descriptionStyle,
  subSectionStyle,
  inputStyle,
  linkContainerStyle,
}) => {
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  return (
    <FaqSectionWrapper id="faqSection">
      <Container>
        <Box className="row">
          <Accordion>
            <Box flexBox flexWrap="wrap">
              <Box {...subSectionStyle}>
                <Text {...sectionTitle} content="BOOK A DEMO" />
                <Box {...inputStyle}>
                  <Input placeholder="Fullname" aria-label="name" />
                </Box>
                <Box {...inputStyle}>
                  <Input
                    placeholder="email"
                    aria-label="email"
                    inputType="email"
                  />
                </Box>
                <Box {...inputStyle}>
                  <Input
                    placeholder="phone"
                    aria-label="phone"
                    inputType="phone"
                  />
                </Box>
                <Box {...inputStyle}>
                  <Input placeholder="school name" aria-label="school name" />
                </Box>
                <Box
                  {...inputStyle}
                  flexBox
                  flexWrap="wrap"
                  alignItems="center"
                >
                  <p style={{ marginRight: '20px' }}>I am a</p>
                  <DropdownMenu
                    content={selectedRole}
                    dropdownItems={roles}
                    onSelect={(item) => setSelectedRole(item)}
                  />
                </Box>
                <Box {...inputStyle}>
                  <Button title="Book a Demo" width="100%" bg="#2D9CDB" />
                </Box>
              </Box>
              <Box {...subSectionStyle}>
                <Text {...sectionTitle} content="CONTACT US" />
                <Box {...linkContainerStyle}>
                  <Button
                    icon={<img src={mail} alt="mail" />}
                    iconPosition="left"
                    title="hello@studylab360.com"
                    width="100%"
                    variant="textButton"
                    disabled
                    color="black"
                  />
                </Box>
                <Box {...linkContainerStyle}>
                  <Button
                    icon={<img src={whatsapp} alt="whatsapp-logo" />}
                    iconPosition="left"
                    title="https://wa.me/08188111680"
                    width="100%"
                    variant="textButton"
                    disabled
                    color="black"
                  />
                </Box>
                <Box {...linkContainerStyle}>
                  <Button
                    icon={<img src={phone} alt="phone" />}
                    iconPosition="left"
                    title="08188111680"
                    width="100%"
                    variant="textButton"
                    disabled
                    color="black"
                  />
                </Box>
              </Box>
            </Box>
          </Accordion>
        </Box>
      </Container>
    </FaqSectionWrapper>
  );
};

// FaqSection style props
FaqSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object
};

// FaqSection default style
FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '32px'],
    fontWeight: 'bold',
    width: '100%',
    lineHeight: '26px',
    color: '#4A5568',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // accordion title default style
  titleStyle: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // accordion description default style
  descriptionStyle: {
    fontSize: '15px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0'
  },
  subSectionStyle: {
    width: [1, 1, 1 / 2],
    padding: '30px',
  },
  inputStyle: {
    mt: '20px'
  },
  linkContainerStyle: {
    mt: '50px'
  }
};

export default FaqSection;
