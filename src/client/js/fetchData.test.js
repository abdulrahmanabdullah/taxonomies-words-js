import { fetchData } from './fetchData';


// Use mock function to make api request with global function.
describe(' Test api call', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => {
            let promise = new Promise((res, rej) => {
                res({
                    json: () => {
                        return { dataLength: 1 }
                    }
                });
                rej({
                    json: () => {
                        return { dataLength: 0 }
                    }
                });
            })
            return promise;
        });
    })
    test('should fetchData return array and length greater than 0', async () => {
        expect.assertions(1);
        const data = await fetchData('car');
        expect(data.dataLength).toBeGreaterThan(0);
    });
})