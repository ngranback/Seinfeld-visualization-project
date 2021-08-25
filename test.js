//========================Data Sets==========================================//

const JerryLine = [
  53, 93, 151, 75, 102, 82, 111, 121, 0, 102, 250, 57, 110, 102, 97, 107, 78,
  89, 60, 102, 65, 50, 62, 76, 47, 77, 65, 70, 77, 90, 137, 75, 107, 91, 35, 60,
  87, 118, 77, 94, 80, 102, 133, 88, 75, 72, 75, 75, 91, 75, 84, 90, 117, 63,
  90, 134, 108, 107, 113, 70, 91, 76, 110, 95, 91, 81, 57, 105, 76, 89, 51, 83,
  80, 62, 76, 69, 81, 85, 84, 67, 65, 92, 90, 90, 124, 99, 96, 92, 88, 74, 149,
  27, 97, 88, 67, 92, 79, 97, 94, 65, 104, 67, 79, 94, 133, 77, 102, 89, 112,
  79, 76, 92, 89, 89, 61, 65, 87, 71, 69, 56, 151, 82, 74, 77, 106, 56, 100, 75,
  81, 33, 100, 144, 84, 107, 76, 83, 114, 71, 91, 62, 67, 103, 100, 73, 80, 51,
  74, 71, 61, 95, 70, 71, 74, 53, 84, 77, 79, 73, 58, 72, 71, 68, 80, 85, 106,
  68, 89, 64, 96, 91, 65,
];
const GeorgeLine = [
  44, 53, 126, 43, 44, 57, 55, 76, 0, 51, 98, 49, 68, 60, 64, 55, 68, 47, 59,
  43, 58, 16, 34, 34, 69, 41, 55, 43, 93, 12, 78, 39, 58, 25, 43, 57, 56, 76,
  57, 36, 32, 57, 68, 57, 49, 51, 80, 36, 36, 57, 45, 37, 54, 41, 60, 52, 91, 0,
  40, 72, 51, 54, 81, 53, 39, 42, 33, 45, 60, 40, 54, 83, 44, 79, 36, 47, 73,
  96, 62, 41, 46, 45, 86, 83, 47, 69, 72, 65, 70, 55, 100, 44, 36, 52, 62, 89,
  75, 53, 67, 57, 44, 56, 75, 48, 64, 53, 88, 37, 72, 50, 51, 77, 44, 64, 35,
  51, 50, 54, 41, 40, 100, 54, 37, 34, 60, 80, 59, 48, 75, 41, 68, 68, 42, 99,
  65, 46, 63, 76, 34, 50, 49, 42, 67, 65, 32, 19, 55, 67, 55, 48, 54, 66, 81,
  37, 75, 58, 67, 38, 44, 54, 48, 84, 51, 59, 53, 49, 41, 66, 70, 77, 43,
];

const ElaineLine = [
  34, 68, 75, 40, 29, 36, 26, 34, 0, 19, 53, 50, 57, 68, 57, 23, 52, 52, 18, 51,
  65, 39, 28, 35, 41, 56, 54, 44, 41, 31, 33, 44, 77, 58, 56, 52, 41, 24, 23,
  48, 61, 59, 51, 36, 48, 29, 92, 55, 45, 61, 57, 30, 52, 47, 42, 82, 45, 41,
  59, 46, 72, 31, 3, 39, 69, 44, 30, 58, 38, 59, 42, 22, 60, 0, 36, 40, 58, 63,
  33, 39, 32, 44, 60, 0, 54, 80, 47, 52, 36, 63, 44, 64, 53, 73, 45, 15, 36, 33,
  58, 35, 57, 44, 33, 80, 69, 45, 27, 49, 42, 46, 27, 80, 42, 30, 64, 65, 44,
  26, 36, 38, 3, 51, 26, 44, 58, 31, 35, 60, 61, 24, 46, 42, 51, 49, 40, 33, 44,
  40, 62, 45, 57, 41, 79, 59, 36, 34, 53, 25, 32, 57, 55, 54, 51, 50, 40, 52,
  48, 68, 54, 41, 54, 31, 52, 39, 75, 47, 50, 16, 84, 66, 60,
];

