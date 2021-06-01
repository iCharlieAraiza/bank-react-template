import React, {useState} from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import _ from "lodash"
import { Column, ColumnTitle, KanbasWrap, DroppableColumn, Card, InputWrapp, Button, Container } from './KanbasElements';
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

    const [text, setText] = useState("");

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

    const handleDragEnd = ({destination, source})=>{
        if(!destination){
            return;
        }

        if( destination.index === source.index && destination.draggableId === source.droppableId ){
            return;
        }

        const itemCopy = {...state[source.droppableId].items[source.index]};
        setState(prev=>{
            prev = {...prev}

            // Remove of previus items
            prev[source.droppableId].items.splice(source.index, 1);

            // Adding to new items array location 
            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy );

            return prev;
        });

    }

    const addItem = () => {
        setState(prev => {
          return {
            ...prev,
            todo: {
              title: "Todo",
              items: [
                {
                  id: v4(),
                  name: text
                },
                ...prev.todo.items
              ]
            }
          }
        })
    
        setText("")
      }


    return (
        <Container>
                <InputWrapp>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value) } />
                    <Button onClick={addItem}>Add</Button>
                </InputWrapp>
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
        </Container>
    )
}

export default Kanbas
