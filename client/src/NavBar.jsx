import React, {Component} from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  height: 60px;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: blue;
`
class NavBar extends Component {
  render() {
    return (
      <Navigation/>
    )
  }
}

export default NavBar;