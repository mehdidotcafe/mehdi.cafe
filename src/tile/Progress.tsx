type Props = {
  stroke: number
  side: number
  progress: number
}

const strokeColor = '#ffab00'

const Progress = ({
  stroke,
  side,
  progress,
}: Props) => {
  const circumference = side * 5
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <svg height={side} width={side}>
      <rect
        stroke={strokeColor}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        width={side}
        height={side}
      />
    </svg>
  )
}

export default Progress