const KramerLine = [
  32, 21, 38, 29, 18, 43, 46, 14, 0, 24, 7, 23, 18, 40, 29, 37, 32, 32, 18, 29,
  38, 36, 34, 31, 35, 37, 32, 46, 42, 23, 45, 33, 28, 24, 15, 50, 30, 34, 59,
  55, 49, 18, 38, 23, 57, 47, 59, 25, 36, 62, 58, 55, 54, 48, 70, 19, 24, 0, 50,
  22, 38, 46, 60, 52, 43, 46, 31, 56, 34, 27, 49, 32, 37, 38, 37, 47, 51, 58,
  56, 42, 26, 51, 8, 34, 48, 16, 39, 37, 36, 47, 72, 4, 39, 37, 41, 9, 27, 35,
  29, 13, 52, 30, 42, 56, 47, 36, 27, 28, 28, 50, 35, 30, 53, 45, 46, 51, 31,
  34, 57, 62, 38, 42, 33, 35, 52, 71, 49, 0, 81, 16, 24, 58, 52, 45, 28, 33, 35,
  37, 42, 30, 67, 45, 51, 51, 39, 47, 44, 48, 37, 61, 59, 51, 41, 33, 42, 36,
  38, 53, 39, 33, 40, 30, 46, 36, 33, 58, 38, 12, 51, 29, 24,
];

const rating = [
  7.6, 7.6, 7.6, 7.3, 7.5, 7.7, 7.9, 8.3, 8.3, 7.8, 8.0, 8.2, 7.8, 8.1, 7.3,
  8.6, 7.6, 8.1, 7.7, 8.1, 7.3, 8.5, 8.7, 8.4, 8.6, 7.9, 7.4, 8.1, 8.2, 8.6,
  8.3, 7.4, 8.3, 8.6, 7.0, 8.9, 8.0, 7.9, 8.2, 8.2, 8.2, 8.2, 8.5, 8.1, 8.1,
  8.0, 8.6, 8.4, 8.0, 8.0, 9.5, 8.8, 8.4, 8.0, 8.0, 8.0, 9.4, 7.8, 8.5, 8.6,
  8.3, 8.2, 8.5, 8.4, 8.8, 8.3, 8.0, 7.9, 8.4, 8.3, 8.4, 7.7, 8.2, 8.1, 8.4,
  8.1, 9.1, 8.4, 7.4, 8.0, 8.3, 8.5, 8.9, 9.6, 8.2, 8.1, 8.3, 8.1, 7.9, 8.1,
  8.0, 8.1, 8.2, 8.7, 8.8, 8.4, 7.9, 8.1, 8.3, 8.1, 8.7, 8.3, 8.5, 8.1, 8.6,
  7.8, 8.8, 8.3, 8.1, 8.5, 8.4, 9.5, 8.6, 8.5, 8.1, 8.5, 8.8, 8.5, 8.1, 8.3,
  8.3, 8.1, 7.9, 7.9, 8.9, 8.9, 8.2, 8.7, 8.3, 8.2, 9.2, 8.8, 8.8, 7.9, 8.3,
  9.0, 9.1, 8.6, 8.1, 8.0, 8.4, 8.2, 8.8, 8.7, 8.7, 8.9, 8.7, 8.1, 8.5, 8.5,
  8.4, 8.1, 8.8, 8.4, 8.0, 9.2, 8.6, 8.7, 8.3, 8.8, 8.6, 8.1, 7.8, 7.6, 7.8,
  8.3, 8.2, 8.9, 8.1, 8.0, 7.3,
];

