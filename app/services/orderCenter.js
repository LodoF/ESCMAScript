import { Http } from 'http';
import {Buffer} from 'buffer';

export class OrderCenter {

  constructor (host, username, password) {
    this.host = host;
    this.username = username;
    this.password = password;
  }

  submitOrder ({protocol = 'http:', method = 'GET', path = '/', headers = {'Content-Type': 'application/json'}, timeout = 2 * 1000}) {
    let options = {
      protocol: protocol,
      host: this.host,
      method: method,
      path: path,
      headers: headers,
      auth: new Buffer(this.username + ':' + this.password).toString('base64'),
      timeout: timeout
    };
    Http.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {

      });
      res.on('end', () => {

      });
    });
  }
}