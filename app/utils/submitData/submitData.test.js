import submitData from './submitData';

describe('submitData', () => {

    test('submitData is defined', () => {
        expect(submitData).toBeDefined();
    });

    test('submitData called with not arguments returns an error', () => {
        const validateResponse = submitData.submit();
        expect(validateResponse).toHaveProperty('error');
    });

    test('submitData called with invalid class throws an error', () => {
        const validateResponse = submitData.submit({
            class: 'thisClassDoesNotExist',
            values: {}
        });
        expect(validateResponse).toHaveProperty('error');
    });

    test('submitData called for a deposit with no account throws an error', () => {
        const validateResponse = submitData.submit({
            class: 'Deposit',
            values: {}
        });
        expect(validateResponse).toHaveProperty('error');
    });

    test('submitData creates a new Deposit if have account set', () => {
        const newDeposit = submitData.submit({
            class: 'Deposit',
            values: {
                account: '123'
            }
        });
        expect(newDeposit).toHaveProperty('set');
        expect(newDeposit.account).toEqual('123');
});

})
