import { Component } from 'react'
import { Link } from 'react-router-dom'
import { NiceButton } from '../cmps/NiceButton'
import { RobotFilter } from '../cmps/RobotFilter'
import { RobotList } from '../cmps/RobotList'
import { robotService } from '../services/robotService'
import { RobotDetails } from './RobotDetails'

export class RobotApp extends Component {

    state = {
        robots: null,
        filterBy: null
    }

    componentDidMount() {
        this.loadRobots()
    }

    async loadRobots() {
        try {
            const robots = await robotService.query(this.state.filterBy)
            this.setState({ robots })
        } catch (err) {
            console.log('err:', err)
        }
    }

    onSelectRobotId = (robotId) => {
        this.setState({ selectedRobotId: robotId })
    }

    onRemoveRobot = async (robotId) => {
        await robotService.remove(robotId)
        this.loadRobots()
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadRobots)
    }

    render() {
        const { robots, selectedRobotId } = this.state
        if (!robots) return <div>Loading...</div>
        const TextCmp = () => <span>Nice Button</span>
        const Icon = () => '🍇'

        return (
            <div className='robot-app'>
                <RobotFilter onChangeFilter={this.onChangeFilter} />
                <Link to="/robot/edit">Add Robot</Link>
                <RobotList history={this.props.history} onRemoveRobot={this.onRemoveRobot} robots={robots} />
                <NiceButton Icon={Icon} className="nice-button" onClick={() => console.log('nice button clicked')}>
                    <TextCmp />
                </NiceButton>
            </div>
        )
    }
}
