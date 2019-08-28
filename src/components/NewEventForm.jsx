import React, { Component } from 'react'

class NewEventForm extends Component {

    constructor(props) {
        super(props)
        this.changeValue = this.changeValue.bind(this)

        this.state = {
            eventName: "",
            eventDescription: "" 
        }
    }
    
    changeValue(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>{this.props.saveNewEvent(this.state)}}>
                    <label htmlFor="">Event Name:</label>
                    <input type="text" name="name" onChange={this.changeValue}/>
                    
                    <label htmlFor="">Event Description:</label>
                    <input type="text" name="description" onChange={this.changeValue}/>
                    
                    <label htmlFor="">Event Date:</label>
                    <input type="date" name="eventDate" onChange={this.changeValue}/>

                    <label htmlFor="">Cover:</label>
                    <input type="text" name="cover" onChange={this.changeValue}/>
                    
                    <button type="submit">Save</button>
            
                </form>
            </div>
        )
    }
}

export default NewEventForm
