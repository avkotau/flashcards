import { FC } from 'react'

type Props = {
  color?: string
  size?: number
}

export const EyeIcon: FC<Props> = ({ color, size = 20 }) => {
  debugger

  return (
    <>
      <svg
        fill={'none'}
        height={size}
        viewBox={'0 0 20 20'}
        width={size}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <g id={'Layer 2'}>
          <g id={'eye'}>
            <path
              d={
                'M18.225 9.58334C17.6917 8.65834 14.7583 4.01667 9.77501 4.16667C5.16667 4.28334 2.50001 8.33334 1.77501 9.58334C1.70187 9.71002 1.66336 9.85372 1.66336 10C1.66336 10.1463 1.70187 10.29 1.77501 10.4167C2.30001 11.325 5.10834 15.8333 10.0167 15.8333H10.225C14.8333 15.7167 17.5083 11.6667 18.225 10.4167C18.2981 10.29 18.3367 10.1463 18.3367 10C18.3367 9.85372 18.2981 9.71002 18.225 9.58334ZM10.1833 14.1667C6.59167 14.25 4.25001 11.175 3.51667 10C4.35001 8.65834 6.52501 5.91667 9.85834 5.83334C13.4333 5.74167 15.7833 8.82501 16.525 10C15.6667 11.3417 13.5167 14.0833 10.1833 14.1667Z'
              }
              fill={color}
              id={'Vector'}
            />
            <path
              d={
                'M10 7.08334C9.42315 7.08334 8.85924 7.2544 8.3796 7.57489C7.89995 7.89538 7.52612 8.3509 7.30536 8.88385C7.08461 9.4168 7.02685 10.0032 7.13939 10.569C7.25193 11.1348 7.52971 11.6545 7.93762 12.0624C8.34552 12.4703 8.86522 12.7481 9.431 12.8606C9.99678 12.9732 10.5832 12.9154 11.1162 12.6947C11.6491 12.4739 12.1046 12.1001 12.4251 11.6204C12.7456 11.1408 12.9167 10.5769 12.9167 10C12.9167 9.22646 12.6094 8.4846 12.0624 7.93762C11.5154 7.39063 10.7736 7.08334 10 7.08334ZM10 11.25C9.75279 11.25 9.51111 11.1767 9.30555 11.0393C9.09999 10.902 8.93977 10.7068 8.84516 10.4784C8.75055 10.25 8.7258 9.99862 8.77403 9.75615C8.82226 9.51367 8.94131 9.29094 9.11613 9.11613C9.29094 8.94131 9.51367 8.82226 9.75615 8.77403C9.99862 8.7258 10.25 8.75055 10.4784 8.84516C10.7068 8.93977 10.902 9.09999 11.0393 9.30555C11.1767 9.51111 11.25 9.75278 11.25 10C11.25 10.3315 11.1183 10.6495 10.8839 10.8839C10.6495 11.1183 10.3315 11.25 10 11.25Z'
              }
              fill={color}
              id={'Vector_2'}
            />
          </g>
        </g>
      </svg>
    </>
  )
}
