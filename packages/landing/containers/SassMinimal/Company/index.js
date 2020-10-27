import React from 'react';
import Image from 'common/src/components/Image';
import Box from 'common/src/components/Box';
import Container from 'common/src/components/UI/Container';

import { CompanyWrapper } from './company.style';

import { COMPANY_DATA } from 'common/src/data/SassMinimal';

const Company = () => {
  return (
    <CompanyWrapper>
      <Container>
        {COMPANY_DATA.map((company, index) => (
          <Box key={`company-box-${index}`}>
            <Image src={company.image} alt="Client Image" />
          </Box>
        ))}
      </Container>
    </CompanyWrapper>
  );
};

export default Company;
