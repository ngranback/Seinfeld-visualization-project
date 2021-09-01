
// Store our API endpoint inside queryUrl
var queryUrl = "https://7dyeho1x4j.execute-api.us-east-2.amazonaws.com/default/myfirstfunction";
// Perform a GET request to the query URL
d3.json(queryUrl).then(function(data) {
  var mydata = data;
  console.log(mydata);
});




//========================Data Sets==========================================//




const JerryLine = jerry_dict['Lines_per_episode']
;
const GeorgeLine = george_dict['Lines_per_episode']
;
const ElaineLine = elaine_dict['Lines_per_episode']
;
const KramerLine = kramer_dict['Lines_per_episode']
;

const rating = general_dict['Ratings']
;
const AirDate_list = general_dict['AirDate_list']
;
const seasonsList = general_dict['SEID_list']
;

const characterNames = ['Jerry', 'George', 'Elaine', 'Kramer'];
const Seasons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const JerryLinesPerSeason = jerry_dict['Lines_per_season']
 ;
const GeorgeLinesPerSeason = george_dict['Lines_per_season']
 ;
const ElaineLinesPerSeason = elaine_dict['Lines_per_season']
 ;
const KrammerLinesPerSeason = kramer_dict['Lines_per_season']
;

const JerryLinesPerWriter = jerry_dict['Lines_per_writer'];
const GeorgeLinesPerWriter = george_dict['Lines_per_writer'];
const ElaineLinesPerWriter = elaine_dict['Lines_per_writer'];
const KrammerLinesPerWriter = kramer_dict['Lines_per_writer'];

const Top_Writers = [
  'Larry David',
  'Peter Mehlman',
  'Larry Charles',
  'Larry David, Jerry Seinfeld',
  'Tom Gammill, Max Pross',
  'Alec Berg, Jeff Schaffer',
];
const Writer_Rating_lists = general_dict['Writer_Rating_list']
;

let JerryXY = [];
let GeorgeXY = [];
let ElaineXY = [];
let KrammerXY = [];

//===============Utility Functions==============//

for (let index = 0; index < rating.length; index++) {
  JerryXY.push({
    x: rating[index],
    y: JerryLine[index],
  });
}

for (let index = 0; index < rating.length; index++) {
  GeorgeXY.push({
    x: rating[index],
    y: GeorgeLine[index],
  });
}

for (let index = 0; index < rating.length; index++) {
  ElaineXY.push({
    x: rating[index],
    y: ElaineLine[index],
  });
}

for (let index = 0; index < rating.length; index++) {
  KrammerXY.push({
    x: rating[index],
    y: KramerLine[index],
  });
}

//===========CHARTS==========//

//Chart 1a

