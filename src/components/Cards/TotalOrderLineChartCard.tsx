// /components/InfoBox/index.tsx requires this component

interface ITotalOrderLineChartCard {
  title: string
  value: number
  isLoading: boolean
  percentage: number
  count: number
  graph: object
  trajectory: boolean
  url: string
}

const TotalOrderLineChartCard = (props: ITotalOrderLineChartCard) => {
  return <div>{props.url}</div>
}

export default TotalOrderLineChartCard
