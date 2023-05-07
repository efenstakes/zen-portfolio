
type ComponentProps = {
    space: number
}
const VSpacerComponent = ({ space=2 }: ComponentProps) => {
  return (
    <div style={{ marginBottom: `${space}rem` }} />
  )
}

export default VSpacerComponent
