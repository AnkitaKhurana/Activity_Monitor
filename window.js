$(()=>{

	const os = require('os');

	const data = [];
	const cpus = os.cpus();
	const cpus_length = cpus.length;

	for (let i = 0 ; i < cpus_length; i++)
	{
		const cpu = cpus[i];

		const cpuData = {
			data:[
			cpu.times.user,
			cpu.times.sys,
			cpu.times.idle,
			],
			backgroundColor: [
        	'rgba(255, 99, 132, 1)',
        	'rgba(54, 162, 235, 1)',
        	'rgba(255, 206, 86, 1)'
      		]
		}

		data.push(cpuData);


	}

let chart = new Chart($('.chart'),{
	type:'doughnut',
	data :{
		labels:[
		'User Time(ms)',
		'System Time(ms)',
		'Idle Time (ms)'
		],
		datasets : data
	},
	options :{
		maintainAspectRation : false,
		title :{
			display :true,
			text : 'CPU ACTIVITY',
			fontColor: 'rgb(250, 250, 250)',
        	fontSize: 16
		},
		legend: {
        	display: true,
        	labels: {
          		fontColor: 'rgb(250, 250, 250)',
          		fontSize: 12
    		}
    	 }

		}
	});



});