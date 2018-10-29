function processCityData(rawData) {
  const rawCities = rawData.split('\n');
  const cityData = rawCities.map(rawCity => {
    if (rawCity === '') return;
    let cityArray = rawCity.split(',')
    return {
      name: cityArray[0],
      population: cityArray[1],
      elevation: cityArray[3],
    }
  });
  return cityData.filter((city) => city !== undefined);
}

function CityStats (rawData) {
  this.data = processCityData(rawData);
  this.listCities = () => {
    return this.data.map(city => city.name).sort();
  }
}

module.exports = CityStats;
