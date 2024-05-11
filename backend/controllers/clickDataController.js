const ClickData = require('../models/clickDataModel');

exports.saveClickData = async (data) => {
  try {
    const savedData = await ClickData.create(data);
    console.log('Data saved to MongoDB:', savedData);
  } catch (error) {
    console.error('Failed to insert data into MongoDB:', error);
  }
};