import React,{Component} from "react";
import "./style/boards.css"
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";


class boards extends Component {

  //Reorder Logic
  onDragEnd = (result) => {
    const { destination, source, draggableID, type } = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableID,
        type
      )
    );
  };

  render() {
  const {lists} = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="boards">
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <div className="List" {...provided.droppableProps} ref={provided.innerRef}>

                {lists.map((list, index) => (
                  <TrelloList 
                    listID={list.id} 
                    key={list.id} 
                    title={list.title} 
                    cards={list.cards}
                    index={index}
                  />
                ))}

                {provided.placeholder}
                <TrelloActionButton list/>
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps) (boards);