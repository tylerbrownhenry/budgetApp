# budgetApp
Web app for tracking what debt to pay off first



# Features

Add Credit Card or Bank Account
    - Type
    - Apr
    - Balance


Add Pay Deposit Schedules
    - Name
    - Amount
        - Percentage or Leftover
    - Account
        - Bank 
        - Credit Card
        - One time deposit
    - Schedule
        - Monthly
            - Date
            - Day of month
        - Twice a month
            - First
                - Date
                - Day of month
            - Second Date
                - Date
                - Day of month
        - Every other week
            - Next Pay Date
                - Next Friday
        - Every week
            - Friday
        - Daily

Add Bills
    - Type
        - APR
            - Balance
            - Min Payment
        - Fixed
            - Payment
            - Range
    - Due Date
    - Depends?
        - Bill

Payment
    - Bill
    - Account


1. Add Banks and Credit Card Accounts
2. Add Your Deposit Schedules
3. Add Your Bills
4. Add what accounts you pay your bills from

Input:

Payment Accounts
    Bank 1 - $3000
    Bank 2 - $4000
    Credit Card 1 - $1500 (Debt), 7% APR, $80 Min Payment, Type 1
    Credit Card 2 - $800 (Debt), 20% APR, $45 Min Payment, Type 1

Deposits
    Bank 1 - $1000
    Bank 2 - $1067

Bills
    Power Bill - ($120 Max), Paid by Credit Card 1
    Credit Card 1 - ($120 Max), Depends on Power Bill, Paid by Bank 1
    Credit Card 1 - ($80 Max), Paid by Bank 1
    Rent Paid - ($800), Paid by Bank 1
    Allotted Spending Money - ($567), Paid by Bank 2
    Credit Card 2 - ($50), Paid by Bank 2

Output
    Summary
        Bank 1 Has $0 Available Cash LeftOver
        Bank 2 Has $450 LeftOver

    Avalanche 
        Ideally for the next X months you should put $450 toward Credit Card X.
        Then for X months put $450 toward Credit Card X until X.
        Then for X months put $450 + NEW MONEY toward Credit Card X until X.

    SnowBall
        ...

    Projection
        You will be debt free in X months.

    Out of the box
        If you can do a balance transfer of Credit Card X at 0% for 12 months, and you pay and extra $300/month,
        you can save $200.



Add 


VS code add beauitfy

{
  "key": "cmd+b",
  "command": "HookyQR.beautify",
  "when": "editorFocus"
}