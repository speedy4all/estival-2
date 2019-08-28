import React from 'react'
import NavBar from "./NavBar"
import NewEventFrom from "./NewEventForm"

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.addNewEvent = this.addNewEvent.bind(this)
        this.saveNewEvent = this.saveNewEvent.bind(this)

        this.state = {
            showNewEventForm: false,
            eventsList: JSON.parse(localStorage.getItem("eventsList")) || []
        }
    }

    addNewEvent() {
        this.setState({ showNewEventForm: true })
    }
    saveNewEvent(newEvent) {
        let list = JSON.parse(localStorage.getItem("eventsList"))
        if (!list) {
            list = [];
        }
        list.push(newEvent);
        localStorage.setItem("eventsList", JSON.stringify(list))

        this.setState({ showNewEventForm: false, eventsList: [...list] })
    }

    render() {
        return (
            <div>
                <NavBar addNewEvent={this.addNewEvent} />
                {this.state.showNewEventForm ? (
                    <div style={{ marginTop: '200px' }}>
                        <NewEventFrom saveNewEvent={this.saveNewEvent} />

                    </div>
                ) : this.state.eventsList.map(
                    event => <div>
                                
                                <div>{event.name}</div>
                                <div>{event.description}</div>
                                
                                <div>{event.eventDate}</div>
                            </div>
                      
                    )
                }
                

            </div>
        )

    }
}

export default Home
