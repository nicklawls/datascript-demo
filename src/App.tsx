import React from 'react';
import logo from './logo.svg';
import './App.css';

import * as d from 'datascript';


const conn = d.create_conn({});

const initialData = [[':db/add', -1, ':name', 'Petr']];

const Demo: React.FC = () => {

  const dbWithData = d.db_with(d.empty_db(), initialData)
  const results = d.q('[:find ?e ?a ?v :where [?e ?a ?v]]', dbWithData)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DataScript!
        </p>
      </header>
      <div>{JSON.stringify(results)}</div>
    </div>
  );
}

export default Demo;
