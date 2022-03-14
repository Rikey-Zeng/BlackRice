export const handleImgPath = (str) => {
  if (str) {
    //说明图片存在
    if (str.startsWith("http")) {
      // 说明使用的是抓取的图片路径
      return str;
    } else {
      return SERVER_URL + str; // 表示自己上传的图片
    }
  } else {
    // 说明没有上传图片
    return "http://www.superslide2.com/demo/images/pic1.jpg";
  }
};
