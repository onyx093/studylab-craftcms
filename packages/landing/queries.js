import gql from "graphql-tag";

export const LandingQuery = gql`
  {
    entry(section: "landing") {
      ... on landing_landing_Entry {
        landingTitle
        description
        cards {
          ... on cards_card1_BlockType {
            cardTitle
            cardBody
          }
        }
      }
    }
  }
`;

export const HomepageQuery = gql`
  {
    entry(id: "152") {
      ... on homepage_homepage_Entry {
        landingTitle
        description
        siteName
        bannerImage {
          url
        }
        sponsorImages{
          url
        }
        examboards {
            ... on examboards_examboard_BlockType {
              boardLogo{
                url(width: 100, height: 100, mode: "stretch")
              }
              boardName
            }
          }
          feedback{
            ... on feedback_feedback_BlockType {
              clientName
              comment
              clientImage{
                url(width: 431, height: 547, mode: "stretch")
              }
              clientOccupation
            }
          }
        coreFeatures {
          ... on coreFeatures_feature1_BlockType {
            featureIcon
            featureList {
              icon
              title
            }
            featureBody
            featureImage {
              url
            }
            featureLink
            featureLinkLabel
            featureLinkProps
            featureTitle
            featureLinkIcon
            __typename
          }
          
          ... on coreFeatures_feature2_BlockType {
            featureIcon
            features {
              icon
              title
              description
            }
            featureBody
            featureImage {
              url
            }
            featureLink
            featureLinkLabel
            featureLinkProps
            featureLinkIcon
            featureTitle
            __typename
          }
        }

        button {
          ... on button_button_BlockType {
            href
            isvisible
            label
            props
            icon
          }
        }
        cards {
          ... on cards_card1_BlockType {
            cardBody
            cardTitle
          }
          ... on cards_card3_BlockType {
            cardBody
            cardIcon
            cardTitle
            cardGroup
          }
          ... on cards_card2_BlockType {
            cardId
            cardImage {
              url
            }
            cardBody
            cardTitle
          }
        }
      }
    }
  }
`;

export const NavBarQuery = gql`
  {
    entry {
      ... on navbar_navbar_Entry {
        brandname
        button {
          ... on button_navButton_BlockType {
            class
            href
            label
            position
            isvisible
          }
        }
      }
    }
  }
`;
