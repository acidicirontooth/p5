var slider;

function setup() {
  noCanvas();
  slider = createSlider(0, 60, 0);
}

function draw() {
  $("body").css({"transition": "all 0.8s", "-webkit-transition": "all 0.8s"});

	var d = new Date();
	var _hours = d.getHours();
	var _mins = d.getMinutes();
	var _secs = d.getSeconds();

	var hours = Math.floor(255 / 23 * _hours);
	var mins = Math.floor(255 / 59 * _mins);
	var secs = Math.floor(255 / 59 * _secs);

	if (_hours < 10){_hours = "0" + _hours};
	if (_mins < 10){_mins = "0" + _mins};
	if (_secs < 10){_secs = "0" + _secs};

	hours.toString();
	mins.toString();
	secs.toString();

  var rgb = "("+hours+","+mins+","+secs+")";

  var hex = rgb2hex(hours, mins, secs);

	$("#t").html(_hours +" : "+ _mins +" : "+ _secs);
	$("#h").html(hex +"<br/>"+ rgb)

	document.body.style.backgroundColor = "rgb"+rgb;

	$('meta[name="msapplication-navbutton-color"]').remove();
	$('meta[name="theme-color"]').remove();
	$("head").append('<meta name="msapplication-navbutton-color" content="'+hex+'">');
	$("head").append('<meta name="theme-color" content="'+hex+'">');
}

function rgb2hex(red, green, blue){
  var rgb = blue | (green << 8) | (red <<16);
  return '#' + (0x1000000 + rgb).toString(16).slice(1)
}
