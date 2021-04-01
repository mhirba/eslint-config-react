import React, { FunctionComponent } from 'react'

type Props = {
  background: string
  children: React.ReactNode
}

export const Container: FunctionComponent<Props> = ({ background, children }): JSX.Element => (
  <header style={{ backgroundColor: background }}>{children}</header>
)

export default Container
