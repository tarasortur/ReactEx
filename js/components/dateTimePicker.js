import React from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Moment from "moment";

export default function Example() {
    var CurrentDate = Moment();
  return (
      <div> <Datetime dateFormat="YYYY-MM-DD" timeFormat={true} closeOnSelect={true} defaultValue={CurrentDate}/></div>    
  );
}