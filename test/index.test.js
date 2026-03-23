const { document } = require('./helpers');
const { displayAstronauts } = require('../index');

// Sample test suite for fetching and displaying astronaut data
describe('Fetching and Displaying Astronaut Data', () => {
  it('should select the astronaut-list element', () => {
    const astronautList = document.getElementById('astronaut-list');
    expect(astronautList).not.toBeNull();
  });

  it('should fetch and display astronaut data', (done) => {
    const astronautList = document.getElementById('astronaut-list');
    // Simulate fetching data from the API
    fetch('http://api.open-notify.org/astros.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        displayAstronauts(data);

        // Check if the astronautList has been updated
        const listItems = astronautList.querySelectorAll('li');
        expect(listItems.length).toBeGreaterThan(0);
        expect(listItems[0].textContent).toBe('Test Astronaut');
        done();
      })
      .catch(function (error) {
        done(error);
      });
  });
});
