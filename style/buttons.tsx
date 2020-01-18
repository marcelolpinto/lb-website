import styled from 'styled-components';

import { FONT_SM } from "./fontSizes";
import { Button } from "@material-ui/core";
import { LIGHT_BLUE, BLUE, GREEN } from './colors';

export const DefaultButton = styled(Button)`
  padding: 8px 16px !important;
  font-size: ${FONT_SM} !important;
  border-radius: 3px !important;
`;

export const SignUpButton = styled(DefaultButton)`
  background-color: white !important;
  color: ${BLUE} !important;
  `;

export const SignInButton = styled(DefaultButton)`
  background-color: ${LIGHT_BLUE} !important;
  color: ${BLUE} !important;
`;

export const TryItFreeButton = styled(DefaultButton)`
  background-color: ${GREEN} !important;
  color: white !important;
`;

export const RequestDemoButton = styled(DefaultButton)`
  background-color: white !important;
  color: ${GREEN} !important;
`;