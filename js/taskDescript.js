import React from 'react';


export default class Description extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    var id= this.props.taskId;
    var obj = this.props.data[id-1];
    return (
    <div>
        <p>Task Name : <strong> {obj.name}</strong></p>
        <p>Task Description :<strong> {obj["desc"]}</strong></p>
        <p> Reminder :<strong> {obj["time"]}</strong> </p> 
    </div>);
  }
}
