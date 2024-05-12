const ClickData = require('../models/clickDataModel');

exports.saveClickData = async (data, req) => {
  try {
    const headers = extractHeaders(req);
    const clickData = new ClickData({
      tag: data.tag,
      text: data.text,
      id: data.id,
      class: data.class,
      headers: headers,
      localStorageData: data.localStorageData,
    });

    const savedData = await clickData.save();
    console.log('Data saved to MongoDB:', savedData);
  } catch (error) {
    console.error('Failed to insert data into MongoDB:', error);
  }
};

const extractHeaders = (req) => {
  return {
    host: req.headers.host || '',
    connection: req.headers.connection || '',
    Browser: req.headers['sec-ch-ua'] || '',
    OperatingSystem: req.headers['sec-ch-ua-platform'] || '',
    userAgent: req.headers['user-agent'] || '',
    origin: req.headers.origin || '',
    fetchSite: req.headers['sec-fetch-site'] || '',
    fetchMode: req.headers['sec-fetch-mode'] || '',
    fetchDest: req.headers['sec-fetch-dest'] || '',
    referer: req.headers.referer || ''
  };
};