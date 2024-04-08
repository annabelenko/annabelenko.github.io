const fruitSalesData = {
    labels: ['Apples', 'Bananas', 'Oranges', 'Grapes', 'Strawberries'],
    datasets: [{
        label: 'Fruit Sales',
        data: [120, 150, 100, 80, 90],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
        ],
        borderWidth: 1
    }]
};

// Doughnut Chart
const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
const doughnutChart = new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: fruitSalesData,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Fruit Sales - Doughnut Chart'
            }
        }
    }
});

// Horizontal Bar Chart
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: fruitSalesData,
    options: {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Fruit Sales - Horizontal Bar Chart'
            }
        }
    }
});
