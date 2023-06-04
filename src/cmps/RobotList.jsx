import { Component } from 'react'
import { RobotPreview } from './RobotPreview'

export function RobotList({ robots, onRemoveRobot, history }) {
    console.log('history:', history);
    
    return (
        <div className='robot-list simple-cards-grid'>
            {robots.map(robot => <RobotPreview key={robot._id} robot={robot} onRemoveRobot={onRemoveRobot}  />)}
        </div>
    )
}