const AirDate_list = [
  '1989-07-05',
  '1990-05-31',
  '1990-06-07',
  '1990-06-14',
  '1990-06-21',
  '1991-01-16',
  '1991-01-30',
  '1991-02-06',
  '1991-02-13',
  '1991-04-04',
  '1991-04-11',
  '1991-04-18',
  '1991-04-25',
  '1991-05-02',
  '1991-05-16',
  '1991-05-23',
  '1991-06-26',
  '1991-09-18',
  '1991-09-25',
  '1991-10-02',
  '1991-10-09',
  '1991-10-16',
  '1991-10-30',
  '1991-11-06',
  '1991-11-13',
  '1991-11-20',
  '1991-11-27',
  '1991-12-04',
  '1991-12-11',
  '1992-01-08',
  '1992-01-15',
  '1992-01-29',
  '1992-02-05',
  '1992-02-12',
  '1992-02-12',
  '1992-02-26',
  '1992-03-04',
  '1992-03-25',
  '1992-04-22',
  '1992-05-06',
  '1992-08-12',
  '1992-08-19',
  '1992-09-16',
  '1992-09-16',
  '1992-09-23',
  '1992-09-30',
  '1992-10-07',
  '1992-10-28',
  '1992-11-04',
  '1992-11-11',
  '1992-11-18',
  '1992-11-25',
  '1992-12-16',
  '1993-01-06',
  '1993-01-27',
  '1993-02-04',
  '1993-02-11',
  '1993-02-18',
  '1993-02-25',
  '1993-03-18',
  '1993-04-15',
  '1993-05-13',
  '1993-05-20',
  '1993-09-16',
  '1993-09-23',
  '1993-09-30',
  '1993-10-07',
  '1993-10-14',
  '1993-10-28',
  '1993-11-04',
  '1993-11-11',
  '1993-11-18',
  '1993-12-09',
  '1993-12-16',
  '1994-01-06',
  '1994-02-03',
  '1994-02-10',
  '1994-02-17',
  '1994-02-24',
  '1994-03-17',
  '1994-04-28',
  '1994-05-05',
  '1994-05-12',
  '1994-05-19',
  '1994-09-22',
  '1994-09-29',
  '1994-10-06',
  '1994-10-13',
  '1994-10-27',
  '1994-11-03',
  '1994-11-10',
  '1994-11-17',
  '1994-12-08',
  '1994-12-15',
  '1995-01-05',
  '1995-01-19',
  '1995-01-26',
  '1995-02-09',
  '1995-02-16',
  '1995-02-23',
  '1995-03-16',
  '1995-04-06',
  '1995-04-27',
  '1995-05-04',
  '1995-05-11',
  '1995-05-18',
  '1995-09-21',
  '1995-09-28',
  '1995-10-05',
  '1995-10-12',
  '1995-10-19',
  '1995-11-02',
  '1995-11-09',
  '1995-11-16',
  '1995-12-07',
  '1995-12-14',
  '1996-01-04',
  '1996-01-25',
  '1996-02-01',
  '1996-02-08',
  '1996-02-15',
  '1996-02-22',
  '1996-03-07',
  '1996-04-04',
  '1996-04-25',
  '1996-05-02',
  '1996-05-09',
  '1996-05-16',
  '1996-09-19',
  '1996-09-26',
  '1996-10-03',
  '1996-10-10',
  '1996-10-17',
  '1996-10-31',
  '1996-11-07',
  '1996-11-14',
  '1996-11-21',
  '1996-12-19',
  '1997-01-09',
  '1997-01-16',
  '1997-01-30',
  '1997-02-06',
  '1997-02-13',
  '1997-02-20',
  '1997-03-13',
  '1997-04-10',
  '1997-04-24',
  '1997-05-01',
  '1997-05-08',
  '1997-05-15',
  '1997-09-25',
  '1997-10-02',
  '1997-10-09',
  '1997-10-16',
  '1997-10-30',
  '1997-11-06',
  '1997-11-13',
  '1997-11-20',
  '1997-12-11',
  '1997-12-18',
  '1998-01-08',
  '1998-01-15',
  '1998-01-29',
  '1998-02-05',
  '1998-02-26',
  '1998-03-19',
  '1998-04-09',
  '1998-04-23',
  '1998-04-30',
  '1998-05-07',
  '1998-05-14',
];

