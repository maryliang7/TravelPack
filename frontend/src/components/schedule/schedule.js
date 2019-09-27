import React from 'react';
import { Link } from 'react-router-dom';

class Schedule extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getSchedule;
    }

    render() {
        

        return(
            <div> 
                
            </div>
        )
    }
}

export default Schedule;