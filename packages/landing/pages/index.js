import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from 'common/src/theme/agency';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, AgencyWrapper } from '../containers/Agency/agency.style';
import Navbar from '../containers/Agency/Navbar';
import BannerSection from '../containers/Agency/BannerSection';
import FeatureSection from '../containers/Agency/FeatureSection';
import AboutUsSection from '../containers/Agency/AboutUsSection';
import WorkHistory from '../containers/Agency/WorkHistory';
import BlogSection from '../containers/Agency/BlogSection';
import TestimonialSection from '../containers/Agency/TestimonialSection';
import TeamSection from '../containers/Agency/TeamSection';
import VideoSection from '../containers/Agency/VideoSection';
import NewsletterSection from '../containers/Agency/NewsletterSection';
import QualitySection from '../containers/Agency/QualitySection';
import Footer from '../containers/Agency/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import FaqSection from '../containers/Agency/FaqSection';
import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { HomepageQuery } from '../queries';

const Index = () => {
  let { data, error, loading } = useQuery(HomepageQuery);
  if (error) {
    console.log(error);
    return <h1>Error</h1>;
  }
  if (loading) return <h1>loading</h1>;
  data = data.entry;
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        {/* Start agency head section */}
        <Head>
          <title> StudyLab | A react next landing page</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="React next landing page" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of agency head section */}
        {/* Start agency wrapper section */}
        <AgencyWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection
            bannerTitle={data.landingTitle}
            bannerDescription={data.description}
            bannerImage={data.bannerImage[0].url}
            buttons={data.button}
          />
          <FeatureSection boards={data.examboards} />
          {data.coreFeatures.map((feature, index) => {
            if (feature.__typename === 'coreFeatures_feature1_BlockType') {
              return (
                <AboutUsSection
                  sectionTitle={feature.featureTitle}
                  sectionDescription={feature.featureBody}
                  featureList={feature.featureList}
                  featureIcon={feature.featureIcon}
                  featureImage={feature.featureImage[0].url}
                  button={{
                    link: feature.featureLink,
                    label: feature.featureLinkLabel,
                    icon: feature.featureLinkIcon,
                    props: feature.featureLinkProps
                  }}
                  index={index}
                />
              );
            }
            else{
              return(
                <QualitySection
                  sectionTitle={feature.featureTitle}
                  sectionDescription={feature.featureBody}
                  featureList={feature.features}
                  featureIcon={feature.featureIcon}
                  featureImage={feature.featureImage[0].url}
                  button={{
                    link: feature.featureLink,
                    label: feature.featureLinkLabel,
                    icon: feature.featureLinkIcon,
                    props: feature.featureLinkProps
                  }}
                  index={index}
                />
              )
            }
          })}
          {/* <VideoSection /> */}
          <TestimonialSection feedback={data.feedback} />
          <FaqSection />
          <NewsletterSection />
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};

export default withApollo({ ssr: true })(Index);
