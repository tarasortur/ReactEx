import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import EditItem from "../components/editTask";

export default class List extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        var self = this;
        return (<Container>
            {this.props.allTasks.map(function (task, index) {
                return (<EditItem key={task.name + '_' + index} task={task}/>)
            })}
        </Container>);
    }
}

List.propTypes = {
    actions: PropTypes.object,
}
