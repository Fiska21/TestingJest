const httpMocks = require("node-mocks-http");

const { getById } = require("./merchants");

const mockFindOneMerchant = jest.fn();
jest.mock("../storage", () => {
  return {
    models: {
      merchant: {
        findOne: () => mockFindOneMerchant(),
      },
    },
  };
});


// TES GET ID MERCHANT RESULT RESPONSE
test("getById returns an existing merchant", async () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/api/merchants/20014",
    params: {
      merchantId: 20014,
    },
  });

  const response = httpMocks.createResponse();
  mockFindOneMerchant.mockResolvedValue({
    merchantId: 20014 ,
    name: "Toko Baru",
  });

  await getById(request, response);

  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    merchantId: 20014 ,
    name: "Toko Baru",
  });
});


// TEST 2 GET by ID merchant CASE WHEN ID MERCHANT FALSE OR DOESN'T EXIST

test("getById return 404 when a merchant id does not exist", async () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/api/merchants/2001",
    params: {
      merchantId: "200142",
    },
  });

  const response = httpMocks.createResponse();
  mockFindOneMerchant.mockResolvedValue(null);

  await getById(request, response);

  expect(response.statusCode).toEqual(404);
  expect(response._getData()).toEqual("404 - Not found");
});


// TEST 3 DELETE MERCHANT WITH PARAMS MerchantID

test("Remove return 200 when success remove merchantID", async() =>{
    const request = httpMocks.createRequest({
      method: "DELETE",
      url : "api/merchants/20011",
      params:{
        merchantId = "20011"
      }
    })

    const response = httpMocks.createResponse()
    mockFindOneMerchant.mockResolvedValue(null);
   
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({ status: success })
    
})
