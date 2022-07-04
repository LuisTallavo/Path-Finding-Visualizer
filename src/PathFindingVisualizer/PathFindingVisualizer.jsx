import React, {Component} from 'react';
import Node from './Node/Node';

import './PathFindingVisualizer.css';

export default class PathFindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
        };
    }

    componentDidMount() {
        const nodes = [];
        for (let row = 0; row < 20; row++) {
            const currentRow = [];
            for (let column = 0; column < 50; column++) {
                const currentNode = {
                    column,
                    row,
                    isStart: row === 10 && column === 5, 
                    isFinish: row === 10 && column === 45, 
                };
                currentRow.push(currentNode);
            }
            nodes.push(currentRow);

        }
        this.setState({nodes});
    }

    render() {
        const {nodes} = this.state;
        console.log(nodes);
        return (
        <div className='grid'>
            {nodes.map((row, rowIdx) => {
                return (
                    <div key={rowIdx}>
                        {row.map((node, nodeIdx) => {
                            const {isStart, isFinish} = node;
                            return (
                                <Node
                                    key = {nodeIdx}
                                    isStart={isStart}
                                    isFinish ={isFinish}
                                    test={'foo'}></Node>
                            );
                        })}
                    </div>
                )
            })}
        </div>
    )}
}