var chart1 = document.getElementById('Chart1');
var Chart1 = new Chart(chart1, {
  type: 'scatter',
  data: {
    labels: rating,
    datasets: [
      {
        label: 'Jerry ',
        data: JerryXY,
        backgroundColor: ['rgb(255, 99, 132,0.5)'],
        hoverBackgroundColor: ['rgb(255, 99, 132,0.5)'],
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Chart 1a Jerry ',
        font: {
          size: 20,
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
      interaction: {
        mode: 'dataset',
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Dialouges',
          color: '#000',
          font: {
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Ratings',
          color: '#000',
          font: {
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
        },
      },
    },
  },
});

// var chart1a = document.getElementById('Chart1a');
// var Chart1a = new Chart(chart1a, {
//   type: 'scatter',
//   data: {
//     labels: rating,
//     datasets: [
//       {
//         label: 'Jerry ',
//         data: JerryXY,
//         backgroundColor: ['rgb(255, 99, 132,0.5)'],
//         hoverBackgroundColor: ['rgb(255, 99, 132,0.5)'],
//       },
//     ],
//   },
//   options: {
//     plugins: {
//       title: {
//         display: true,
//         text: 'Chart 1a Jerry ',
//         font: {
//           size: 20,
//           weight: 'bold',
//           lineHeight: 1.2,
//         },
//       },
//       interaction: {
//         mode: 'dataset',
//       },
//     },
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Dialouges',
//           color: '#000',
//           font: {
//             size: 20,
//             weight: 'bold',
//             lineHeight: 1.2,
//           },
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Ratings',
//           color: '#000',
//           font: {
//             size: 20,
//             weight: 'bold',
//             lineHeight: 1.2,
//           },
//         },
//       },
//     },
//   },
// });

// var chart1b = document.getElementById('Chart1b');
// var Chart1b = new Chart(chart1b, {
//   type: 'scatter',
//   data: {
//     labels: rating,
//     datasets: [
//       {
//         label: 'George ',
//         data: GeorgeXY,
//         backgroundColor: ['rgb(73,183,190,0.5)'],
//         hoverBackgroundColor: ['rgb(73,183,190)'],
//       },
//     ],
//   },
//   options: {
//     plugins: {
//       title: {
//         display: true,
//         text: 'Chart 1b George ',
//         font: {
//           size: 20,
//           weight: 'bold',
//           lineHeight: 1.2,
//         },
//       },
//       interaction: {
//         mode: 'dataset',
//       },
//     },
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Dialouges',
//           color: '#000',
//           font: {
//             size: 20,
//             weight: 'bold',
//             lineHeight: 1.2,
//           },
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Ratings',
//           color: '#000',
//           font: {
//             size: 20,
//             weight: 'bold',
//             lineHeight: 1.2,
//           },
//         },
//       },
//     },
//   },
// });

// var chart1c = document.getElementById('Chart1c');
// var Chart1c = new Chart(chart1c, {
//   type: 'scatter',
//   data: {
//     labels: rating,
//     datasets: [
//       {
//         label: 'Elaine ',
//         data: ElaineXY,
//         backgroundColor: ['rgb(50,50,50,0.5)'],
//         hoverBackgroundColor: ['rgb(50,50,50)'],
//       },
//     ],
//   },
//   options: {
//     plugins: {
//       title: {
//         display: true,
//         text: 'Chart 1c Elaine ',
//         font: {
//           size: 20,
//           weight: 'bold',
//           lineHeight: 1.2,
//         },
//       },
//       interaction: {
//         mode: 'dataset',
//       },
//     },
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Dialouges',
//           color: '#000',
//           font: {
//             size: 20,
//             weight: 'bold',
//             lineHeight: 1.2,
//           },
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Ratings',
//           color: '#000',
//           font: {
//             size: 20,
//             weight: 'bold',
//             lineHeight: 1.2,
//           },
//         },
//       },
//     },
//   },
// });

// var chart1d = document.getElementById('Chart1d');
// var Chart1d = new Chart(chart1d, {
//   type: 'scatter',
//   data: {
//     labels: rating,
//     datasets: [
//       {
//         label: 'Krammer ',
//         data: KrammerXY,
//         backgroundColor: ['rgb(93,159,229,0.5)'],
//         hoverBackgroundColor: ['rgb(93,159,229)'],
//       },
//     ],
//   },
//   options: {
//     plugins: {
//       title: {
//         display: true,
//         text: 'Chart 1d Krammer  ',
//         font: {
//           size: 20,
//           weight: 'bold',
//           lineHeight: 1.2,
//         },
//       },
//       interaction: {
//         mode: 'dataset',
//       },
//     },
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Dialouges',
//           color: '#000',
//           font: {
//             size: 20,
//             weight: 'bold',
//             lineHeight: 1.2,
//           },
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Ratings',
//           color: '#000',
//           font: {
//             size: 20,
//             weight: 'bold',
//             lineHeight: 1.2,
//           },
//         },
//       },
//     },
//   },
// });

function showElem(number) {
  if (number == 1) {
    Chart1.options.plugins.title.text = 'Chart 1 Jerry';
    var data = Chart1.config.data;
    console.log(data);
    data.datasets[0].data = JerryXY;
    data.datasets[0].label = 'Jerry';
    data.datasets[0].backgroundColor = ['rgb(255, 99, 132,0.5)'];
    data.datasets[0].hoverBackgroundColor = ['rgb(255, 99, 132,0.5)'];
    Chart1.update();
  }
  if (number == 2) {
    Chart1.options.plugins.title.text = 'Chart 1 George';
    var data = Chart1.config.data;
    console.log(data);
    data.datasets[0].data = GeorgeXY;
    data.datasets[0].label = 'George';
    data.datasets[0].backgroundColor = ['rgb(73,183,190,0.5)'];
    data.datasets[0].hoverBackgroundColor = ['rgb(73,183,190)'];
    Chart1.update();
  }
  if (number == 3) {
    Chart1.options.plugins.title.text = 'Chart 1 Elaine';
    var data = Chart1.config.data;
    console.log(data);
    data.datasets[0].data = ElaineXY;
    data.datasets[0].label = 'Elaine';
    data.datasets[0].backgroundColor = ['rgb(50,50,50,0.5)'];
    data.datasets[0].hoverBackgroundColor = ['rgb(50,50,50)'];
    Chart1.update();
  }

  if (number == 4) {
    Chart1.options.plugins.title.text = 'Chart 1 Krammer';
    var data = Chart1.config.data;
    console.log(data);
    data.datasets[0].data = KrammerXY;
    data.datasets[0].label = 'Krammer';
    data.datasets[0].backgroundColor = ['rgb(93,159,229,0.5)'];
    data.datasets[0].hoverBackgroundColor = ['rgb(93,159,229)'];
    Chart1.update();
  }
}

//Chart 2

var chart2 = document.getElementById('Chart2');
var Chart2 = new Chart(chart2, {
  type: 'bar',
  data: {
    labels: Seasons,
    datasets: [
      {
        label: 'Jerry',
        data: JerryLinesPerSeason,
        backgroundColor: ['rgb(255, 99, 132)'],
        borderWidth: 1,
      },
      {
        label: 'George',
        data: GeorgeLinesPerSeason,
        backgroundColor: ['rgb(73,183,190)'],
        borderWidth: 1,
      },
      {
        label: 'Elaine',
        data: ElaineLinesPerSeason,
        backgroundColor: ['rgb(50,50,50)'],
        borderWidth: 1,
      },
      {
        label: 'Krammer',
        data: KrammerLinesPerSeason,
        backgroundColor: ['rgb(93,159,229)'],
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      title: {
        display: true,
        text: 'Chart 2',
        font: {
          size: 20,
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Lines',
          color: '#000',
          font: {
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Seasons',
          color: '#000',
          font: {
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
        },
      },
    },
  },
});

//Chart 3

var chart3 = document.getElementById('Chart3');
var Chart3 = new Chart(chart3, {
  type: 'bar',
  data: {
    labels: Top_Writers,
    datasets: [
      {
        label: 'Jerry',
        data: JerryLinesPerWriter,
        backgroundColor: ['rgb(255, 99, 132)'],
        borderWidth: 1,
      },
      {
        label: 'George',
        data: GeorgeLinesPerWriter,
        backgroundColor: ['rgb(73,183,190)'],
        borderWidth: 1,
      },
      {
        label: 'Elaine',
        data: ElaineLinesPerWriter,
        backgroundColor: ['rgb(50,50,50)'],
        borderWidth: 1,
      },
      {
        label: 'Krammer',
        data: KrammerLinesPerWriter,
        backgroundColor: ['rgb(93,159,229)'],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Chart 3',
        font: {
          size: 20,
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Percentage',
          color: '#000',
          font: {
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Writer',
          color: '#000',
          font: {
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
        },
      },
    },
  },
});

//Chart 4

var chart4 = document.getElementById('Chart4');
var Chart4 = new Chart(chart4, {
  type: 'line',
  data: {
    labels: AirDate_list,
    datasets: [
      {
        label: 'rating',
        data: rating,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Chart 4',
        font: {
          size: 20,
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Rating',
          color: '#000',
          font: {
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Air-Date',
          color: '#000',
          font: {
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
        },
      },
    },
  },
});

//Chart 5

var trace1 = {
  name: 'Larry David',
  y: Writer_Rating_lists[0],
  type: 'box',
};

var trace2 = {
  name: 'Peter Mehlman',
  y: Writer_Rating_lists[1],
  type: 'box',
};

var trace3 = {
  name: 'Larry Charles',
  y: Writer_Rating_lists[2],
  type: 'box',
};

var trace4 = {
  name: 'Larry David, Jerry Seinfeld',
  y: Writer_Rating_lists[3],
  type: 'box',
};

var trace5 = {
  name: 'Tom Gammill, Max Pross',
  y: Writer_Rating_lists[4],
  type: 'box',
};

var trace6 = {
  name: 'Alec Berg, Jeff Schaffer',
  y: Writer_Rating_lists[5],
  type: 'box',
};

var layout = {
  title: {
    text: 'Chart 5',
    font: {
      family: 'Courier New, monospace',
      size: 24,
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    automargin: true,
    title: {
      text: 'Writers',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Rating',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f',
      },
    },
  },
};

var data = [trace1, trace2, trace3, trace4, trace5, trace6];

Plotly.newPlot('Chart5', data, layout);
