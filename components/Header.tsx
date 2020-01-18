import * as React from 'react';
import styled from 'styled-components';
import chunk from 'lodash.chunk';
import {
  headerItems,
  HeaderItem as HeaderItemType,
  HEADER_HEIGHT,
  HEADER_SECTION_MAX_HEIGHT,
  HeaderItemSection as HeaderItemSectionType,
  HeaderItemSectionItem,
} from './assets/header.assets';
import HeaderItem from './HeaderItem';
import { LIGHT_GRAY, DARK_GRAY, LIGHT_BLUE, BLUE, BG_GRAY, BORDER_GRAY } from '../style/colors';
import { FONT_MD, FONT_MMD } from '../style/fontSizes';
import Logo from './Logo';
import { Container } from '@material-ui/core';
import { SignUpButton, SignInButton } from '../style/buttons';
import HeaderItemSection from './HeaderItemSection';
import { DefaultAnchorText } from '../style/anchors';

const Outer = styled.div`
  border-bottom: 1px solid ${BORDER_GRAY};
  margin-bottom: 40px;
`;

const Wrapper = styled(Container)`
  height: ${HEADER_HEIGHT}px !important;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  

  > img.labelbox-logo {
    width: 120px;
  }
`;

const Sections = styled.div`
  padding: 20px 35px;
  > div {
    display: inline-block;
    vertical-align: top;
  }
`;

const ButtonsWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  > button + button { margin-left: 12px; }
`;

const BottomLink = styled.div`
  padding: 20px 35px;
  background-color: ${BG_GRAY};
  
  p { padding: 9px 0; }
`;

const _renderHeaderItemSection = (sections: HeaderItemSectionType[]) => {
  
  return sections.map((section: HeaderItemSectionType) => {
    const { title, items, id } = section;
    return (
      <HeaderItemSection
        key={id || 'main'}
        id={id}
        items={items}
        title={title}
      />
    )
  })
}

const _renderItems = () => {
  return headerItems.map((item: HeaderItemType) => {
    return (
      <HeaderItem key={item.id} label={item.label} id={item.id}>
        {
          item.sections ?
          <>
            <Sections>
              {_renderHeaderItemSection(item.sections)}
            </Sections>
            {
              item.sectionsBottomLink ?
              <BottomLink id={item.sectionsBottomLink.id}>
                <DefaultAnchorText href={item.sectionsBottomLink.id}>
                  <p>{item.sectionsBottomLink.label}</p>
                </DefaultAnchorText>
              </BottomLink>
              : null
            }
          </>
          : null
        }
      </HeaderItem>
    );
  })
}

const Header: React.FC = () => {
  return (
    <Outer>
      <Wrapper>
        <Logo />
        <div>
          {_renderItems()}
        </div>
        <ButtonsWrapper>
          <SignUpButton>SIGN UP</SignUpButton>
          <SignInButton>SIGN IN</SignInButton>
        </ButtonsWrapper>
      </Wrapper>
    </Outer>
  )
};

export default Header;