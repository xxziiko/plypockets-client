import * as React from 'react'
const ProgressIcon = (props) => (
  <svg
    width="14"
    height="30"
    viewBox="0 0 14 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Frame 1261154051">
      <g id="Group 47">
        <path
          id="Polygon 23"
          d="M7 3L13.0622 12.8077L0.937822 12.8077L7 3Z"
          fill={props.firstStep}
        />
        <path
          id="Polygon 22"
          d="M7 13.4615L13.0622 23.2692L0.937822 23.2692L7 13.4615Z"
          fill={props.secondStep}
        />
        <path
          id="Polygon 21"
          d="M7 23.9231L13.0622 33.7308L0.937822 33.7308L7 23.9231Z"
          fill={props.lastStep}
        />
      </g>
    </g>
  </svg>
)
export default ProgressIcon
