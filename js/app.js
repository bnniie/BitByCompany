//Validar usuario
    function validarManager() {
    
    var usr= document.getElementById("usr").value;
    var pas = document.getElementById("pas").value;
    
    if (usr === "manager" && pas === "manager") {
        window.location.href = "second.html";

    } else {
        alert("Access denied.");

        document.getElementById("usr").value = "";
        document.getElementById("pas").value = "";
    }
}

//Cronometro
let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let startButtonClicked = false;

    function start() {
        if (!timer) {
            timer = setInterval(incrementTime, 1000);
        }
        startButtonClicked = true;
        document.getElementById("startButton").style.opacity = "0.5";
    }

    function stop() {
        clearInterval(timer);
        timer = null;
        if (startButtonClicked) {
            document.getElementById("startButton").style.opacity = "1";
        }
        document.getElementById("stopButton").style.opacity = "1";
    }

    function incrementTime() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
        displayTime();
    }

    function displayTime() {
        const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
        document.getElementById("cronometro").innerText = formattedTime;
    }

    function pad(number) {
        return (number < 10 ? '0' : '') + number;
    }

//Generar datos
var myChart;
var myChart2;
var myChart3;
var myChart4;
var intervalId;
var dataStarted = false;

    function generateRandomData() {
        var randomValue = Math.random();
        
        if (randomValue < 0.2) {
            return {
                compost: 20,
                agua: Math.floor(Math.random() * 20),
                organico: Math.floor(Math.random() * 20),
                mascota: Math.floor(Math.random() * 20),
                agua2: Math.floor(Math.random() * 51),
                gas: Math.floor(Math.random() * 51),
                electrica: Math.floor(Math.random() * 51),
                tiempo: Math.floor(Math.random() * 51)
            };
        } else {
            return {
                compost: Math.floor(Math.random() * 20),
                agua: Math.floor(Math.random() * 20),
                organico: Math.floor(Math.random() * 20),
                mascota: Math.floor(Math.random() * 20),
                agua2: Math.floor(Math.random() * 51),
                gas: Math.floor(Math.random() * 51),
                electrica: Math.floor(Math.random() * 51),
                tiempo: Math.floor(Math.random() * 51)
            };
        }
    }

//Grafica 1
var ctx = document.getElementById('myChart').getContext('2d');
var component = ['Waste', 'Water', 'Compost'];

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: component,
        datasets: [{
            label: 'Organic Waste (Kg)',
            data: [0, 0], 
            backgroundColor: 'rgba(74, 174, 60, 0.2)',
            borderColor: 'rgba(74, 174, 60, 1)',
            borderWidth: 1,
        }, {     
            label: 'Pet Waste (Kg)',
            data: [0, 0], 
            backgroundColor: 'rgba(210, 180, 140, 0.2)',
            borderColor: 'rgba(210, 180, 140, 1)',
            borderWidth: 1,
        }, {     
            label: 'Water (L)',
            data: [0, 0], 
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }, {
            label: 'Compost (Kg)',
            data: [0, 0],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            y: {
                min: 0,
                max: 20,
            }
        }
    }
});

//Grafica 2
var ctx2 = document.getElementById('myChart2').getContext('2d');
var dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var dayIndex = 0;

var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: dayOfWeek,
        datasets: [{
            label: 'Compost (Kg)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }, {
            label: 'Water (L)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }, {
            label: 'Gas (m3)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(255, 165, 0, 0.2)',
            borderColor: 'rgba(255, 165, 0, 1)',
            borderWidth: 1,
        }, {
            label: 'Electric Power (A)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(182, 102, 210, 0.2)',
            borderColor: 'rgba(182, 102, 210, 1)',
            borderWidth: 1,
        }, {
            label: 'Time (hhmm)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
                y: {
                min: 0,
                max: 50,
            }
        }
    }
});

//Grafica 3
var ctx3 = document.getElementById('myChart3').getContext('2d');
var monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthIndex = 0;

var myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: monthOfYear,
        datasets: [{
            label: 'Compost (Kg)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }, {
            label: 'Water (L)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }, {
            label: 'Gas (m3)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(255, 165, 0, 0.2)',
            borderColor: 'rgba(255, 165, 0, 1)',
            borderWidth: 1,
        }, {
            label: 'Electric Power (A)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(182, 102, 210, 0.2)',
            borderColor: 'rgba(182, 102, 210, 1)',
            borderWidth: 1,
        }, {
            label: 'Time (hhmm)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
                y: {
                min: 0,
                max: 50,
            }
        }
    }
});

//Grafica 4
var ctx4 = document.getElementById('myChart4').getContext('2d');
var hourOfDay = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
var hourIndex = 0;

myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: hourOfDay,
        datasets: [{
            label: 'Compost (Kg)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }, {
            label: 'Water (L)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }, {
            label: 'Gas (m3)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(255, 165, 0, 0.2)',
            borderColor: 'rgba(255, 165, 0, 1)',
            borderWidth: 1,
        }, {
            label: 'Electric Power (A)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(182, 102, 210, 0.2)',
            borderColor: 'rgba(182, 102, 210, 1)',
            borderWidth: 1,
        }, {
            label: 'Time (hhmm)',
            data: [],
            fill: false,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            y: {
                min: 0,
                max: 50,
            }
        }
    }
});

    function updateChartData() {
        var newData = generateRandomData();

        myChart.data.datasets[0].data[0] = newData.organico;
        myChart.data.datasets[1].data[0] = newData.mascota;
        myChart.data.datasets[2].data[1] = newData.agua;
        myChart.data.datasets[3].data[2] = newData.compost;
        myChart.update();

        if (newData.compost >= 20) {
            updateSecondChart();
            updateThirdChart();
            updateFourthChart();
        }
    }

    function updateSecondChart() {
        var newData = generateRandomData();

        myChart2.data.datasets[0].data[dayIndex] = newData.compost;
        myChart2.data.datasets[1].data[dayIndex] = newData.agua2;
        myChart2.data.datasets[2].data[dayIndex] = newData.gas;
        myChart2.data.datasets[3].data[dayIndex] = newData.electrica;
        myChart2.data.datasets[4].data[dayIndex] = newData.tiempo;
        myChart2.update();

        dayIndex = (dayIndex + 1) % dayOfWeek.length;
    }

    function updateThirdChart() {
        var newData = generateRandomData();

        myChart3.data.datasets[0].data[monthIndex] = newData.compost;
        myChart3.data.datasets[1].data[monthIndex] = newData.agua2;
        myChart3.data.datasets[2].data[monthIndex] = newData.gas;
        myChart3.data.datasets[3].data[monthIndex] = newData.electrica;
        myChart3.data.datasets[4].data[monthIndex] = newData.tiempo;
        myChart3.update();

        monthIndex = (monthIndex + 1) % monthOfYear.length;
    }

    function updateFourthChart() {
        var newData = generateRandomData();
    
        myChart4.data.datasets[0].data[hourIndex] = newData.compost;
        myChart4.data.datasets[1].data[hourIndex] = newData.agua2;
        myChart4.data.datasets[2].data[hourIndex] = newData.gas;
        myChart4.data.datasets[3].data[hourIndex] = newData.electrica;
        myChart4.data.datasets[4].data[hourIndex] = newData.tiempo;
        myChart4.update();
    
        hourIndex = (hourIndex + 1) % hourOfDay.length;
    }
    
    document.getElementById('startButton').addEventListener('click', function() {
        if (!dataStarted) {
            updateChartData();
            dataStarted = true;
            intervalId = setInterval(updateChartData, 1000);
        }
    });
    
    document.getElementById('stopButton').addEventListener('click', function() {
        clearInterval(intervalId);
        dataStarted = false;
    });