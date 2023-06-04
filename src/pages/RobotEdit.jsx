import { Component, createRef } from 'react'
import { robotService } from '../services/robotService'

export class RobotEdit extends Component {

    state = {
        robot: null
    }

    // inputRef = createRef()

    async componentDidMount() {

        const robotId = this.props.match.params.id
        const robot = robotId ? await robotService.getById(robotId) : robotService.getEmptyRobot()
        this.setState({ robot }, () => {
            // this.inputRef.current.focus()
        })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState(prevState => ({ robot: { ...prevState.robot, [field]: value } }))
    }

    onSaveRobot = async (ev) => {
        ev.preventDefault()
        await robotService.save({ ...this.state.robot })
        this.props.history.push('/')
    }

    inputRefFunc = (elInput) => {
        elInput && elInput.focus()
    }


    render() {
        const { robot } = this.state
        if (!robot) return <div>Loading...</div>

        return (
            <section className='robot-edit'>
                <h1>{robot._id ? 'Edit' : 'Add'} Robot</h1>
                <form onSubmit={this.onSaveRobot}>
                    <label htmlFor="model">Model</label>
                    <input ref={this.inputRefFunc} value={robot.model} onChange={this.handleChange} type="text" name="model" id="model" />

                    <label htmlFor="type">Type</label>
                    <select value={robot.type} onChange={this.handleChange} name="type" id="type">
                        <option disabled value="">Choose a type</option>
                        <option value="Cooking">Cooking</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Pleasure">Pleasure</option>
                        <option value="Office">Office</option>
                    </select>

                    <button>Save</button>
                </form>
            </section>
        )
    }
}
