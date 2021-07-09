
let ImageUtil = {
	  /**
	  * @desc 图片压缩
	  * @params {Object} options 
	  *{
	  *    {Object}     file     		图片文件
	  *    {Number}     compressedSize  压缩后的文件大小     （默认为1M）
	  *    {Number}     maxPixel        图片的最大分辨率值   （默认为1920）
	  *    {Number}     imageWidth      指定压缩后图片的宽度 （默认为图片本身宽度）
	  *    {Number}     imageHeight     指定压缩后图片的高度 （默认为图片本身高度）
	  *    {String}     imageMineType   图片的类型			  (默认为：image/jpeg)
	  *    {Function}   succCB   		压缩后的回调
	  *    {Function}   errorCB   		异常回调
	  * }
	  * @return {
	  *    {String} imageBase64Data     压缩之后的图片base64
	  *    {Object} imageBlobData       压缩之后的二进制对象
	  * }
	  */
	 compress(options) {

	 	if (!options) {
	 		console.log('Error: options is null');
	 		return;
	 	}
	 	
	 	if (!options.file) {
	 		console.log('Error: file is null');
	 		return;
	 	}

	 	let {
	 		canvas = document.createElement('canvas'),
	 		context = canvas.getContext('2d'),
	 		ratio = 0.9,
	 		fileSize = 0,
	 		image = new Image(),
	 		imageBase64Data,
	 		fileReader,
	 		compressedSize = 10000000,
	 		imageMineType = 'image/jpeg',
	 		maxPixel = 1920,
			pixelRatio = 1, 
			curImageMaxPixel = 0 
		} = options;


	 	fileReader = new FileReader();
		fileReader.readAsDataURL(options.file);
		fileReader.onload = (f) => {
			if (f.target.result) {
				fileSize = f.target.result.length;
				image.src = f.target.result;
			} else {
				console.log('Error: fileRader image faild');
			}
		}
		
		image.onload = () => {

			// 压缩质量比率
			if (compressedSize) {
				if (fileSize > compressedSize) {
					ratio = compressedSize / fileSize;
					ratio = ratio < 0.1 ? 0.1 : ratio;
				}
			}
			ratio = parseFloat(ratio.toFixed(2));
			
			curImageMaxPixel = Math.max(image.width, image.height);			
			// 分辨率比率
			if (curImageMaxPixel > maxPixel) {
				pixelRatio = parseFloat((maxPixel / curImageMaxPixel).toFixed(2));
			}

			canvas.width = options.imageWidth || image.width * pixelRatio;
			canvas.height = options.imageHeight || image.height * pixelRatio;
			
			context.drawImage(image, 0, 0, canvas.width, canvas.height);
			imageBase64Data = canvas.toDataURL(imageMineType, ratio);
			
			/*
			console.log('file size='+options.file.size
						+'\n file name='+options.file.name
						+'\n read file size='+fileSize
						+'\n read file size ratio='+(fileSize/options.file.size)
						+'\n ratio='+ratio
						+'\n compressd size='+imageBase64Data.length
						+'\n compressd size ratio='+(imageBase64Data.length/options.file.size)
						 );
			*/
			
			canvas.toBlob((imageBlobData) => {
				if (typeof options.succCB == 'function') {
					options.succCB({imageBase64Data, imageBlobData});
				}
			}, imageMineType, ratio);
			
		}
		image.onerror = () => {
			if (typeof options.errorCB == 'function') {
				options.errorCB();
			}
		}
	 }
}

export { ImageUtil }