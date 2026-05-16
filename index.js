const params = new URLSearchParams(window.location.search);

const businessName = params.get('name');   // "Mike's Plumbing"
const city = params.get('city');           // "Austin"
const service = pararm.get('service');

document.getElementById('value1').textContent = businessName;
document.getElementById('value2').textContent = city;
document.getElementById('value3').textContent = params.get('service');