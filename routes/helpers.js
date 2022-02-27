
function getIdParam(req) {
    const merchantId = req.params.merchantId;
    if (/^\d+$/.test(merchantId)) {
        return Number.parseInt(merchantId, 100);
    }
    throw new TypeError(`Invalid ':id' param: "${merchantId}"`);
}

function checkError(handler) {
    return function (req, res, next) {
        handler(req, res).catch(next)
    };
}

module.exports = {getIdParam,  checkError}
