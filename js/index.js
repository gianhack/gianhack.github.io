var f_chart = document.getElementById("f_chart").getContext('2d');
var d_chart = document.getElementById("d_chart").getContext('2d');
var fs_chart = document.getElementById("fs_chart").getContext('2d');

var fChart = new Chart(f_chart, {
    type: 'bar',
    data: {
        labels: ["Início", "Meio", "Fim"],
        datasets: [{
            label: '% de dificuldade',
            data: [80, 80, 80],
            backgroundColor: [
                'rgba(0, 255, 0, 0.2)',
                'rgba(0, 255, 0, 0.2)',
                'rgba(0, 255, 0, 0.2)'
            ],
            borderColor: [
                'rgba(0, 255, 0, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(0, 255, 0, 1)'
            ],
            borderWidth: 1
        },{
            label: '% de aprendizado',
            data: [30, 50, 70],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        },{
            label: '% de satisfação',
            data: [10, 50, 100],
            backgroundColor: [
                'rgba(255, 0, 255, 0.5)',
                'rgba(255, 0, 255, 0.5)',
                'rgba(255, 0, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 0, 255, 1)',
                'rgba(255, 0, 255, 1)',
                'rgba(255, 0, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var dChart = new Chart(d_chart, {
    type: 'bar',
    data: {
        labels: ["Nível"],
        datasets: [{
            label: '% de dificuldade',
            data: [60],
            backgroundColor: [
                'rgba(0, 255, 0, 0.2)'
            ],
            borderColor: [
                'rgba(0, 255, 0, 1)'
            ],
            borderWidth: 1
        },{
            label: '% de aprendizado',
            data: [90],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        },{
            label: '% de satisfação',
            data: [100],
            backgroundColor: [
                'rgba(255, 0, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 0, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var fsChart = new Chart(fs_chart, {
    type: 'bar',
    data: {
        labels: ["Nível"],
        datasets: [{
            label: '% de dificuldade',
            data: [40],
            backgroundColor: [
                'rgba(0, 255, 0, 0.2)'
            ],
            borderColor: [
                'rgba(0, 255, 0, 1)'
            ],
            borderWidth: 1
        },{
            label: '% de aprendizado',
            data: [80],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        },{
            label: '% de satisfação',
            data: [100],
            backgroundColor: [
                'rgba(255, 0, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 0, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});