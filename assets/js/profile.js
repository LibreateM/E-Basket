

        const cleanOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#666' } },
                y: { grid: { display: false }, ticks: { color: '#666' } }
            },
            animation: { duration: 1500 }
        };

        // 1. Doughnut Chart
        new Chart(document.getElementById('doughnutChart'), {
            type: 'doughnut',
            data: {
                labels: ['Red', 'Blue', 'Yellow'],
                datasets: [{ data: [12, 19, 3], backgroundColor: ['#4dd82edb', '#36A2EB', '#FFCE56'], borderWidth: 0 }]
            },
            options: { ...cleanOptions, cutout: '60%' }
        });

        // 2. Bar Chart
        new Chart(document.getElementById('barChart'), {
            type: 'bar',
            data: {
                labels: ['Mobile', 'Laptops', 'Televisions', 'Headphones', 'Watches', 'Gaming'],
                datasets: [{
                    label: 'Revenue',
                    data: [65, 59, 80, 81, 56, 55],
                    backgroundColor: '#36A2EB',
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: cleanOptions
        });

        // 3. Line Chart
        new Chart(document.getElementById('lineChart'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Day Visits',
                    data: [20, 12, 15, 11, 23, 31],
                    borderColor: '#4dd82edb',
                    backgroundColor: 'rgba(255, 99, 132, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: cleanOptions
        });
