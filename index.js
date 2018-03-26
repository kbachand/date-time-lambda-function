exports.handler = (event, context, callback) => {
    callback(null, "successful");
var AWS = require('aws-sdk');
var date = new Date();
var s3bucket = new AWS.S3({params: {Bucket: 'health-finch-challenge/time-date'}});
function uploadFileOnS3(fileName, fileData){
    var params = {
      Key: fileName,
      Body: fileData, date
    };

    s3bucket.uploadFileOnS3(params, function (err, res) {
        if(err)
            console.log("Error in uploading file on s3 due to "+ err);
        else
            console.log("File successfully uploaded.");
    });
}
};
