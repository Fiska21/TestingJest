
const axios = require("axios")
const getMerchant = require("./Merchant.js")

jest.mock("axios")

test("getMerchantId", async () => {

    axios.get.mockResolvedValue({
        data: {
            "merchantId":"20011",
            "password":"123",
            "name":"fiska",
            "address":"bekasi",
            "join_date":"2022-01-20T14:50:19.000Z",
            "phone_number":"081123"
        },
    })

    const Merchant = await getMerchant();
    expect(Merchant).toEqual("20011")
})
