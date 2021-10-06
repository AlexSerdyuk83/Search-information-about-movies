import React, {useEffect} from "react";
import styles from "./SearchBox.module.css"
import {connect} from "react-redux";
import {updateSearchText} from "../store/actions/updateSearchText";
import {getData} from "../store/actions/getData";

const mapStateToProps = (state) => {
  return {
    text: state.searchBox.searchText,
    pageNumber: state.searchBox.activePage,
  };
};

const mapDispatchToProps = {
  updateSearchText,
  getData,
}

const SearchBox = ({ text, updateSearchText, getData, pageNumber }) => {
  const updateSearchTextHandler = (e) => {
    const value = e.target.value;
    updateSearchText(value);
  };

  useEffect(() => {
    if (text.length === 0) {
      return;
    }
    getData(text, pageNumber);
  }, [text, pageNumber])

  return (
    <form className={styles.form}>
      <input
        onChange={updateSearchTextHandler}
        className={styles.input}
        type="text"
        value={text}
        placeholder={'write the name of the movie'}
      />
    </form>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
