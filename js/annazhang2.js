var image = [ 'http://placekitten.com/g/300/300','http://placekitten.com/g/300/400','http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg','http://placekitten.com.s3.amazonaws.com/homepage-samples/200/139.jpg','http://placekitten.com.s3.amazonaws.com/homepage-samples/96/140.jpg','http://placekitten.com.s3.amazonaws.com/homepage-samples/200/140.jpg','http://placekitten.com/111/111','http://placekitten.com/g/450/320'];
function imggen() {
  var img = image.length
  var rand = Math.floor((Math.random() * img) + 0);
  var ranimg = image[rand];
  $('div').prepend("<img src='"+ranimg+"'></img>");
}
$('button').click(function(){
  $('div').text("");
  imggen();
  imggen();
  imggen();
  imggen();
});