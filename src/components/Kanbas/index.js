import React, {useState} from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import _ from "lodash"
import { Column, ColumnTitle, KanbasWrap, DroppableColumn, Card } from './KanbasElements';
import {v4} from "uuid"

const item = {
    id: v4(),
    name: "Clean the house"
}

const item2 = {
    id: v4(),
    name: "Finish Tello board"
}


const Kanbas = () => {

    const [state, setState] = useState({
        "todo": {
            title: "Todo",
            items: [item, item2]
        },
        "in-progress":{
            title: "In Progress",
            items: []
        },
        "done":{
            title: "Completed",
            items: []
        }
        });

    const handleDragEnd = (data)=>{
        console.log(data);
    }

    return (
        <KanbasWrap>
            <DragDropContext onDragEnd={ handleDragEnd }>
                {_.map(state, (data, key)=>{
                    return(
                        <Column key={key} >
                            <ColumnTitle>{data.title}</ColumnTitle>
                            <Droppable droppableId={key}>
                            {(provided)=>{
                                return(
                                    <DroppableColumn ref={provided.innerRef} {...provided.droppableProps} >
                                        {data.items.map((el,index)=>{
                                            return(
                                                <Draggable key={el.id} index={index} draggableId={el.id}>
                                                    {(provided)=>{      
                                                        return(
                                                            <Card ref={provided.innerRef}
                                                                  {...provided.draggableProps}
                                                                  {...provided.dragHandleProps}>

                                                                { el.name }

                                                            </Card>
                                                        )
                                                    }}
                                                </Draggable>
                                            )
                                        })}
                                        {provided.placeholder}
                                    </DroppableColumn>   
                                )}}
                            </Droppable>
                        </Column>
                    );
                })}
            </DragDropContext>
        </KanbasWrap>
    )
}

export default Kanbas
