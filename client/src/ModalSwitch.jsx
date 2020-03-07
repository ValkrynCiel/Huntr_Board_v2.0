import React, {Component} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import HuntrBoardPage from './HuntrBoardPage';
import LoginForm from './Login';
import Modal from './Modal';

class ModalSwitch extends Component {

  render () {
    // This piece of state is set when one of the
    // gallery links is clicked. The `background` state
    // is the location that we were at when one of
    // the gallery links was clicked. If it's there,
    // use it as the location for the <Switch> so
    // we show the gallery in the background, behind
    // the modal.
    const { location } = this.props;
    let background = location.state && location.state.background;

    return (
      <>
        <Switch location={background || location}>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/login/" render={rtp => <LoginForm {...rtp} />} />
          <Route path="/:username/board" render={() => <HuntrBoardPage />} />
        </Switch>

        {/* Show the modal when a background page is set */}
        {background && <Route path="/job/:id" render={rtp => <Modal {...rtp}/>} />}
      </>
    );
  }
}

export default withRouter(ModalSwitch)