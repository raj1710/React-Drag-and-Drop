import React from 'react'
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import "./horizontal.style.css"


const initialCharacters = [
    {
        "id": 1,
        "title": "First Image",
        "imgSrc": "https://cdn.sixt.io/cms/originals/03201357-db6f-4687-842f-1ede6eaf626a.jpg"
    },
    {
        "id": 2,
        "title": "Second Image",
        "imgSrc": "https://cdn.sixt.io/cms/originals/03201357-db6f-4687-842f-1ede6eaf626a.jpg"
    },
    {
        "id": 3,
        "title": "Third Image",
        "imgSrc": "https://cdn.sixt.io/cms/originals/03201357-db6f-4687-842f-1ede6eaf626a.jpg"
    },
    {
        "id": 4,
        "title": "Fourth Image",
        "imgSrc": "https://cdn.sixt.io/cms/originals/03201357-db6f-4687-842f-1ede6eaf626a.jpg"
    },
    {
        "id": 5,
        "title": "Fift Image",
        "imgSrc": "https://cdn.sixt.io/cms/originals/03201357-db6f-4687-842f-1ede6eaf626a.jpg"
    },
    {
        "id": 6,
        "title": "Sixt Image",
        "imgSrc": "https://cdn.sixt.io/cms/originals/03201357-db6f-4687-842f-1ede6eaf626a.jpg"
    },
    {
        "id": 7,
        "title": "Seventh Image",
        "imgSrc": "https://cdn.sixt.io/cms/originals/03201357-db6f-4687-842f-1ede6eaf626a.jpg"
    },
    {
        "id": 8,
        "title": "Eight Image",
        "imgSrc": "https://cdn.sixt.io/cms/originals/03201357-db6f-4687-842f-1ede6eaf626a.jpg"
    }
]


const HorizontalBoard = () => {
    const [data, setData] = React.useState([...initialCharacters]);


    const onDragEnd = (result) => {
        // return if item was dropped outside
        if (!result.destination) return;
        // return if the item was dropped in the same place
        if (
            result.source.droppableId === result.destination.droppableId &&
            result.source.index === result.destination.index

        )

            return;
        // get the items array
        const newItems = [...data];
        // get the draggedItems
        const draggedItem = newItems[result.source.index];
        // delete the item from source position and insert it to the destination positon
        newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, draggedItem);

        // update state
        setData(newItems);
    };
    const onHScroll = () => {
        const el = document.getElementById(`hscroll`).scrollLeft;
        // if (el > 0) {
        //   setHideButtonLeft(false);
        // } else {
        //   setHideButtonLeft(true);
        // }
        // if (el < sliderWidth) {
        //   setHideButtonRight(false);
        // } else {
        //   setHideButtonRight(true);
        // }
    };
    return (
        <div className="homepageMargin">


            <hr style={{ backgroundColor: "black" }} />
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable-1" direction="horizontal">
                    {(provided, _) => (

                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="flex-container"
                            id={`hscroll`}
                            onScroll={() => onHScroll()}
                        >

                            {data.map((item, i) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={`draggable-${item.id}`}
                                    index={i}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >



                                            <div style={{ minWidth: "300px" }}>
                                                <img
                                                    src={item.imgSrc}
                                                    alt="images"
                                                    style={{
                                                        width: "18rem",
                                                        boxShadow: snapshot.isDragging && "0 0 0.4rem"
                                                    }}
                                                />
                                                <h6>{item.title}</h6>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}

                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default HorizontalBoard