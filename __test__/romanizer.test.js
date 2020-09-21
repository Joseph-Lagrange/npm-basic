import {convert} from "../src/romanizer";

describe('transform', () => {
    it('should return X when input 10', () => {
        const result = convert(10);
        expect(result).toEqual('X');
    });
});