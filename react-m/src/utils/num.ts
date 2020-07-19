export function digitUpperCase(n: number): string {
  const fraction = ['角', '分'];
  const digit = [
      '零', '壹', '贰', '叁', '肆',
      '伍', '陆', '柒', '捌', '玖'
  ];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  const head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  let s = '';
  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整');
}

export function numberWithCommas(x: number): string {
  if (x === undefined) return '';
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

export function newDate(time?: any): any {
  if (time instanceof Date) return time;
  let date = new Date();
  if (typeof time === 'string') {
    let timea: any = time.split(/[-\/:\s]/g);
    if (timea[1]) timea[1] = parseInt(String(timea[1] - 1), 10) + ''
    time = timea
  }
  if (typeof time === 'number') {
    date = new Date(time)
  }
  // if (typeof time === 'array') {
  //   date = new Date(timea[0] || '', timea[1] || '', timea[2] || '', timea[3] || '', timea[4] || '', timea[5] || '')
  // }
  return date
}
