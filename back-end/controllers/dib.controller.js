const Dib = require("../models/dib");
const DibService = require("../services/dib.service");

exports.getUserDibStoreList = async (req, res) => {
  try {
    const dibList = await DibService.findUserDibList(req);
    res.status(200).send(dibList);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.getDibsListByStore = async (req, res) => {
  try {
    const dibsList = await Dib.findAll({
      where: { storeId: req.params.storeId },
    });
    res.status(200).send({
      status: 200,
      data: dibsList,
    });
  } catch (err) {
    res.status(400).send({
      status: 400,
      message: err.message,
    });
  }
};

exports.postAddDib = async (req, res) => {
  try {
    await DibService.addDib(req, req.body);
    res.status(201).send({
      message: "Success",
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};
exports.deleteDibCancel = async (req, res) => {
  try {
    await DibService.deleteDib(req, req.params);
    res.status(200).send({
      message: "Delete",
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};
