import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './../style/custom-button.css'
import { AiFillDelete } from 'react-icons/ai'

const MyModal = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
      <>
          
      <button  onClick={handleShow} className="text-muted my-custom-button">
      <AiFillDelete />  Remove
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button  onClick={handleClose} className="text-muted my-custom-button" style={{width:'100px' , backgroundColor:'rgba(255, 0, 0, 0.81)'}}>
            Close
          </button>
          <button className="text-muted my-custom-button" style={{width:'200px'}} onClick={handleClose}>
            Remove
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MyModal