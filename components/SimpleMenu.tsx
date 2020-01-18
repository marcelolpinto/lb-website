import React from 'react';
import styled from 'styled-components';
import { Button, Popper, Grow } from '@material-ui/core';

const PopperWrapper = styled.div`
  background-color: white;
  padding: 100px;
  font-size: 32px;
  border: 1px solid black;
`;

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    isHoveringPopper: false
  };

  _handleHover = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  _handleMouseLeaveButton = event => {
    setTimeout(() => {
      if(!this.state.isHoveringPopper) this.setState({ open: false });
    }, 50);
  };

  _handleMouseOverPopper = event => {
    this.setState({ isHoveringPopper: true });
  };

  _handleMouseLeavePopper = () => {
    console.log('handle mouse leave popper')
    this.setState({ isHoveringPopper: false, open: false });
  };

  render() {
    return (
      <div>
        <Button
          aria-owns={this.state.open ? 'simple-popper' : null}
          aria-haspopup="true"
          onMouseOver={this._handleHover}
          onMouseLeave={this._handleMouseLeaveButton}
        >
          Open Menu
        </Button>
        <Popper
          id="simple-popper"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          placement='bottom'
          transition
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps} timeout={300}>
              <PopperWrapper onMouseOver={this._handleMouseOverPopper} onMouseLeave={this._handleMouseLeavePopper}>The content of the Popper.</PopperWrapper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

export default SimpleMenu;