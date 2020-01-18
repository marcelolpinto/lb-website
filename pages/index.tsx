import { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Grid } from '@material-ui/core';
import { GRAY } from '../style/colors';
import { FONT_MMD, FONT_MD } from '../style/fontSizes';
import { TryItFreeButton, RequestDemoButton } from '../style/buttons';

const H1 = styled.h1`
  font-weight: 500;
  font-size: 44px;
`;

const H3 = styled.h3`
  font-weight: 300;
  font-size: ${FONT_MMD};
  line-height: 30px;
`;

const TopImage = styled.img`
  width: 100%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    font-size: ${FONT_MD} !important;
    padding: 20px 28px !important;

    i {
      margin-left: 20px;
    }
  }
  > button + button { margin-left: 12px; }
`;

const Home: NextPage = () => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link href="/static/css/font.css" rel="stylesheet" />
      <link href="/static/css/resets.css" rel="stylesheet" />
    </Head>
    
    <Layout>
      <Grid alignItems='center' container spacing={10}>
        <Grid item xs={12} md={6}>
          <H1>The training data platform for production AI</H1>
          <br/>
          <br/>
          <H3>The fastest way to get your AI ambitions into production. We give you the software tools to label data, review quality, and operationalize AI.</H3>
          <br/>
          <br/>
          <ButtonsWrapper>
            <TryItFreeButton>
              Try it free <i className='material-icons'>keyboard_arrow_right</i>
            </TryItFreeButton>
            <RequestDemoButton>
              Request Demo <i className='material-icons'>keyboard_arrow_right</i>
            </RequestDemoButton>
          </ButtonsWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <TopImage src='/static/images/image.svg' />
        </Grid>
      </Grid>
    </Layout>
  </> 
);

// Home.getInitialProps = async ({ req }) => {
//   // here goes the 3rd party integrations
// };

export default Home;