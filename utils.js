export const setRes = (res, statusCode, body) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(body);
};

export const handleFilterByField = async (data, field, value) => {
  return data.filter(item => item[field].toLowerCase() === value.toLowerCase());
};
