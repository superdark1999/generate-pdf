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
      null,
      null,
      null,
      null,
      null,
      null,
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

function formatDataForPdfGeneration(
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
      'Temp Setpoint \n(C°)',
      'Supply Air\n(C°)',
      'return air\n(C°)',
      'USDA1\n(C°)',
      'USDA2\n(C°)',
      'USDA3\n(C°)',
      'Ambient Temp\n(C°)',
      'Humidity Setpoint\n(%)',
      'Humidity\n(%)',
      'O2 Setpoint\n(%)',
      'CO2 Setpoint\n(%)',
      'CO2\n(%)',
    ],
    data: containerData,
  };

  return formattedData;
}

export { formatDate, dummyData, formatDataForPdfGeneration };
