
let MMath = {
  add(a, b) {
    a = String(a);
    b = String(b);
    let c = 0, d = 0, m = 0;
    if (a.indexOf('.') != -1) {
        c = a.split('.')[1].length;
    }
    if (b.indexOf('.') != -1) {
        d = b.split('.')[1].length;
    }
    m = Math.pow(10, Math.max(c, d));
    return (MMath.mul(a, m) + MMath.mul(b, m)) / m;
  },
  sub(a, b) {
    a = String(a);
    b = String(b);
    let c = 0, d = 0, m = 0;
    if (a.indexOf('.') != -1) {
        c = a.split('.')[1].length;
    }
    if (b.indexOf('.') != -1) {
        d = b.split('.')[1].length;
    }
    m = Math.pow(10, Math.max(c, d));
    return (MMath.mul(a, m) - MMath.mul(b, m)) / m;
  },
  mul(a, b) {
    a = String(a);
    b = String(b);
    let c = 0;
    if (a.indexOf('.') != -1) {
        c += a.split('.')[1].length;
        a = a.replace('.', '');
    }
    if (b.indexOf('.') != -1) {
        c += b.split('.')[1].length;
        b = b.replace('.', '');
    }
    return (Number(a) * Number(b)) / Math.pow(10, c);
  },
  div(a, b) {
    a = String(a);
    b = String(b);
    let c = 0, d = 0;
    if (a.indexOf('.') != -1) {
        c = a.split('.')[1].length;
        a = a.replace('.', '');
    }
    if (b.indexOf('.') != -1) {
        d = b.split('.')[1].length;
        b = b.replace('.', '');
    }
    return MMath.mul(Number(a) / Number(b), Math.pow(10, d - c));
  },
  /**
   * 交集
   * @param {Array} a 
   * @param {Array} b 
   *  [1,2,3]  [2,3,4]  -> [2,3]
   */
  intersection(a, b) {
    return a.filter((e) => {
        return b.indexOf(e) != -1;
    });
  },
  /**
   * 并集
   * @param {Array} a 
   * @param {Array} b 
   * [1,2,3]  [2,3,4]  -> [1,2,3,4]
   */
  union(a, b) {
    return [...new Set(a.concat(b))];
  },
  /**
   * 补集
   * @param {Array} a 
   * @param {Array} b 
   * [1,2,3]  [2,3,4]  -> [1]
   */
  difference(a, b) {
    return a.filter((e) => {
      return b.indexOf(e) == -1;
    })
  },
  fac(n) {
    return n <= 1 ? 1 : n * MMath.fac(n - 1);
  },
  comb(m, n) {
    return m < n ? 0 : MMath.fac(m) / (MMath.fac(n) * MMath.fac(m - n));
  },
  /**
   *高斯算法
  */
  gas(n) {
    return (1 + n) * n / 2;
  }
}
    
// export default MMath;
// exports.module = MMath;

module.exports = MMath;
