import React from "react";
import {connect} from "react-redux";
import ReactPaginate from 'react-paginate';
import _ from "lodash";
import styles from "./Content.module.css";
import {updatePage} from "../store/actions/updatePage";


const mapStateToProps = (state) => {
  return {
    data: state.data.data.data,
    text: state.searchBox.searchText,
  };
};

const mapDispatchToProps = {
  updatePage,
}

const errorRender = (text) => {
  return text.length === 0 ? null : <div className={styles.error_block}>
    {"Movie not found!"}
  </div>
};

const movieRender = (data, text, pageCount, func) => {

  const handlePageClick = (data) => {
    func(data.selected + 1);
  };

  return <div>
    <div className={styles.description}>{`Your searched for: ${_.capitalize(text)} ${data.totalResults} results found`}</div>
    <div className={styles.main_content}>
      {
        data.Search.map((item) => <div key={item.imdbID} className={styles.content_item}>
          <img className={styles.img}
            src={item.Poster === 'N/A'
              ? 'https:cdn.pixabay.com/photo/2021/03/20/03/16/speech-bubble-6109031_960_720.jpg'
              : item.Poster}
            alt={'Poster'}
          />
          <p><b>{'Name: '}</b>{item.Title}</p>
          <p><b>{'Year: '}</b>{item.Year}</p>
          <p><b>{'imdbID: '}</b>{item.imdbID}</p>
          <p><b>{'Type: '}</b>{item.Type}</p>
        </div>)
      }
    </div>
    <ReactPaginate
      previousLabel={<>&laquo;</>}
      nextLabel={<>&raquo;</>}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
    />
  </div>
};

const Content = ({data, text, updatePage}) => {
  const totalResults = data && data.Response === 'True' ? data.totalResults : 0;
  const pageCount = Math.ceil(totalResults / 10);
  //console.log(pageCount)
  return (
    <div className={styles.container}>
      {
        (data && data.Response === 'True') ? movieRender(data, text, pageCount, updatePage) : errorRender(text)
      }
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
