import styled from 'styled-components';

import { FONT_MD } from "./fontSizes";
import { Button } from "@material-ui/core";
import { DARK_GRAY, GRAY } from './colors';

export const DefaultAnchorText = styled.a`
  text-decoration: none;
    
  > p {
    margin: 0;
    font-size: ${FONT_MD};
    color: ${DARK_GRAY};
    font-weight: 500;

    :hover {
      color: ${GRAY};
    }
  }
`;