// import NetInfo from "@react-native-community/netinfo";

var apiCalls = {};

apiCalls.getBusiness = (data, cb) => {
  // let formdata = new FormData();
  // formdata.append("user_id", "");
  // formdata.append("category_ids", []);
  // formdata.append("latitude", data.latitude);
  // formdata.append("longitude", data.longitude);
  // formdata.append("order_by", data.order_by);
  // formdata.append("order_mode", data.order_mode);
  let formdata={"user_id": "", "category_ids": [], "latitude": data.latitude, "longitude": data.longitude, "order_by": data.order_by, "order_mode": data.order_mode}
  fetch('https://devfitser.com/Trendlie/api/get-business', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      // 'Version': 'RNI' + version,
      // 'OS': 'ios'
    },
    body: JSON.stringify(formdata)
  }).then((response) => response.json()).then((responseJson) => {
    cb(null, responseJson);
  }).catch((error) => {
    cb(error);
  });

  // NetInfo.fetch().then(state => {
  //   if (state.isConnected) {
  //     console.log('connected');
  //     fetch('https://devfitser.com/Trendlie/api/get-business', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'multipart/form-data',
  //         // 'Version': 'RNA' + version,
  //         // 'OS': 'android'
  //       },
  //       body: formdata
  //     }).then((response) => response.json()).then((responseJson) => {
  //       cb(null, responseJson)
  //     }).catch((error) => {
  //       cb(error);
  //     });
  //   } else {
  //     cb('offline')
  //     console.log('You are Offline. Please check your connection.');
  //   }
  // });
}

module.exports = apiCalls;
