module.exports = function CityStats (rawData) {
  this.data = processCityData(rawData);
  this.highestElevation = () => {
    const decOrderByElevation = this.data.sort((cityA, cityB) => {
      return cityA.elevation > cityB.elevation ? -1 : 1;
    });
    return decOrderByElevation[0].name;
  };

  this.listCities = () => {
    return this.data.map(city => city.name).sort();
  };
};

function processCityData(rawData) {
  const rawCities = rawData.split('\n');
  const cityData = rawCities.map(rawCity => {
    if (rawCity === '') return;
    let cityArray = rawCity.split(',');
    return {
      name: cityArray[0],
      population: cityArray[1],
      elevation: cityArray[2],
    };
  });
  return cityData.filter((city) => city !== undefined);
};
