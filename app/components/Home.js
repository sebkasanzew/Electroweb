import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';
import styles from './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Button><AccessAlarmIcon /> Test</Button>
        </div>
      </div>
    );
  }
}
