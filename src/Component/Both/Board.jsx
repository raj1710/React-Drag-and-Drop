import React, { useState, useEffect, createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTodoData, createTodo } from "../../Service/boardService";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

import AddTodo from "./AddTodo";
import styled from "@emotion/styled";
import KanbanData from "./KanbanData";
import Kanban from "./Kanban";


const TodoDataContext = createContext();
let columnsFromBackend2


export default function Board() {
    const [modal, setModal] = useState(false);
    const [todo, setTodo] = useState("rajsavaliya")
    const queryClient = useQueryClient();

    const TaskColumnStyles = styled.li`
    display: flex;
    align-items: center;
    border: solid 2px #d0d0d0;
    border-radius: 0.2em;
    padding: 0.5em 0.8em 0.5em 0.5em;
    margin-bottom: 1em;
  `;

    // Queries
    const { data, error, isLoading } = useQuery("todoData", getTodoData);

    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;



    columnsFromBackend2 = {
        [uuidv4()]: {
            title: "To-do",
            items: data,
        },
        [uuidv4()]: {
            title: "In Progress",
            items: [],
        },
        [uuidv4()]: {
            title: "Done",
            items: [],
        },
    };

    return (
        <div>
            <TodoDataContext.Provider value={data}>
                <div>
                    <ul>
                        {data.map((todo) => (
                            <TaskColumnStyles>
                                <li key={todo._id}>{todo.task}</li>
                            </TaskColumnStyles>
                        ))}

                        <Kanban value={data} />
                    </ul>
                </div>
            </TodoDataContext.Provider>

            <button
                onClick={() => {
                    setModal(true);

                }}
            >
                Add Todo
            </button>

            <AddTodo modal={modal} setModal={setModal} />
        </div >
    );
};



export { columnsFromBackend2 };
export { TodoDataContext };
// export default Board;
