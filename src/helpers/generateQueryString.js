const generateQueryString = (title, star, page, limit) => {
  const queryString = `/films/search?page=${page}&limit=${limit}`;
  if (title && star) {
    return queryString + `&title=${title}&star=${star}`;
  }
  else if (title) {
    return queryString + `&title=${title}`;
  }
  else if (star) {
    return queryString + `&star=${star}`;
  }
  return queryString;
}

export default generateQueryString;