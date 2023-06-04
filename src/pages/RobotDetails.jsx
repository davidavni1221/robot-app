import { Component } from 'react'
import { Link } from 'react-router-dom'
import { robotService } from '../services/robotService'

export class RobotDetails extends Component {

    state = {
        robot: null
    }

    async componentDidMount() {
        console.log('mount');
        this.loadRobot()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadRobot()
        }
    }


    async loadRobot() {
        const robotId = this.props.match.params.id
        const robot = await robotService.getById(robotId)
        this.setState({ robot })
    }

    onBack = () => {
        this.props.history.push('/')
        // this.props.history.goBack()
    }

    render() {

        console.log('render');
        const { robot } = this.state
        if (!robot) return <div>Loading...</div>
        return (
            <div className='robot-details'>
                <section>
                    <h3>Model: {robot.model}</h3>
                </section>
                <section>
                    <h3>Type: {robot.type}</h3>
                </section>
                <section>
                    <h3>Battery Status: {robot.batteryStatus}</h3>
                </section>
                <img src={`https://robohash.org/${robot._id}`} alt="" />
                <button onClick={this.onBack}>Back</button>
                <Link to='/robot/r3' >Next Robot</Link>
            </div>
        )
    }
}
