import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const PetCardDeleteModal = ({ show, petName, handleClose, handleDelete }) => {
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Are you sure you want to delete {petName}'s information?
                    </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" type="button" onClick={handleClose}>
                    No, do not delete this
                    </Button>
                <Button variant="danger" type="button" onClick={handleDelete}>
                    Yes, delete this
                    </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PetCardDeleteModal;