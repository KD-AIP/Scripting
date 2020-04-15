var obj = JSON.parse($response.body);

obj["data"]["package"]["id"] = 107;
obj["data"]["package"]["code"] = "KPLUS";
obj["data"]["package"]["source"] = "KPLUS";
obj["data"]["package"]["name"] = "GÓI K+";
obj["data"]["package"]["type"] = "KPLUS";
obj["data"]["package"]["brief"] = "";
$done({body: JSON.stringify(obj)});