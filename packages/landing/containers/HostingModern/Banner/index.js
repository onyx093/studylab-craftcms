import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Input from 'common/src/components/Input';
import Select from 'common/src/components/Select';
import Button from 'common/src/components/Button';

import BannerSection, {
  ContentWrapper,
  BannerContent,
  DomainChecker,
  DomainControl,
  BannerImage,
} from './banner.style';

import illustration from 'common/src/assets/image/hostingModern/illustration.png';

const options = [
  { label: '.COM', value: 'dot-com' },
  { label: '.NET', value: 'dot-net' },
  { label: '.ORG', value: 'dot-org' },
];

const Banner = () => {
  return (
    <BannerSection id="home">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading as="h1" content="Built your business with a website" />
            <Text content="Get your tests delivered at let home collect sample from the victory of the managements that supplies best." />
            <DomainChecker>
              <DomainControl>
                <Input
                  inputType="text"
                  placeholder="Your domain name"
                  iconPosition="left"
                  aria-label="domain"
                />
                <Select
                  options={options}
                  defaultValue={options[0]}
                  id="domain"
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                />
              </DomainControl>
              <Button fullWidth title="Start for free" type="submit" />
            </DomainChecker>
          </BannerContent>
          <BannerImage>
            <Image src={illustration} alt="" />
          </BannerImage>
        </ContentWrapper>
      </Container>
    </BannerSection>
  );
};

export default Banner;
