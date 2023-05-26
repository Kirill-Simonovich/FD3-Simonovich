import * as React from 'react';

interface Props {
  text: string;
}

export default class BR2JSX extends React.PureComponent<Props> {

  render() {

    let res = this.props.text.split(new RegExp(/<.*?>/g));
    let arr = [];
    for (let i = 0; i <res.length; i++) {
      i && arr.push(<br/>)
      arr.push(res[i]);
    }
    return (
        <div style={{width: '150px', fontSize: '25px',  backgroundColor: 'cornflowerblue', textAlign: 'center'}}>{arr}</div>
    );
  }
}
