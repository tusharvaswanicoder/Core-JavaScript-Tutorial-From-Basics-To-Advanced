// callback function is a function as value passed to a function

function a(b) {
    b();
}

function c() {
    console.log("c");
}
a(c);

const d = function () {
    console.log("d");
};
a(d);

a(function e() {
    console.log("e");
});

const pay = function (accountNumber, onPaymentSuccess, onPaymentFail) {
    console.log(`Trying to charge ${accountNumber} for payment of order...`);
    // processes the payment...
    const isPaymentSuccess = true;
    if (isPaymentSuccess) onPaymentSuccess();
    else onPaymentFail();
};

pay(
    123123,
    function () {
        // add a record of purchase and change transaction status to success
        console.log("Success");
    },
    function () {
        // change transaction status to failed
        console.log("Fail");
    }
);

pay(
    123123,
    function () {
        // add the account to the db
        console.log("Success");
    },
    function () {
        // mark account as invalid
        console.log("Fail");
    }
);
