const { models } = require('../storage');
const { getIdParam } = require('../routes/helpers');
const bcrypt = require("bcrypt");

async function getAll(req, res) {
    const merchants = await models.merchant.findAll({
        attributes: ['merchantId', 'name']
    });
    res.status(200).json(merchants);
};


async function getById(req, res) {
    const merchantId = getIdParam(req);
    const merchant = await models.merchant.findOne({
        attributes: ['merchantId', 'name'],
        where: {
            id: "merchantId"
        }
    });
    if (merchant) {
        res.status(200).json(merchant);
    } else {
        res.status(404).send('404 - Not found');
    }
};

async function create(req, res) {
    const { merchantId, name, address, phone_number, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    if (req.body.id) {
        res.status(400).json({ error: "id should not be provided, since it is determined automatically by the database" })
    } else {
        await models.merchant.create({
            merchantId : merchantId,
            password: hashedPassword,
            name: name,
            address: address,
            join_date: Date.now(),
            phone_number: phone_number
        });
        res.status(201).json({
            success: true
        });
    }
};


async function remove(req, res) {
    const merchantId = getIdParam(req);
    await models.merchant.destroy({
        where: {
            name: name
        }
    });
    res.status(200).json({ status: success })
};

module.exports = {
    getAll,
    getById,
    create,
    remove,
};
