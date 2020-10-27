import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import AboutUsSectionWrapper from './aboutUsSection.style';

import data from 'common/src/data/Agency';

import GroupImage1 from 'common/src/assets/image/agency/group/group-image1.jpg';
import GroupImage2 from 'common/src/assets/image/agency/group/group-image2.jpg';
import GroupImage3 from 'common/src/assets/image/agency/group/group-image3.jpg';
import { IconWrapper } from 'common/src/components/FeatureBlock/featureBlock.style';

const AboutUsSection = ({
  row,
  col,
  title,
  description,
  textArea,
  featureTitle,
  sectionTitle,
  featureIcon,
  featureImage,
  sectionDescription,
  btnStyle,
  featureList,
  iconStyle,
  button,
  index
}) => {
  const image = (
    <Box className="col" {...col}>
      <Card>
        <Box className="col2">
          <Fade left={true ? index % 2 == 0 :false}  right={true ? index % 2 != 0 :false} delay={90}>
            <Image
              src={featureImage}
              alt="Feature Image"
              width="100%"
              height="100%"
            />
          </Fade>
        </Box>
      </Card>
    </Box>
  );
  let left, right;
  if (index % 2 == 0){
    left = image;
  }
  else{
    right = image;
  }
  return (
    <AboutUsSectionWrapper id="AboutUsSection">
      <Box className="row" {...row}>
        {left}
        <Box className="col" {...col}>
          <Box {...textArea}>
            <IconWrapper style={iconStyle}>
              <i className={featureIcon} />
            </IconWrapper>
            <FeatureBlock
              title={<Heading content={sectionTitle} {...title} />}
              description={
                <p
                  dangerouslySetInnerHTML={{ __html: sectionDescription }}
                  style={description}
                />
              }
            />
          </Box>
          <Box {...textArea}>
            {featureList?.map((feature, index) => (
              <FeatureBlock
                key={`feature_point-${index}`}
                icon={<i className={feature.icon} />}
                iconPosition="left"
                title={<Heading content={feature.title} {...featureTitle} />}
              />
            ))}
            {button.label ? (
              <Button
                title={button.label}
                {...btnStyle}
                icon={<i className={button.icon} />}
              />
            ) : null}
          </Box>
        </Box>
        {right}
      </Box>
    </AboutUsSectionWrapper>
  );
};

AboutUsSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  textArea: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object
};

AboutUsSection.defaultProps = {
  // About us section row default style
  featureList: [],
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // About us section col default style
  col: {
    width: [1, '100%', '50%']
  },
  // About us section text area default style
  textArea: {
    maxWidth: '490px',
    pl: '40px'
  },
  // About us section title default style
  title: {
    fontSize: ['26px', '26px', '30px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '30px'
  },
  // About us section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px'
  },
  iconStyle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    color: '#000',
    overflow: 'hidden',
    boxShadow: '0px 9px 20px -5px rgba(39, 79, 117, 0.2)',
    marginTop: '20px',
    mr: '6px',
    flexShrink: 0
  },

  // feature title default style
  featureTitle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em'
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom:"10px"
  }
};

export default AboutUsSection;
