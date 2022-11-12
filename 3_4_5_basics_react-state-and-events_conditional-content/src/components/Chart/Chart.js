import "./Chart.css"
import ChartBar from "./ChartBar"

const Chart = props => {

    const dataPointValues = props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)

    let key = 0

    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint => 
                    <ChartBar
                    key={key++} 
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label} />
                )
            }
        </div>
    )
}

export default Chart