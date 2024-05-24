import { fireEvent, screen, render } from "@testing-library/react"
import { PostModal } from "../../components/PostModal"

describe('Pruebas en <PostModal />', () => {

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

    test('should match the snapshot', () => {

        render(<PostModal {...postModalProps}/>)

    });

    test('should render correctly with given props', () => {
        render(<PostModal {...postModalProps} />);
    
        expect(screen.getByLabelText(/Title/i)).toHaveValue('Testing Title');
        expect(screen.getByLabelText(/Body/i)).toHaveValue('Testing Body');
    });


})