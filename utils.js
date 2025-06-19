export const setRes = (res, statusCode, body) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(body);
};

export const handleFilterByField = (data, field, value) => {
  return data.filter(item => item[field].toLowerCase() === value.toLowerCase());
};

export const getDataByQueryParams = (data, { continent, country, is_open_to_public }) => {
  return data.filter(destination => {
    const matchesContinent = continent
      ? destination.continent?.toLowerCase() === continent.toLowerCase()
      : true;

    const matchesCountry = country
      ? destination.country?.toLowerCase() === country.toLowerCase()
      : true;

    const matchesPublic =
      typeof is_open_to_public === 'string'
        ? destination.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase())
        : true;

    return matchesContinent && matchesCountry && matchesPublic;
  });
};
