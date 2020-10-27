import React from 'react';

import Container from 'common/src/components/UI/ContainerTwo';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';

import illustration from 'common/src/assets/image/hostingModern/illustration3.png';
import illustration2 from 'common/src/assets/image/hostingModern/illustration4.png';
import SectionWrapper, { Content, ButtonWrap } from './callToAction.style';

const CallToAction = () => {
  return (
    <SectionWrapper>
      <Container>
        <Content>
          <Heading
            as="h3"
            content="Do you have any question? Feel free to contact us"
          />
          <ButtonWrap>
            <img src={illustration} alt="" />
            <Button title="CONTACT US NOW" />
            <img src={illustration2} alt="" />
          </ButtonWrap>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default CallToAction;
