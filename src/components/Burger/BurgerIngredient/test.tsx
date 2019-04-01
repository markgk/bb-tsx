import * as React from 'react';

interface Props {
  name: string
  age: number
}

type P = React.PropsWithChildren<Props>

const Test = (props: Props): JSX.Element => {
  return <></>
}

const T2 = (props: P) => <>{props.children}</>



export default Test


// export default class extends React.Component<Props, {}> {
//   constructor(props: Props) {
//     super(props)
//   }
// }

