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
    ['UA', 'Investigadores', 'Becarios'],
    ['ECYT', 300, 20],
    ['IIB', 150, 5],
    ['EPYG', 110, 100],
    ['EH', 120, 10]
  ],
  opcionesDistribucionDeInvestigadoresBecariosyCpaTotalSegunUa: {
    title: 'Distribución Investigadores,becarios y CPA por Unidad Académica',
    colors: ['#1b9e77', '#d95f02', '#7570b3'],
    height: 150,
    width: 450,
    bar: { groupWidth: '35%' },
    isStacked: true
  }
}
