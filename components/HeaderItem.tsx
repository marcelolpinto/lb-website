import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Button as MuiButton, Popper, Grow } from '@material-ui/core';
import { HEADER_HEIGHT } from './assets/header.assets';
import { FONT_SM } from '../style/fontSizes';
import { DARK_GRAY } from '../style/colors';

const Wrapper = styled.div`
  height: ${HEADER_HEIGHT}px;
  display: inline-block;
`;

const Button = styled(MuiButton)`
  height: ${HEADER_HEIGHT}px;
  font-size: ${FONT_SM};
  color: ${DARK_GRAY};
  border-radius: 0 !important;
  padding-right: 12px !important;
  padding-left: 12px !important;
`;

const PopperWrapper = styled.div`
  background-color: white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

interface HeaderItemProps {
  label: string;
  id: string;
  children?: any;
}

class HeaderItem extends React.Component<HeaderItemProps> {
  state = {
    anchorEl: null,
    open: false,
    isHoveringPopper: false
  };

  _handleHover = event => {
    if(!!this.props.children) this.setState({ open: true, anchorEl: event.currentTarget });
  };

  _handleMouseLeaveButton = event => {
    setTimeout(() => {
      if(!!this.props.children && !this.state.isHoveringPopper) this.setState({ open: false });
    }, 20);
  };

  _handleMouseOverPopper = event => {
    this.setState({ isHoveringPopper: true });
  };

  _handleMouseLeavePopper = () => {
    this.setState({ isHoveringPopper: false, open: false });
  };

  render() {
    const { label, id, children } = this.props;
    
    return (
      <Wrapper>
        <Button
          aria-owns={this.state.open && !!children ? id : null}
          aria-haspopup={!!children ? "true" : "false"}
          onMouseOver={this._handleHover}
          onMouseLeave={this._handleMouseLeaveButton}
        >
          {label}
        </Button>
        {
          !!children &&
          <Popper
            id={id}
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            placement='bottom'
            transition
            // modifiers={{
            //   arrow: {
            //     enabled: true,
            //     element: this.state.anchorEl,
            //   },
            // }}
          >
            {({ TransitionProps }) => (
              <Grow {...TransitionProps} timeout={400}>
                <PopperWrapper onMouseOver={this._handleMouseOverPopper} onMouseLeave={this._handleMouseLeavePopper}>
                  {children}
                </PopperWrapper>
              </Grow>
            )}
          </Popper>
        }
      </Wrapper>
    );
  }
}

export default HeaderItem;