const seasonsList = [
  'S03E18',
  'S03E04',
  'S09E23',
  'S02E10',
  'S01E04',
  'S05E16',
  'S03E15',
  'S03E10',
  'S01E05',
  'S01E03',
  'S01E01',
  'S02E12',
  'S01E02',
  'S09E14',
  'S05E09',
  'S02E01',
  'S03E02',
  'S09E13',
  'S02E08',
  'S02E05',
  'S09E15',
  'S06E24',
  'S04E18',
  'S08E06',
  'S03E09',
  'S06E05',
  'S03E21',
  'S05E05',
  'S06E13',
  'S02E02',
  'S07E18',
  'S07E17',
  'S03E20',
  'S05E17',
  'S04E14',
  'S08E12',
  'S02E06',
  'S04E10',
  'S09E05',
  'S04E09',
  'S05E04',
  'S04E15',
  'S06E07',
  'S04E16',
  'S09E20',
  'S04E06',
  'S05E13',
  'S07E16',
  'S04E05',
  'S07E13',
  'S09E12',
  'S08E20',
  'S09E02',
  'S06E18',
  'S07E03',
  'S02E09',
  'S03E01',
  'S03E03',
  'S03E11',
  'S07E09',
  'S06E16',
  'S06E08',
  'S04E04',
  'S08E11',
  'S06E04',
  'S06E06',
  'S06E22',
  'S09E19',
  'S05E11',
  'S06E02',
  'S08E14',
  'S02E07',
  'S05E10',
  'S04E01',
  'S09E17',
  'S08E02',
  'S04E22',
  'S03E22',
  'S03E23',
  'S06E01',
  'S07E21',
  'S06E09',
  'S03E12',
  'S04E02',
  'S06E17',
  'S03E16',
  'S05E03',
  'S08E01',
  'S07E14',
  'S05E07',
  'S05E18',
  'S07E15',
  'S06E03',
  'S06E20',
  'S09E09',
  'S02E04',
  'S03E14',
  'S02E03',
  'S07E02',
  'S04E21',
  'S08E07',
  'S09E16',
  'S05E06',
  'S05E12',
  'S05E01',
  'S05E15',
  'S04E08',
  'S07E05',
  'S06E12',
  'S04E13',
  'S05E08',
  'S03E07',
  'S09E04',
  'S09E01',
  'S08E13',
  'S07E04',
  'S04E23',
  'S05E20',
  'S07E12',
  'S08E21',
  'S04E03',
  'S06E21',
  'S03E05',
  'S04E19',
  'S07E08',
  'S07E10',
  'S08E22',
  'S02E11',
  'S09E07',
  'S03E13',
  'S04E07',
  'S04E20',
  'S06E23',
  'S03E08',
  'S07E07',
  'S08E10',
  'S03E17',
  'S09E11',
  'S08E16',
  'S06E10',
  'S06E19',
  'S08E17',
  'S09E08',
  'S03E06',
  'S08E19',
  'S07E22',
  'S08E05',
  'S05E02',
  'S07E11',
  'S08E04',
  'S08E15',
  'S09E10',
  'S06E11',
  'S04E12',
  'S07E01',
  'S09E03',
  'S05E21',
  'S07E19',
  'S08E18',
  'S09E18',
  'S07E20',
  'S03E19',
  'S08E08',
  'S08E09',
  'S05E14',
  'S09E06',
  'S08E03',
  'S04E17',
  'S07E06',
  'S04E11',
  'S05E22',
];

const characterNames = ['Jerry', 'George', 'Elaine', 'Krammer'];
const Seasons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const JerryLinesPerSeason = [
  564, 1059, 2001, 2018, 1821, 1834, 1693, 1762, 1793,
];
const GeorgeLinesPerSeason = [
  261, 642, 1463, 1401, 1207, 1087, 1208, 1031, 1248,
];
const ElaineLinesPerSeason = [
  158, 466, 1116, 805, 1088, 1099, 1062, 1016, 1069,
];
const KrammerLinesPerSeason = [67, 284, 719, 795, 872, 909, 909, 1012, 985];

const JerryLinesPerWriter = [0.26, 0.27, 0.3, 0.34, 0.23, 0.27];
const GeorgeLinesPerWriter = [0.19, 0.18, 0.2, 0.18, 0.16, 0.17];
const ElaineLinesPerWriter = [0.14, 0.16, 0.12, 0.14, 0.15, 0.16];
const KrammerLinesPerWriter = [0.11, 0.11, 0.13, 0.08, 0.13, 0.13];

const Top_Writers = [
  'Larry David',
  'Peter Mehlman',
  'Larry Charles',
  'Larry David, Jerry Seinfeld',
  'Tom Gammill, Max Pross',
  'Alec Berg, Jeff Schaffer',
];
const Writer_Rating_lists = [
  [
    8.1, 7.3, 8.2, 8.1, 7.4, 7.9, 7.3, 7.9, 8.5, 8.6, 8.0, 8.3, 8.1, 8.1, 8.1,
    8.8, 8.2, 8.6, 8.1, 9.5, 8.3, 8.8, 8.3, 8.7, 8.2, 8.0, 8.1, 8.7,
  ],
  [8.0, 7.7, 8.0, 7.9, 7.8, 8.0, 8.0, 7.9, 8.1, 8.2, 8.5, 8.0, 8.2, 8.1],
  [9.4, 7.8, 7.3, 8.4, 8.5, 8.2, 7.9, 8.5, 8.1, 8.0, 8.5, 8.4, 8.2, 8.8, 8.2],
  [8.6, 8.3, 7.5, 7.6, 7.7, 7.6, 8.3, 7.6, 7.3, 8.0, 7.9, 8.3, 8.3, 8.0],
  [8.5, 8.1, 8.3, 8.2, 8.4, 8.1, 8.1, 8.3, 8.1, 8.5],
  [8.9, 8.1, 8.3, 8.4, 8.3, 8.6, 8.1, 8.5, 9.0],
];

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
