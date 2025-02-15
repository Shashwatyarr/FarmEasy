const express = require("express");
const crypto = require("crypto");

const app = express();
app.use(express.json());

app.post("/verify-payment", (req, res) => {
    const { razorpay_payment_id, razorpay_signature } = req.body;

    if (razorpay_payment_id && razorpay_signature) {
        res.json({ success: true, message: "Payment verified successfully!" });
    } else {
        res.json({ success: false, message: "Payment verification failed!" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
