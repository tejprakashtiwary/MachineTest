var apiCalls = {};

apiCalls.getBusiness = (data, cb) => {
  // let formdata = new FormData();
  // formdata.append("user_id", "");
  // formdata.append("category_ids", []);
  // formdata.append("latitude", data.latitude);
  // formdata.append("longitude", data.longitude);
  // formdata.append("order_by", "");
  // formdata.append("order_mode", "");
  let formdata={"user_id": "", "category_ids": [], "latitude": data.latitude, "longitude": data.longitude, "order_by": data.order_by, "order_mode": data.order_mode}
  fetch('https://devfitser.com/Trendlie/api/get-business', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      // 'Version': 'RNI' + version,
      // 'OS': 'ios'
    },
    body: JSON.stringify(formdata)
  }).then((response) => response.json()).then((responseJson) => {
    cb(null, responseJson);
  }).catch((error) => {
    cb(error);
  });
}

module.exports = apiCalls;
