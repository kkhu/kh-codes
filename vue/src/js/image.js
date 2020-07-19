
function doloadImage(image, imageType = 'png', imageName) {
  let imgCvs = document.createElement('canvas');
  let ctx = imgCvs.getContext('2d');
  imgCvs.width = image.width;
  imgCvs.height = image.height;
  ctx.drawImage(image, 0, 0);
  let imgData = imgCvs.toDataURL(imageType);
  imgData = imgData.replace(`image/${imageType}`, 'image/octet-stream');
  let a = document.createElement('a');
  a.href = imgData;
  a.download = imageName;
  let evt = document.createEvent('MouseEvents');
  evt.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  a.dispatchEvent(evt);
}