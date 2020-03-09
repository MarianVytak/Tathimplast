$(document).ready(function() {

	$("#s1-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail-1.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".form").trigger("reset");
		});
		return false;
	});

	$("#s8-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail-2.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".form").trigger("reset");
		});
		return false;
	});
	
});