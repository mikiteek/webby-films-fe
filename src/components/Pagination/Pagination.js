import React, {Component} from "react";
import PaginationJs from "react-js-pagination";
import {connect} from "react-redux";

import filmsOperations from "../../redux/films/filmsOperations";
import styles from "./Pagination.module.scss";

class Pagination extends Component {
  handleChange = (page) => {
    const {paginateProps: {title, star, limit}} = this.props;
    if (!title && !star) {
      this.props.onGetAllFilms({page, limit});
      return;
    }
    this.props.onGetFilmsByQuery({title, star, limit, page});
  }
  render() {
    const nextStyles = [styles.itemNext, "js-item-next"].join(" ");
    const prevStyles = [styles.itemPrev, "js-item-prev"].join(" ");
    const {paginateProps} = this.props;
    return (
      <div>
        <PaginationJs
          hideFirstLastPages
          activePage={paginateProps.page}
          itemsCountPerPage={paginateProps.limit}
          totalItemsCount={paginateProps.totalDocs}
          pageRangeDisplayed={5}
          onChange={this.handleChange}
          itemClass={styles.item}
          linkClass={styles.itemLink}
          itemClassNext={nextStyles}
          itemClassPrev={prevStyles}
          activeClass={styles.active}
          activeLinkClass={styles.activeLink}
          innerClass={styles.listItems}
          linkClassPrev={styles.itemLinkNextPrev}
          linkClassNext={styles.itemLinkNextPrev}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetAllFilms: filmsOperations.getAllFilms,
  onGetFilmsByQuery: filmsOperations.getFilmsByQuery,
}

export default connect(null, mapDispatchToProps)(Pagination);
