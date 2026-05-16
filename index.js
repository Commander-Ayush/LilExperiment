const params = new URLSearchParams(window.location.search);

const businessName = params.get('name');   // "Mike's Plumbing"
const city = params.get('city');           // "Austin"

document.getElementById('value1').textContent = businessName;
document.getElementById('value2').textContent = city;