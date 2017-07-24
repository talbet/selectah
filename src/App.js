import React from 'react';
import './styles/global.css';
import styles from './App.css';
import ListContainer from './components/ListContainer';

const App = () => (
  <div className={styles.container}>
    <h1 className={styles.heading}>Selectah</h1>
    <ListContainer />
  </div>
);

export default App;
