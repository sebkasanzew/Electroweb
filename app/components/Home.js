// @flow weak

import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';
import styles from './Home.scss';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Button raised><AccessAlarmIcon style={{ marginRight: '10pt' }} />Test</Button>
        </div>
      </div>
    );
  }
}
