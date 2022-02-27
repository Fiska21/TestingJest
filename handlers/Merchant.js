const axios = require("axios");

async function getMerchant() {

    const response = await axios.get("http://localhost:4006/merchant");
    return response.data.merchantId

}

module.exports = getMerchant
// getActivity().then(console.log) // remove before running test