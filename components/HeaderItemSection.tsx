import * as React from 'react';
import styled from 'styled-components';
import chunk from 'lodash.chunk';
import {
  HeaderItemSection as HeaderItemSectionType,
  HEADER_SECTION_MAX_HEIGHT,
  HeaderItemSectionItem,
} from './assets/header.assets';
import { LIGHT_GRAY, DARK_GRAY, BORDER_GRAY } from '../style/colors';
import { FONT_MMD, FONT_MD } from '../style/fontSizes';
import { DefaultAnchorText } from '../style/anchors';

const CHUNK_SIZE: number = 4;

const Wrapper = styled.div`
  max-height: ${HEADER_SECTION_MAX_HEIGHT}px;
  position: relative;
  padding-right: 20px;

  + .section {
    border-left: 2px solid ${BORDER_GRAY};
    padding-left: 20px;
  }

  :last-child {
    padding-right: 0;
  }
`;

const Title = styled.p`
  color: ${LIGHT_GRAY} !important;
  font-weight: 500;
  font-size: ${FONT_MD};
  margin: 0 0 16px;
`;

const Columns = styled.div`
  > div {
    display: inline-block;
    vertical-align: top;
  }
`;

const Column = styled.div`
  max-width: 200px;
  max-height: ${HEADER_SECTION_MAX_HEIGHT}px;

  p {
    padding: 9px 9px 9px 0;
    width: 200px;
  }

  :last-child p {
    padding: 9px 0;
    width: auto;
  }
`;

const HeaderItemSection = (props: HeaderItemSectionType) => {
  const { title, items, id } = props;
  const chunkedItems = chunk(items, title ? CHUNK_SIZE - 1 : CHUNK_SIZE);

  return (
    <Wrapper className='section' key={id || 'main'}>
      {title && <Title>{title}</Title>}
      <Columns>
        {chunkedItems.map((chunk: HeaderItemSectionItem[], key: number) =>
          <Column key={key}>
            {chunk.map((item: HeaderItemSectionItem) => {
              return (
                <DefaultAnchorText key={item.id} href={`/${id}`}>
                  <p>{item.label}</p>
                </DefaultAnchorText>
              );
            })}
          </Column>
        )}
      </Columns>
    </Wrapper>
  )
};

export default HeaderItemSection;