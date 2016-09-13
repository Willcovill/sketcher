var sketching = false;
var gridType = 1;

$(document).ready(function(){
   $('body').prepend('<div class="container"></div>');
   $('body').prepend('<div class="top"><h3>Sketch Grid!</h3><p>Click and hold down on the grid to draw!</p>\
   <br><br><button id="clear">Clear</button>\
   <button id="resetReg">Reset Regular</button>\
   <button id="randomColor">Random Colors</button>\
   <button id="fade">Fading</button></div>');
   
   $('.top').css({
	'position': 'relative',
	'top': '5%',
	'left': '1%',
	'right': '85%',
	'text-align': 'center'
   });
   
   $('h3, p').css({
	   'display':'inline-block',
	   'margin':'0 5px'
   });
   
   createGrid();
   
   $('.container').css({
	'position': 'relative',
	'margin-top': '5%',
	'text-align': 'center'
   });
   
	$('#clear').click(function(){
		$('ul').detach();
	});
	$('#resetReg').click(function(){
		$('ul').detach();
		gridType = 1;
		createGrid();
	});
	$('#randomColor').click(function(){
		$('ul').detach();
		gridType = 2;
		createGrid();
	});
	$('#fade').click(function(){
		$('ul').detach();
		gridType = 3;
		createGrid();
	});
});

function createGrid(height, width) {
	var height = prompt("Height?", "16");
	if(height != NaN && height < 49) {
		for(var i=0; i < height; i++) {
			$('.container').append('<ul></ul>');
		};
	} else {
		var height = prompt("Please enter a number less than 49", "16");
		if(height != NaN && height < 49) {
		for(var i=0; i < height; i++) {
			$('.container').append('<ul></ul>');
		};
		}
	};
	var width = prompt("Width?", "16");
	if(width != NaN && width < 49) {
		for(var x=0; x < width; x++) {
			$('ul').append('<li></li>')
		};
	} else {
		var width = prompt("Please enter a number less than 49", "16");
		if(width != NaN && width < 49) {
		for(var i=0; i < width; i++) {
			$('ul').append('<li></li>');
		};
		}
	};
	$('ul').css({
   'margin':'1px',
   'height': '15px'
   });
   
   $('li').css({
    display: 'inline-block',
    'list-style-type': 'none',
    height: '15px',
    width: '15px',
    border: '1px black solid',
    margin: '1px',
    'box-sizing': 'border-box'
	}).mousedown( function(){
		sketching = true;
		/*.hover(function() {
		$(this).css('background-color','blue')*/
		}).hover(function(){
			if(sketching === true && gridType ===1){
				$(this).css('background-color','blue')
			} else if(sketching === true && gridType === 2){
				$(this).css('background-color', getRandomColor())
			} else if(sketching === true && gridType === 3){
				$(this).css('background-color','red');
				fadingColor(this);
		}
		});
		
	$('body').mouseup(function(){
		sketching = false;
	});
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function fadingColor (x) {
	$(x).fadeOut('slow');
};