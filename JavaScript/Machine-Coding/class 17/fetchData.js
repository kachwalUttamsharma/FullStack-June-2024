const getCountries = async (keyword) => {
  try {
    const rawData = await fetch(
      `https://restcountries.com/v3.1/name/${keyword}`
    );
    const response = await rawData.json();
    if (!rawData.ok) {
      console.log(`Error: ${rawData.status} - ${rawData.statusText}`);
      return [];
    }
    return response;
  } catch (error) {
    console.log("error while fetching data", error);
  }
};

export default getCountries;
