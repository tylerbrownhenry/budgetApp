export default {
    translation: {
        defaultName: "New {{label}}",
        info: {
            data: {
                none: {
                    saved: "No saved {items}"
                }
            }
        },
        error: {
            api: {
                failed: "Error fetching data [{{details}}]"
            },
            constructor: {
                missingArguments: "{{functionName}} requires [{{required}}]",
                useSet: "Use 'set' method when editing property values"
            },
            function: {
                missingArguments: "{{functionName}} called missing required argument(s) [{{required}}]"
            },
            class: {
                missing: "Class '{{class}}' does not exist"
            },
            array: {
                isNot: "Provided '{{item}}' is/are not an Array(s)"
            },
            file: {
                validateData: {
                    name: "Validate Data"
                },
                submitData: {
                    name: "Submit Data"
                },
                generateDefaults: {
                    name: "Generate Defaults"
                }
            }
        },
        example: {
            dashboard: [{
                    name: "Family Account"
                },
                {
                    name: "My Account"
                }
            ],
            state: [{
                    name: "Family Bills"
                },
                {
                    name: "My Bills"
                }
            ],
            deposit: [{
                name: "Bank of America Desposit"
            }],
            payment: [{
                name: "Chase Credit Card Payment"
            }],
            bill: [{
                    name: "High Balance Credit Card"
                },
                {
                    name: "Credit Card with Low Balance but more periods"
                },
                {
                    name: "Credit Card with Low Balance but even more periods"
                },
                {
                    name: "Credit Card with Low Balance but high apr"
                },
                {
                    name: "Credit Card with 2 payments"
                },
                {
                    name: "Credit Card with last payment"
                },
                {
                    name: "Credit Card with type 1 payment and no payment set"
                },
                {
                    name: "Last Credit Card"
                }
            ],
            account: [{
                    name: "Chase Credit Card"
                },
                {
                    name: "Bank of America Checking"
                }
            ]
        },
        class: {
            dashboard: {
                    name: "Dashboard"
                },
                state: {
                    name: "State"
                },
                deposit: {
                    name: "Deposit"
                },
                account: {
                    name: "Account"
                },
                payment: {
                    name: "Payment"
                },
                bill: {
                    name: "Bill"
                }
        },
        parameter: {
            option: {
                name: "option"
            },
            settings: {
                name: "settings"
            },
            class: {
                name: "class"
            },
            required: {
                name: "required"
            },
            values: {
                name: "values"
            },
            key: {
                name: "key"
            }
        }
    }
}