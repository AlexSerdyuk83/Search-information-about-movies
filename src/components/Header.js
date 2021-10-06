import React from "react";
import SearchBox from "./SearchBox";
import styles from "./Header.module.css"
import {connect} from "react-redux";

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>{'Movie Catalog'}</h2>
      </div>
      <SearchBox />
      <div className={styles.users}>
        {'Sign In'}
      </div>
    </div>
  )
};

export default connect(null, null)(Header);
