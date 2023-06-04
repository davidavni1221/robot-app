import { Component } from 'react'

export class RobotFilter extends Component {

    state = {
        model: '',
        type: '',
        minBatteryStatus: '',
        maxBatteryStatus: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }


    render() {
        const { model, type, minBatteryStatus, maxBatteryStatus } = this.state
        return (
            <form className='robot-filter'>
                <section>
                    <label htmlFor="model">Model</label>
                    <input value={model} onChange={this.handleChange} type="text" name="model" id="model" />
                </section>
                <section>
                    <label htmlFor="type">Type</label>
                    <input value={type} onChange={this.handleChange} type="text" name="type" id="type" />
                </section>
                <section>
                    <label htmlFor="minBatteryStatus">minBatteryStatus</label>
                    <input value={minBatteryStatus} onChange={this.handleChange} type="number" name="minBatteryStatus" id="minBatteryStatus" />
                </section>
                <section>
                    <label htmlFor="maxBatteryStatus">maxBatteryStatus</label>
                    <input value={maxBatteryStatus} onChange={this.handleChange} type="number" name="maxBatteryStatus" id="maxBatteryStatus" />
                </section>
            </form>
        )
    }
}
