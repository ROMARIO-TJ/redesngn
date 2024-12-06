const ctx = document.getElementById('ngnChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Velocidad', 'Costos', 'Escalabilidad', 'Latencia', 'Integración'],
        datasets: [
            {
                label: 'Redes NGN',
                data: [9, 8, 10, 7, 10],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Redes Tradicionales',
                data: [5, 6, 4, 8, 5],
                backgroundColor: 'rgba(75, 192, 75, 0.6)',
                borderColor: 'rgba(75, 192, 75, 1)',

                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 10
            }
        }
    }
});
