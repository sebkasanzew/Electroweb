import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';
import ThreeDRotation from 'material-ui-icons/ThreeDRotation';
import styles from './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Button><AccessAlarmIcon /> Test</Button>
          <Link to="/counter"><ThreeDRotation />to Counter</Link>
        </div>
      </div>
    );
  }
}
