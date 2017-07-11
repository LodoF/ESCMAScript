const macObj = require('getmac');

export class Mac {

  getInfo () {
    let promise = new Promise(function (resolve, reject) {
      macObj.getMac(function(err, macAddress) {
        if (err)  throw err;
        resolve(macAddress);
      });
    });
    return promise;
  }
}
