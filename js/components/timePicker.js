import React from 'react';
import TimePicker from 'react-time-picker';

export default function Example() {
    return (
     
            <TimePicker onChange={day => console.log(day)} />
    
    );
}