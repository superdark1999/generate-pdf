const createDocDefinition = () => {
  const columnNumber = 5;
  const nameOfColumn = [
    'Time',
    'Supply Air\n(C°)',
    'Supply Air\n(C°)',
    'Supply Air\n(C°)',
    'Supply Air\n(C°)',
  ];

  const dd = {
    content: [
      // {
      //   image: 'assets/logo.png',
      //   style: 'logo',
      // },
      {
        text: 'Reefer IoT Sensor Report\n\n',
        style: ['header', 'centerDiv'],
      },
      {
        text: 'Download Date: Mar 07, 2023 4:41 UTC',
        style: 'date',
      },
      {
        layout: 'noBorders',
        table: {
          body: [
            [{ text: 'Container' }, { text: 'CAIU5674764', bold: true }],
            [{ text: 'Bill of lading' }, { text: 'CAIU5674764', bold: true }],
            [{ text: 'Commodity' }, ''],
            [{ text: 'Period' }, 'LEHC44353900'],
          ],
        },
      },
      { text: '\n' },
      {
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: Array(columnNumber)
            .fill(0)
            .map((_) => '*'),
          body: [
            nameOfColumn.map((p) => {
              return { text: p, style: ['tableHeader', 'centerDiv'] };
            }),
          ],
        },
      },
    ],
    styles: {
      logo: {
        width: 15,
        // pageBreak: 'before',
      },
      centerDiv: {
        alignment: 'center',
      },
      header: {
        fontSize: 30,
        bold: true,
      },
      tableHeader: {
        bold: true,
        fillColor: '#F6E2EA',
      },
      date: {
        alignment: 'right',
      },
    },
  };
  return dd;
};

export default createDocDefinition;
