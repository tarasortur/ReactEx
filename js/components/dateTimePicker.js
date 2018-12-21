import React from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export default function DateTimePicker(props) {
  
        return (<Datetime dateFormat="YYYY-MM-DD"
            timeFormat={true}
            closeOnSelect={true}
            defaultValue={props.dateTimeDefValue}
            onChange={props.handleChange}
            isValidDate={props.validDate}
            timeConstraints={props.validTime} />
        );
    }


