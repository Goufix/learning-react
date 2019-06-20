import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Feed from './screens/Feed';
import New from './screens/New';

export default function Routes() {
  return (
    <Switch>
    <Route path="/" exact component={Feed} />
    <Route path="/new" component={New} />
    </Switch>
  );
}
