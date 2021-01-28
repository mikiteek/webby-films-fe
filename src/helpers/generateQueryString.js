const generateQueryString = (title, star) => {
  let queryString = `/films/search`;
  if (title && star) {
    queryString = `/films/search?title=${title}&star=${star}`;
  }
  else if (title) {
    queryString = `/films/search?title=${title}`;
  }
  else if (star) {
    queryString = `/films/search?star=${star}`;
  }
  return queryString;
}

export default generateQueryString;