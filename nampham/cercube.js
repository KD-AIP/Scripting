const body = $response.body
const obj = JSON.parse(body);
obj["subscription"] = {
	"internalTransactionId": "R1JMPPQTTFV2ACX",
	"externalTransactionId": "pi_1GYpcsKPeH3mKXAmRXYQEvVI",
	"active": true,
	"startDate": "2020-04-17T08:32:42.000Z",
	"endDate": "2022-05-17T08:32:42.000Z"
}
$done({body: JSON.stringify(obj)});