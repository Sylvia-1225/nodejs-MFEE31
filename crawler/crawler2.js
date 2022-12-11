// 1. 安裝 npm i axios
// 2. 引用 require
// 3. 去讀官方文件
const axios = require('axios');

// http://54.71.133.152:3000/stocks?stockNo=2618&date=202211
(async function () {
    const response = await axios.get('http://54.71.133.152:3000/stocks?stockNo=2618&date=202211')
    .then((response) => {
        console.log(response.data);
    })
    .catch((e) => {
        console.error(e);
    });
})();


// var asyncBtn = document.getElementById('asyncBtn');
// asyncBtn.addEventListener('click', async function () {
//   responseDom.innerText = '開始 axios';
//   // http://54.71.133.152:3000/
//   let response = await axios.get('http://54.71.133.152:3000/');
//   responseDom.innerText = `來自 await axios 的結果 ${response.data}`;
// });
