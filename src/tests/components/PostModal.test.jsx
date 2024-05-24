import { render } from "@testing-library/react"
import { PostModal } from "../../components/PostModal"

describe('Pruebas en <PostModal />', () => {

    test('should match the snapshot', () => {

        const mockHandleClose = jest.fn();
        const mockHandleConfirmAction = jest.fn();

        const postModalProps = {
            open: true,
            handleClose: mockHandleClose,
            action: 'Edit Post',
            postData: { userId: 1, id: 1, title: 'Testing Title', body: 'Testing Body' },
            handleConfirmAction: mockHandleConfirmAction,
            isDeleteSelected: false,
        };

        render(<PostModal {...postModalProps}/>)

    })


})