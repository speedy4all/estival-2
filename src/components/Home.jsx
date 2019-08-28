import React from 'react'
import NavBar from "./NavBar"
import LogInForm from "./LogInForm"
import NewEventFrom from "./NewEventForm"

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.addNewEvent = this.addNewEvent.bind(this)
        this.showLogInForm = this.showLogInForm.bind(this)
        this.saveNewEvent = this.saveNewEvent.bind(this)
        this.searchEvent = this.searchEvent.bind(this)


        this.state = {
            showNewEventForm: false,
            eventsList: JSON.parse(localStorage.getItem("eventsList")) || [],
            showLogInForm: false,
        }
    }
    searchEvent(searchValue) {
        const originalList = JSON.parse(localStorage.getItem("eventsList"))
        const list=originalList.filter(item => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !==-1);
        this.setState({eventsList: [...list]});
    }

    addNewEvent() {
        this.setState({ showNewEventForm: true })
    }
    showLogInForm() {
        this.setState({ showLogInForm: true })
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
                <NavBar addNewEvent={this.addNewEvent} showLogInForm={this.showLogInForm} searchEvent={this.searchEvent}/>
                {this.state.showLogInForm ? <LogInForm/> : null}
                {this.state.showNewEventForm ? (
                    <div>
                        <NewEventFrom saveNewEvent={this.saveNewEvent} />

                    </div>
                ) : !this.state.showLogInForm && this.state.eventsList.map(
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
