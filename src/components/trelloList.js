import React, { Component } from 'react'; 

class trelloList extends Component {
    state = { tasks: [{name:"Example1" , category:"wip", bgcolor: "yellow"},
                      {name:"Example2" , category:"wip" , bgcolor:"pink"},
                      {name:"Example3" , category:"complete", bgcolor:"skyblue"}]
            }

    render () {
        var tasks = {
            wip: [],
            complete: []
        }

    this.state.tasks.forEach ((t) => {
        tasks[t.category].push(
            <div key={t.name}
                className="draggable"
                style = {{backgroundColor: t.bgcolor}}>{t.name}
            </div>
        );
    });
    return;
    }
}

export default trelloList;