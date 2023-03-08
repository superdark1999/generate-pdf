const dummyData = Array(100)
  .fill(0)
  .map((_) => {
    return [formatDate(new Date(), true), 1.5, 1.5, 2.5, null, null];
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
        label: 'Bill of Lading : ',
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
      'Supply Air\n(C°)',
      'return air\n(C°)',
      'ambient temp\n(C°)',
      'ambient temp\n(C°)',
      'ambient temp\n(C°)',
    ],
    data: containerData,
  };

  return formattedData;
}

export { formatDate, dummyData, formatDataForPdfGeneration };
