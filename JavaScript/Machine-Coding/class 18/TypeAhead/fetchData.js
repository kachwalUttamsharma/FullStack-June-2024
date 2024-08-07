const cache = new Map();
const cacheExpiry = 60 * 60 * 1000 * 24;

const getCountries = async (keyword, signal) => {
  try {
    const cacheKey = keyword;
    const now = Date.now();
    if (cache.has(cacheKey)) {
      const cachedData = cache.get(cacheKey);
      if (now - cachedData.timestamp < cacheExpiry) {
        return cachedData.data;
      } else {
        cache.delete(cacheKey);
      }
    }
    const rawData = await fetch(
      `https://restcountries.com/v3.1/name/${keyword}`,
      { signal }
    );
    const response = await rawData.json();
    if (!rawData.ok) {
      console.log(`Error: ${rawData.status} - ${rawData.statusText}`);
      return [];
    }
    cache.set(cacheKey, { data: response, timestamp: now });
    return response;
  } catch (error) {
    console.log("error while fetching data", error);
  }
};

export default getCountries;
