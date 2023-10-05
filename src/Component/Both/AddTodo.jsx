import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { createTodo } from "../../Service/boardService";
import {
    useQuery,
    useMutation,
    useQueryClient,

} from 'react-query'
import PropTypes from 'prop-types';

function AddTodo({ modal, setModal, className }) {

    // const [modal, setModal] = useState(false);
    const [isComplete, setIsComplate] = useState(false);
    const [todo, setTodo] = useState("")
    const queryClient = useQueryClient()

    const toggle = () => setModal(!modal);

    const { mutate, isLoading } = useMutation(createTodo, {
        onSuccess: data => {
            setModal(false)
            setTodo("")
            setIsComplate(false)
        },
        onError: () => {
            alert("there was an error")
        },
        onSettled: () => {
            queryClient.invalidateQueries('create');
        }
    });
    const onSubmit = (data) => {
        let payload = {
            task: todo,
            isCompleted: isComplete
        }
        mutate(payload);
    };


    return (
        <div>

            <Modal
                isOpen={modal}
                modalTransition={{ timeout: 700 }}
                backdropTransition={{ timeout: 1300 }}
                toggle={toggle}
                className={className}
            >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <form action="">
                        <div>

                            <label htmlFor="">To-do</label>
                            <input type="text" value={todo} onChange={(e) => { setTodo(e.target.value) }} />
                        </div>
                        <div>
                            <div
                                className="radio-btn"
                                onClick={() => {
                                    setIsComplate(true);
                                }}
                            >
                                <input
                                    type="radio"
                                    value={isComplete}
                                    name="tripType"
                                    checked={isComplete == true}
                                />
                                True
                            </div>
                            <div
                                className="radio-btn"
                                onClick={() => {
                                    setIsComplate(false);
                                }}
                            >
                                <input
                                    type="radio"
                                    value={isComplete}
                                    name="tripType"
                                    checked={isComplete == false}
                                />
                                False
                            </div>
                        </div>
                        <Button color="secondary" onClick={() => { onSubmit() }}>
                            Add To-do
                        </Button>
                    </form>
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter> */}
            </Modal>
        </div>
    );
}

AddTodo.propTypes = {
    className: PropTypes.string,
};

export default AddTodo;