const allowedTypes = [
    'fixed',
];
const daysOfTheWeek = [0,1,2,3,4,5,6];
const absoluteDates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
const relativeDates = [{
    label: 'First of the month',
    key: 'firstOfMonth'
},
{
    label: 'Last day of the month',
    key: 'lastOfMonth'
}];

export default {
    options: {
        schedules: 
        [{
            label: 'Monthly Deposit',
            key: 'monthly',
            options: [
                {
                    label: 'Day of month',
                    key: 'dayOfMonth',
                    options: [
                        {
                            label: 'Absolute Date',
                            key: 'absolute',
                            default: 1,
                            options: absoluteDates
                        },
                        {
                            label: 'Relative Date',
                            key: 'relative',
                            default: 'firstOfMonth',
                            options: relativeDates
                        }
                    ]
                }
            ],
        },
        {
            label: 'Twice a month',
            key: 'twiceAmonth',
            options: [
                {
                    label: 'Absolute Date',
                    key: 'absolute',
                    options: [
                        {
                            label: 'First Deposit',
                            key: 'firstDeposit',
                            default: 1,
                            options: absoluteDates
                        },
                        {
                            label: 'Second Deposit',
                            key: 'secondDeposit',
                            default: 15,
                            options: absoluteDates
                        }
                    ]
                },
                {
                    label: 'Relative Date',
                    key: 'relative',
                    options: [
                        {
                            label: 'First Deposit',
                            key: 'firstDeposit',
                            default: 'firstOfMonth',
                            options: relativeDates
                        },
                        {
                            label: 'Second Deposit',
                            key: 'secondDeposit',
                            default: 'lastOfMonth',
                            options: relativeDates
                        }
                    ]
                },
            ]
        },
        {
            label: 'Every two weeks',
            key: 'everyTwoWeek',
            options: [
                {
                    label: 'Day of The Week',
                    key: 'dayOfWeek',
                    default: 'friday',
                    options: daysOfTheWeek
                },
                {
                    label: 'Next Deposit',
                    key: 'nextDeposit',
                    default: null,
                    options: 'calendar'
                },
            ]
        },
        {
            label: 'Every week',
            key: 'weekly',
            options: [
                {
                    label: 'Day of The Week',
                    key: 'dayOfWeek',
                    default: 'friday',
                    options: daysOfTheWeek
                }
            ]
        },
        {
            label: 'Daily',
            key: 'daily'
        }]
    }
}
