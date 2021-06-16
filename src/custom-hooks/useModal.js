import { useState } from "react";

const UseModal = () => {

    const [modal, setModal] = useState(false);
    
    const handleOpenModal = () => {
        setModal(true);
    };
    const handleCloseModal = () => {
        setModal(false);
    };

    return {modal, handleCloseModal, handleOpenModal}
}
export default UseModal;