function imgchange() {

var myImages1 = new Array();
    myImages1[1] = "img/who/1.jpg";
    myImages1[2] = "img/who/2.jpg";
    myImages1[3] = "img/who/3.jpg";
    myImages1[4] = "img/who/4.jpg";
    myImages1[5] = "img/who/5.jpg";
    myImages1[6] = "img/who/6.jpg";
  var rnd = Math.floor(Math.random() * myImages1.length);
    if (rnd == 0) {
            rnd = 1;
    }

  document.getElementById("gen-img").src = myImages1[rnd];

}
