const fs = require('fs');
const CityStats = require('../lib/cityStats');

const citiesCSV = fs.readFileSync('./fixtures/cities.csv', 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

describe('City Stats', () => {
  it('can list all cities', () => {
    const cityStats = new CityStats(citiesCSV)
    const listCities = cityStats.listCities()
    const expectedList = [
      'Montrose',
      'Ouray',
      'Silverton',
    ]
    expect(listCities).toEqual(expectedList)
  })
})
