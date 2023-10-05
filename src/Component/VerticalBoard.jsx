import React, { useState, useContext, useEffect, } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TodoDataContext } from "./Both/Board";

import "../Component/vertical.style.css"

const initialCharacters = [
    {
        id: 'gary',
        name: 'Gary Goodspeed',
        thumb: 'https://picsum.photos/20/30'
    },
    {
        id: 'cato',
        name: 'Little Cato',
        thumb: 'https://picsum.photos/20/30'
    },
    {
        id: 'kvn',
        name: 'KVN',
        thumb: 'https://picsum.photos/20/30'
    },
    {
        id: 'mooncake',
        name: 'Mooncake',
        thumb: 'https://picsum.photos/20/30'
    },
    {
        id: 'quinn',
        name: 'Quinn Ergon',
        thumb: 'https://picsum.photos/20/30'
    }
];

function VerticalBoard() {
    const [characters, setCharacters] = useState(initialCharacters);
    const data = useContext(TodoDataContext);
    useEffect(() => {
        if (data) {

        }

    }, [data])

    const onDragEnd = (result) => {

        if (!result.destination) return;

        const updatedCharacters = [...characters];
        const [movedCharacter] = updatedCharacters.splice(result.source.index, 1);
        updatedCharacters.splice(result.destination.index, 0, movedCharacter);
        setCharacters(updatedCharacters);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Vertical Drag and Drop</h1>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="characters">
                        {(provided) => (
                            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                {characters.map(({ id, name, thumb }, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <div className="characters-thumb">
                                                        <img src={thumb} alt={`${name} Thumb`} />
                                                    </div>
                                                    <p>
                                                        {name}
                                                    </p>
                                                </li>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}

                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            </header>

            <hr />
        </div>
    );
}
export default VerticalBoard