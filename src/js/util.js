

export function getUrlParams(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
        rs = window.location.search.substr(1).match(reg);
    return rs ? decodeURI(rs[2]) : null;
}

export function dateFormat(date,fmt) {
    if(!date) {
        date = new Date();
    }
        
    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        month = month < 10 ? ('0'+month) : month,
        d = date.getDate(),
        d = d < 10 ? ('0'+d) : d,
        hour = date.getHours(),
        hour = hour < 10 ? ('0'+hour) : hour,
        minutes = date.getMinutes(),
        minutes = minutes < 10 ? ('0'+minutes) : minutes,
        seconds = date.getSeconds(),
        seconds = seconds < 10 ? ('0'+seconds) : seconds,
        milliseconds = date.getMilliseconds();

        fmt = fmt ? fmt : 'yyyy-MM-dd';
        
        if (/yyyy/.test(fmt)) {
            fmt = fmt.replace('yyyy', year);
        }  
        if (/MM/.test(fmt)) {
            fmt = fmt.replace('MM', month);
        } 
        if (/dd/.test(fmt)) {
            fmt = fmt.replace('dd',d);
        } 
        if (/hh/.test(fmt)) {
            fmt = fmt.replace('hh', hour);
        } 
        if (/mm/.test(fmt)) {
            fmt = fmt.replace('mm', minutes);
        } 
        if (/ss/.test(fmt)) {
            fmt = fmt.replace('ss',seconds);
        } 
        if (/SS/.test(fmt)) {
            fmt = fmt.replace('SS',milliseconds);
        }  
                
    return fmt; 
}