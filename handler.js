'use strict';
const endpoint = 'ancsug2hfvwt3-ats.iot.ap-northeast-1.amazonaws.com';
const topic = "get_still"
const aws = require('aws-sdk');
const region = 'ap-northeast-1';

var iotdata = new aws.IotData({
    endpoint: endpoint,
    region: region
});
var params = {
    topic: topic,
    payload: '{"action":"refresh"}',
    qos: 0
};

module.exports.hello = async (event, context) => {
    var rawMessage = JSON.parse(event.body);
    var rawMessageBody = rawMessage.webhook_event.body;
    console.log('rawMessageBody:', rawMessageBody);

    var picturePattern = /^.*カメラ.*$/m;
    var matchResult = rawMessageBody.match(picturePattern);

    if(matchResult != null){
        var publishResult = await iotdata.publish(params).promise();
        console.log('publishResult:', publishResult);
    }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};
