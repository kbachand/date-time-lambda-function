//AWS Lambda Function to write file with current date and time to S3 bucket
exports.handler = (event, context, callback) => {
    callback(null, "successful");
//AWS variable used to require aws-sdk to run this code
var AWS = require('aws-sdk');
//variable date to call later on to allow storing current and time
var date = new Date();
//s3bucket variable stores where to store file at (which specific Bucket)
var s3bucket = new AWS.S3({params: {Bucket: 'health-finch-challenge/time-date'}});
//function which will upload the file to the bucket
function uploadFileOnS3(fileName, fileData){
    var params = {
      Key: fileName,
      Body: fileData, date
    };
//calling function
    s3bucket.uploadFileOnS3(params, function (err, res) {
      //Simple if else statement to log either and error or show function has ran successfully
        if(err)
            console.log("Error in uploading file on s3 due to "+ err);
        else
            console.log("File successfully uploaded.");
    });
}
};
