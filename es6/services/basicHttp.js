const Http = require('http');

export class BasicHttp {

  requset ({ host, protocol = 'http:', method = 'GET', path = '/', headers, port = 80, data = '', timeout = 2 * 1000}) {
    let options = {
      protocol: protocol,
      host: host,
      method: method,
      path: path,
      port: port,
      headers: headers,
      timeout: timeout
    };
    let promise = new Promise(function (resolve, reject) {
      const req = Http.request(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          resolve(chunk);
        });
        res.on('end', () => {
          //
        });
      });

      req.on('error', (e) => {
        reject(new Error(e));
      });

      req.write(data);
      req.end();
    });

    return promise;
  }
}