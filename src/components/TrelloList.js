import React from "react";
import "./style/TrelloList.css";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";

const TrelloList = ({ title, cards, listID, index }) => {
    return(
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <div className="cardtitle"
                    {...provided.draggableProps} 
                    ref={provided.innerRef} 
                    {...provided.dragHandleProps}>

                    <Droppable droppableId={String(listID)}>
                        {provided => (
                            <div 
                                {...provided.droppableProps} 
                                ref={provided.innerRef}>

                                <h3>{title}</h3>

                                {cards.map ((card, index) => (
                                    <TrelloCard 
                                        key={card.id} 
                                        index={index} 
                                        text={card.text} 
                                        id={card.id}
                                    />
                                ))}
            
                                {provided.placeholder}
                                <TrelloActionButton listID={listID} />
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    );
};

export default TrelloList;