import Chart from './chart';

var container = document.createElement('div');
container.id = 'my-chart';

document.body.appendChild(container);

new Chart('#my-chart', 500, 600).render();