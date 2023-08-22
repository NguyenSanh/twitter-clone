import { useCallback } from "react";

interface ModalProps {
    isOpen? :boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
}

/* This Modal component only accepts props of a certain type
as specified in the ModalProps component, like a contract that it needs
to abide by. */
const Modal: React.FC<ModalProps> = ({
    isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled
}) => {
    /* Modal close */
    const handleClose = useCallback(() => {
        // If modal is disabled, just return:
        if(disabled) {
            return;
        }

        // Else, call close function
        onClose();

    }, [disabled, onClose]);


    /* Modal submit */
    const handleSubmit = useCallback(() => {
        // If modal is disabled, just return:
        if(disabled) {
            return;
        }

        // Else, call onSubmit function
        onSubmit();

    }, [disabled, onSubmit]);

    /* If Modal is not open, return null: */
    if(!isOpen) {
        return null;
    }

    /* Else, we render our Modal content: */
    return ( 
        <>
            <div 
                className="
                    justify-center
                    items-center
                    flex
                    overflow-x-hidden
                    overflow-y-auto
                    fixed
                    inset-0
                    z-50
                    outline-none
                    focus:outline-none
                    bg-neutral-800
                    bg-opacity-70
                "
            >

            </div>
        </>
    );
}
 
export default Modal;