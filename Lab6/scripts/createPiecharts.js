const charts =[]
export function createPiecharts(teachers) {
    charts.forEach(chart => chart.destroy())
    const typeOfCharts = ['course', 'age', 'gender', 'country']
    typeOfCharts.forEach(param => {
        const uniqueElements = [...new Set(teachers.map((item) => item[param]))]
        const yValues = []
        let barColors = []

        uniqueElements.forEach(element => {
            yValues.push(teachers.filter(teacher => teacher[param] === element).length)
            barColors = getColors(uniqueElements.length)
        })
        const chart = new Chart(`Chart-${param}`, {
            type: "pie",
            data: {
                labels: uniqueElements,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                title: {
                    display: true,
                    text: `${param}`
                }
            }
        })
        charts.push(chart)
    })
}


function getColors(count) {
    const colors = new Set()
    while (colors.size < count)
        colors.add(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    return [...colors]
}
