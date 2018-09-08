export const data = {
  PersonaldeInvestigacion: [['Categoría', 'Personas'], ['1', 300], ['2', 150]],
  categorizados: [
    ['Categoría', 'Investigadores'],
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
    height: 150,
    width: 450
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
    height: 300,
    width: 500,
    fontSize: 8.2,
    bar: { groupWidth: '35%' },
    isStacked: true
  }
}
