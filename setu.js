let userApikey   = '689809626257d8c4b6b4c5' //请在 Telegram 内使用 @loliconApiBot 申请
let userR18      = 1 //18禁为1 非为0 2是混合
let userKeyword  = ''//搜索关键字
let userNum      = 1 //一次返回的结果数量，范围为1到10，数字的数量亦为弹框的次数
var request = {
    url:encodeURI("https://api.lolicon.app/setu?apikey=" + userApikey + "&r18=" + userR18 + "&keyword=" + userKeyword + "&num=" + userNum),
    header:{  
     "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Mobile/15E148 Safari/604.1"
    },
}
$task.fetch(request).then(response => {
	let obj = JSON.parse(response.body);
	console.log(response.body);
	if(obj.code == 0)
	{
		for(i = 0;i<obj.data.length;i++)
		{
			let pictureURL = encodeURI(obj.data[i].url);
			$notify("每日色图", "", "cuttlefish", {"open-url":pictureURL,"media-url":pictureURL}); // Success
		}
	}
	else
	{
		 $notify("Title", "Subtitle", reason.error); // Error!
	}
})
