import { pick } from 'lodash';

// const inputData = [
//   {
//     date: '2022-12-14T03:21:29.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 274.65,
//     returnAirTemperature: 274.52,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 275.65,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-14T03:31:36.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 273.15,
//     returnAirTemperature: 273.96,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 276.15,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-14T03:41:36.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 269.97,
//     returnAirTemperature: 271.78,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 275.96,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-14T03:51:43.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 270.34,
//     returnAirTemperature: 271.47,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 279.15,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-14T04:02:10.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 270.97,
//     returnAirTemperature: 272.47,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 278.96,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-14T04:12:39.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 271.53,
//     returnAirTemperature: 273.27,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 279.02,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-14T04:22:44.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 272.03,
//     returnAirTemperature: 273.65,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 278.02,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-14T04:33:14.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 272.47,
//     returnAirTemperature: 274.02,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 277.65,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-14T04:43:44.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 272.84,
//     returnAirTemperature: 274.27,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 277.46,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-14T04:53:50.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 273.03,
//     returnAirTemperature: 274.33,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 277.46,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-15T01:10:08.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 272.47,
//     returnAirTemperature: 272.03,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 272.65,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-15T05:10:08.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 273.33,
//     returnAirTemperature: 273.46,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 278.46,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-15T09:10:27.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 275.52,
//     returnAirTemperature: 276.15,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 277.52,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-15T17:10:09.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 273.77,
//     returnAirTemperature: 273.65,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 271.28,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-16T09:10:09.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 276.65,
//     returnAirTemperature: 277.96,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 279.77,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
//   {
//     date: '2022-12-21T05:07:19.000Z',
//     temperatureSetpoint: '',
//     supplyAirTemperature: 282.02,
//     returnAirTemperature: 282.02,
//     usda1Temperature: '',
//     usda2Temperature: '',
//     usda3Temperature: '',
//     ambientTemperature: 284.15,
//     humiditySetpoint: '',
//     humidity: '',
//     o2Setpoint: '',
//     o2: '',
//     co2Setpoint: '',
//     co2: '',
//   },
// ];

// const dummyData = Array(100)
//   .fill(0)
//   .map((_) => {
//     return [
//       formatDate(new Date(), true),
//       1.5,
//       1.5,
//       2.5,
//       null,
//       null,
//       null,
//       undefined,
//       // null,
//       // null,
//       // null,
//       // null,
//       // null,
//       // null,
//     ];
//   });

function formatDate(date: Date, utc: boolean): string {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const day = utc ? date.getUTCDate() : date.getDate();
  const formatDay = day < 10 ? `0${day}` : day;
  const month = utc ? date.getUTCMonth() : date.getMonth();
  const year = utc ? date.getUTCFullYear() : date.getFullYear();
  const hour = utc ? date.getUTCHours() : date.getHours();
  const minute = utc ? date.getUTCMinutes() : date.getMinutes();
  const formatMinute = minute < 10 ? `0${minute}` : minute;

  return `${months[month]} ${formatDay}, ${year} ${hour}:${formatMinute} ${
    utc ? 'UTC' : ''
  }`;
}

enum GENERATE_TYPE {
  TEMP,
  TEMP_HUMIDITY,
  PDF_CA,
  PDF_CT,
  PDF_CA_CT,
}

const GROUP_COLUMN = {
  TEMP: {
    columnName: [
      'Temp Setpoint \n(C°)',
      'Supply Air\n(C°)',
      'Return Air\n(C°)',
      'Ambient Temp\n(C°)',
    ],
    mappedFieldName: [
      'temperatureSetpoint',
      'supplyAirTemperature',
      'returnAirTemperature',
      'ambientTemperature',
    ],
  },
  HUMIDITY: {
    columnName: ['Humidity Setpoint\n(%)', 'Humidity\n(%)'],
    mappedFieldName: ['humiditySetpoint', 'humidity'],
  },
  CA: {
    columnName: ['O2 Setpoint\n(%)', 'O2N(%)', 'CO2 Setpoint\n(%)', 'CO2\n(%)'],
    mappedFieldName: ['o2Setpoint', 'o2', 'co2Setpoint', 'co2'],
  },
  CT: {
    columnName: ['USDA1\n(C°)', 'USDA2\n(C°)', 'USDA3\n(C°)'],
    mappedFieldName: [
      'usda1Temperature',
      'usda2Temperature',
      'usda3Temperature',
    ],
  },
};

const GENERATE_TYPE_MAPPED_COLUMN = {
  [GENERATE_TYPE.TEMP]: [GROUP_COLUMN.TEMP],
  [GENERATE_TYPE.TEMP_HUMIDITY]: [GROUP_COLUMN.TEMP, GROUP_COLUMN.HUMIDITY],
  [GENERATE_TYPE.PDF_CA]: [GROUP_COLUMN.TEMP, GROUP_COLUMN.CA],
  [GENERATE_TYPE.PDF_CT]: [GROUP_COLUMN.TEMP, GROUP_COLUMN.CT],
  [GENERATE_TYPE.PDF_CA_CT]: [
    GROUP_COLUMN.TEMP,
    GROUP_COLUMN.CA,
    GROUP_COLUMN.CT,
  ],
};

function formatDataForPdfGeneration(
  generateType: GENERATE_TYPE,
  containerId,
  billId,
  Period,
  containerData,
) {
  const generateTypeField = GENERATE_TYPE_MAPPED_COLUMN[generateType].reduce(
    (accum, curr) => {
      accum.push(...curr.mappedFieldName);
      return accum;
    },
    [],
  );

  const pickedFieldData = containerData.map((i) =>
    Object.values(pick(i, ['date', ...generateTypeField])),
  );

  const pickedColumnName = [
    'Time',
    ...GENERATE_TYPE_MAPPED_COLUMN[generateType].reduce((accum, curr) => {
      accum.push(...curr.columnName);
      return accum;
    }, []),
  ];

  const formattedData = {
    date: formatDate(new Date(), true),
    info: [
      {
        label: 'Container',
        value: containerId,
      },
      {
        label: 'Bill of Lading :',
        value: billId,
      },
      {
        label: 'Commodity:',
        value: '',
      },
      {
        label: 'Period:',
        value: Period,
      },
    ],
    nameOfColumn: pickedColumnName,
    data: pickedFieldData,
  };

  return formattedData;
}

export { formatDate, formatDataForPdfGeneration, GENERATE_TYPE };
