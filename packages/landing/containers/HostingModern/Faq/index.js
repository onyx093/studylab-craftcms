import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from 'common/src/components/UI/ContainerTwo';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import SectionHeading from '../SectionHeading';
import SectionWrapper, { ContentWrapper, FaqItem } from './faq.style';
import { faqs } from 'common/src/data/HostingModern';

const Faq = () => {
  return (
    <SectionWrapper id="faq">
      <Container>
        <Fade up delay={100}>
          <SectionHeading
            slogan="Ideal solutions for you"
            title="Didn’t find what you were looking for?"
          />
        </Fade>
        <ContentWrapper>
          {faqs.map(faq => (
            <Fade key={faq.id} up delay={100 * faq.id}>
              <FaqItem>
                <Heading as="h4" content={faq.title} />
                <Text content={faq.desc} />
              </FaqItem>
            </Fade>
          ))}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Faq;
