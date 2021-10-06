import React from "react";
import {connect} from "react-redux";
import './App.module.css';
import Header from "../src/components/Header";
import styles from "./App.module.css"
import Content from "../src/components/Content";


const App = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <Content />
    </div>
  );
}

export default connect(null, null)(App);
