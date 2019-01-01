var blue_team_color = "#004466"; 
var red_team_color = "#FF2105"

$(document).ready(function() {
	$('.word-box').bind('click', function() {
	  checkBox(this)
	});
})

function checkBox(el) {
	var class_list = $(el).attr('class').split(/\s+/)
	if (class_list.indexOf("blue") > -1) {
		$(el).removeClass("blue").addClass("blue-revealed");
		var blue_count = parseInt($('#blue-count').text())
		$('#blue-count').text(blue_count-1)
		var remaining_count = parseInt($('#remaining-count').text())
		$('#remaining-count').text(remaining_count-1)
	}
	else if (class_list.indexOf("red") > -1) {
		$(el).removeClass("red").addClass("red-revealed");
		var red_count = parseInt($('#red-count').text())
		$('#red-count').text(red_count-1)
		var remaining_count = parseInt($('#remaining-count').text())
		$('#remaining-count').text(remaining_count-1)
	}
	else if (class_list.indexOf("neutral") > -1) {
		$(el).removeClass("neutral").addClass("neutral-revealed");
		var neutral_count = parseInt($('#neutral-count').text())
		$('#neutral-count').text(neutral_count-1)
		var remaining_count = parseInt($('#remaining-count').text())
		$('#remaining-count').text(remaining_count-1)
	}
	else if (class_list.indexOf("bomb") > -1) {
		$(el).removeClass("bomb").addClass("bomb-revealed");
		var remaining_count = parseInt($('#remaining-count').text())
		$('#remaining-count').text(remaining_count-1)
		alert("KABABOOM!\nClick refresh to play a new game")
	}
}