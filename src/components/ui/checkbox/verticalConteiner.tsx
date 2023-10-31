import { CSSProperties, FC, ReactNode } from 'react'

const styles: CSSProperties = {
  border: '1px solid #ccc',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  height: 'min-content',
  padding: '50px',
}

type VerticalContainerProps = {
  children: ReactNode
}

export const VerticalContainer: FC<VerticalContainerProps> = ({ children }) => {
  return <div style={styles}>{children}</div>
}
