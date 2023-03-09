import _ from 'lodash';

const inputData = [
  {
    date: '2022-12-14T03:21:29.000Z',
    temperatureSetpoint: '',
    supplyAirTemperature: 274.65,
    returnAirTemperature: 274.52,
    usda1Temperature: '',
    usda2Temperature: '',
    usda3Temperature: '',
    ambientTemperature: 275.65,
    humiditySetpoint: '',
    humidity: '',
    o2Setpoint: '',
    o2: '',
    co2Setpoint: '',
    co2: '',
  },
  {
    date: '2022-12-14T03:31:36.000Z',
    temperatureSetpoint: '',
    supplyAirTemperature: 273.15,
    returnAirTemperature: 273.96,
    usda1Temperature: '',
    usda2Temperature: '',
    usda3Temperature: '',
    ambientTemperature: 276.15,
    humiditySetpoint: '',
    humidity: '',
    o2Setpoint: '',
    o2: '',
    co2Setpoint: '',
    co2: '',
  },
];

const dummyData = Array(100)
  .fill(0)
  .map((_) => {
    return [
      formatDate(new Date(), true),
      1.5,
      1.5,
      2.5,
      null,
      null,
      null,
      // null,
      // null,
      // null,
      // null,
      // null,
      // null,
    ];
  });

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
    nameOfColumn: [
      'Time',
      ...GENERATE_TYPE_MAPPED_COLUMN[generateType].reduce((accum, curr) => {
        accum.push(...curr.columnName);
        return accum;
      }, []),
    ],
    data: containerData,
  };

  return formattedData;
}

export { formatDate, dummyData, formatDataForPdfGeneration, GENERATE_TYPE };
