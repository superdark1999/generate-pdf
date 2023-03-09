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
    value: '',
  },
  HUMIDITY: {
    columnName: ['Humidity Setpoint\n(%)', 'Humidity\n(%)'],
    value: '',
  },
  CA: {
    columnName: ['O2 Setpoint\n(%)', 'O2N(%)', 'CO2 Setpoint\n(%)', 'CO2\n(%)'],
    value: '',
  },
  CT: { columnName: ['USDA1\n(C°)', 'USDA2\n(C°)', 'USDA3\n(C°)'], value: '' },
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

console.log(GENERATE_TYPE_MAPPED_COLUMN[GENERATE_TYPE.TEMP_HUMIDITY]);

const temp = GENERATE_TYPE_MAPPED_COLUMN[GENERATE_TYPE.TEMP_HUMIDITY].reduce(
  (accum, curr) => {
    accum.push(...curr.columnName);
    return accum;
  },
  [],
);

console.log('temp', temp);

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
    nameOfColumn: GENERATE_TYPE_MAPPED_COLUMN[generateType].reduce(
      (accum, curr) => {
        accum.push(...curr.columnName);
        return accum;
      },
      [],
    ),
    data: containerData,
  };

  return formattedData;
}

export { formatDate, dummyData, formatDataForPdfGeneration, GENERATE_TYPE };
