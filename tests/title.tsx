import * as React from 'react'

type Props = {
  value: string
}

export default function title({ value }: Props): JSX.Element {
  return <h1>{value}</h1>
}
