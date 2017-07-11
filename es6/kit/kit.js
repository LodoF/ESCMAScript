/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export class Kit {

  getUUID () {
    const chars = (
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      ).split('');
    let radix = 16;
    let out = '';
    let i = -1;
    while (++i < 36) {
      switch (i) {
        case 8:
        case 13:
        case 18:
        case 23:
          out += '-';
          break;
        case 19:
          out += chars[((0 | Math.random() * radix) & 0x3) | 0x8];
          break;
        default:
          out += chars[0 | Math.random() * radix];
      }
    }
    return out;
  }
}
