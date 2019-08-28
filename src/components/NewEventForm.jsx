import React, { Component } from 'react'
import "./form.css"

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
            <div className="form-container">
                <form onSubmit={(e)=>{
                    const payLoad = this.state;
                    payLoad.id = `${new Date().getTime()}`;
                    this.props.saveNewEvent(payLoad)
                    }}>

                    <input type="text" hidden name="id" value={`${new Date().getTime()}`}/>


                    <div className="input-container">
                        <label htmlFor="">Event Name:</label>
                        <input type="text" name="name" required onChange={this.changeValue}/>
                    </div>
                    
                    <div className="input-container">
                        <label htmlFor="">Event Description:</label>
                        <input type="text" name="description" required onChange={this.changeValue}/>
                    </div>
                    
                    <div className="input-container">
                        <label htmlFor="">Event Date:</label>
                        <input type="date" name="eventDate" required onChange={this.changeValue}/>
                    </div>
                    
                    <div className="input-container">
                        <label htmlFor="">Cover:</label>
                        <input type="text" name="cover" onChange={this.changeValue}/>
                    </div>
                    
                    <button id="saveBtn" type="submit">Save</button>

                </form>
            </div>
        )
    }
}

export default NewEventForm
