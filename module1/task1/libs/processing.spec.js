const {STOP_WORD} = require("./string-utils");
const {processingFunction} = require("./processing");


describe('processingFunction tests', () => {

    const mockOnContinue = jest.fn(() => {});
    const mockOnExit = jest.fn(() => {});

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should call onExit function if it is a stop word', () => {
        processingFunction(STOP_WORD, mockOnContinue, mockOnExit);

        expect(mockOnExit.mock.calls.length).toBe(1);
        expect(mockOnContinue.mock.calls.length).toBe(0);
    });

    it('should call onContinue with some parameter', () => {
        processingFunction('any valid value', mockOnContinue, mockOnExit);

        expect(mockOnExit.mock.calls.length).toBe(0);
        expect(mockOnContinue.mock.calls.length).toBe(1);
        expect(mockOnContinue.mock.calls[0][0]).not.toBeNull();
    });
});
