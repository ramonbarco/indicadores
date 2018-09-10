export const data = {
  PersonaldeInvestigacion: [['Categoría', 'Personas'], ['1', 300], ['2', 150]],
  categorizados: [
    ['Categoría', 'Investigadores por Categoría del Programa'],
    ['I', 300],
    ['II', 150],
    ['III', 110],
    ['IV', 23],
    ['V', 98]
  ],
  opcionescategorizados: {
    title: 'categorizados',
    colors: ['#1b9e77', '#d95f02', '#7570b3'],
    pieHole: 0.2,
    height: 200,
    width: 450,
    title: 'Categorizados 2009-2011-2014'
  },
  investigadoressegundedicacion: [
    ['Dedicacion docente', 'Investigadores según cargo'],
    ['Exclusiva', 300],
    ['Semiexclusiva', 150],
    ['Simple', 110]
  ],
  opcionesinvestigadoressegundedicacion: {
    title: 'Investigadores según cargo',
    colors: ['#1b9e77', '#d95f02', '#7570b3'],
    height: 350,
    width: 450,
    is3D: true
  },
  distribucionDeInvestigadoresBecariosyCpaTotalSegunUa: [
    ['UA', 'Investigadores', 'Becarios', 'CPA'],
    ['ECYT', 81, 38, 1],
    ['EEYN', 7, 0, 0],
    ['EH', 57, 41, 0],
    ['EPYG', 27, 25, 0],
    ['IDAES', 85, 95, 1],
    ['IECJ', 0, 0, 0],
    ['INS', 6, 13, 0],
    ['IA', 0, 0, 0],
    ['IAMK', 5, 0, 0],
    ['3IA', 33, 27, 1],
    ['IDB', 0, 1, 0],
    ['UIS', 0, 0, 0],
    ['INCALIN', 0, 0, 0],
    ['IIB INTECH', 101, 103, 23],
    ['ITS', 1, 0, 0],
    ['ICRM', 2, 1, 0],
    ['IIPC', 15, 3, 4],
    ['IT', 0, 0, 0],
    ['ITEDA', 6, 15, 4],
    ['COLOMB', 0, 0, 0]
  ],
  opcionesDistribucionDeInvestigadoresBecariosyCpaTotalSegunUa: {
    title: 'Distribución Investigadores,becarios y CPA por Unidad Académica',
    colors: ['#1b9e77', '#d95f02', '#7570b3'],
    height: 400,
    width: 600,
    fontSize: 8.5,
    bar: { groupWidth: '75%' },
    isStacked: true
  },
  InvestigadoresPorGeneroyEdad: {
    cols: [
      { id: 'Franja etaria', label: 'Franja etaria', type: 'string' },
      { id: 'Fememnino', label: 'Fememnino', type: 'number' },
      { id: 'Masculino', label: 'Masculino', type: 'number' }
    ],
    rows: [
      {
        c: [{ v: 25, f: 'menores 25' }, { v: 0, f: '0' }, { v: 0, f: '0' }]
      },
      {
        c: [{ v: 34, f: '25-34' }, { v: -9, f: '9' }, { v: 6, f: '5' }]
      },
      {
        c: [{ v: 44, f: '35-44' }, { v: -90, f: '90' }, { v: 80, f: '80' }]
      },
      {
        c: [{ v: 54, f: '45-54' }, { v: -14, f: '14' }, { v: 27, f: '27' }]
      },
      {
        c: [{ v: 64, f: '55-64' }, { v: -61, f: '61' }, { v: 59, f: '59' }]
      },
      {
        c: [
          { v: 65, f: 'mayor de 65' },
          { v: -30, f: '30' },
          { v: 50, f: '50' }
        ]
      }
    ]
  },
  opcionesInvestigadoresPorGeneroyEdad: {
    title: 'Investigadores por género y edad',
    colors: ['#1b9e77', '#d95f02', '#7570b3'],
    height: 400,
    width: 600,
    isStacked: true
  }
}
