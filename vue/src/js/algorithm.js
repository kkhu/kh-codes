
// 冒泡排序
var arr = [18,1,9,5,2,0],
	temp,
	count = 0;
console.log(arr);	
function bobbleSort(arr) {
	for (var j = 0; j < arr.length; j++) {
		for (var i = 0; i < arr.length-j; i++) {
			if (arr[i] > arr[i+1]) {
				temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
			}
			console.log(j + '-' + i + '=' + arr);
			count++;
		}
		console.log('arr='+arr)
		console.log('--------------------------')
	}
	return arr;
}
arr = bobbleSort(arr);
console.log('冒泡排序结果: '+arr);
console.log('冒泡排序次数: '+count);


// 选择性排序
var selectSortCount = 0;
function selectSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
         console.log('--------------------------')
        for (var j = i + 1; j < len; j++) {
        	selectSortCount++;
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
            // console.log(j+ '=' +arr);
            console.log(i + '-' + j + '=' + arr);
        }
        console.log( 'min: ' + minIndex + ' = ' + arr[minIndex]);
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
       console.log('arr='+arr)
    }
    return arr;
}


console.log('==========================')
console.log('选择排序');
var arr = [2,1,9,5,0,8];
console.log(arr)
var sorted = selectSort(arr);
console.log('选择排序结果： '+sorted)
console.log('执行次数： '+selectSortCount)
console.log('==========================')



var arr = [18,1,9,5,2,0];
var insertSortCount = 0;
/**
 * 插入排序 
 */
function insertSort(arr){
	var len = arr.length,
	    key,
	    j;
	for (var i = 1; i < len; i++) {
	  	key = arr[i];
	 	j = i - 1;
	 	// 前一个和后一个进行比较，如果前一个大于后一个就进行交换使大的后移
		while (j >= 0 && arr[j] > key) {
		  	  insertSortCount++;
		      arr[j + 1] = arr[j];
		       console.log('i='+i + ', j=' + j + ', arr=' + arr);
		      j--;
		}
		arr[j + 1] = key;
		console.log('arr='+arr)
	}
	return arr;
}
console.log('==========================')
console.log('初始数组： '+ arr)
var insertSorted = insertSort(arr);
console.log('插入排序结果：' + insertSorted);
console.log('执行次数： '+ insertSortCount)

var arr = [18,1,9,5,2,0];
var shellSortCount = 0;
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3) {          //动态定义间隔序列
        gap =gap*3+1;
    }
    for (gap; gap> 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j > 0 && arr[j]> temp; j-=gap) {
            	shellSortCount++;
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}
console.log('==========================')
console.log('初始数组： '+ arr)
var shellSorted = shellSort(arr);
console.log('希尔排序结果：' + shellSorted);
console.log('执行次数： '+ shellSortCount)


var arr = [18,1,9,5,2,0,100,99,18,20,29,2,21,88,0,8,1];
var quickSortCount = 0;
/**
  * 快速排序
  */
function quickSort(arr){
    if(arr.length<=1){ //如果数组中只有一位数，返回数组
        return arr;
    }
    var mNumIndex = Math.floor(arr.length/2); //取基准值的下标
    // var mNum = arr.splice([mNumIndex],1)[0];  //取基准值
    var mNum = arr.splice(mNumIndex,1)[0];  //取基准值
    var left = [];  //左边数组
    var right = []; //右边数组

    for(var i=0;i<arr.length;i++){
    	quickSortCount++;
        if(arr[i]<mNum){  //如果数组小于基准值，放在左边数组
            left.push(arr[i]);
        }else{            ///否则
            right.push(arr[i]);
        }
    }    
    console.log('------------------')
	console.log('left='+left)    
    console.log('right='+right)    
    var qdl = quickSort(left);
    var	qdr = quickSort(right);
    console.log('qdl='+qdl)    
    console.log('qdr='+qdr)  
    return qdl.concat([mNum], qdr);
    // return quickSort(left).concat([mNum],quickSort(right)); //返回左边数组+基准值+右边数组
}
console.log('==========================')
console.log('初始数组： '+ arr)
var quickSorted = quickSort(arr);
console.log('快速排序结果：'+quickSorted);
console.log('执行次数： '+ quickSortCount)

// 正常查找
var nums = [1,3,12,19,26,39,50,67,83,92,102];
var findCount = 0;
function findItem(arr, k) {
	for (var i = 0; i < arr.length; i++) {
		findCount++;
		if (arr[i] == k) {
			return i;
		}
	}
	return '-1';
}
console.log('==========================')
console.log('无算法查找结果：'+findItem(nums, 67));
console.log('无算法查找次数：'+findCount)


// 二分查找法
// 二分法用于有序的数组
// 首先从中间开始查找，如果等于则直接返回
// 如果目标元素大于中间元素则在中间元素和最大元素之查找 
// 如果目标元素小于中间元素则在最小元素和中间元素之间查找
var nums = [1,3,12,19,26,39,50,67,83,92,102];
var binarySearchCount = 0;
function binarySearch(arr, k) {
	var low = 0,
		mid = 0,
		high = arr.length - 1;
	while(low < high) {
		binarySearchCount++;
		mid = parseInt((low + high) / 2);
		if (arr[mid] == k) {
			return mid;
		} else if (k > arr[mid]) {
			low = mid + 1;
		} else if (k < arr[mid]) {
			high = mid;
		} else {
			return -1;
		}
	}
}
console.log('==========================')
console.log('二分查找结果：'+binarySearch(nums, 67));
console.log('二分查找法搜索次数：'+binarySearchCount)



