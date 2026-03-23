function displayAstronauts(data) {
  const astronautList = document.getElementById('astronaut-list');

  data.people.forEach((person) => {
    const listItem = document.createElement('li');
    listItem.textContent = person.name;
    astronautList.appendChild(listItem);
  });
}

fetch('http://api.open-notify.org/astros.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    displayAstronauts(data);
  })
  .catch(function (error) {
    console.error('Error fetching data:', error);
  });
