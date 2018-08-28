$(document).ready(function() {

	 pattern1 = '', pattern2 = '';

			$('#email').blur(function() {
				if($(this).val() != '') {
					 pattern1 = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if(pattern1.test($(this).val())){
						$(this).css({'border' : '1px solid #569b44'});
            $('#valid-mail').remove();
					} else {
						if (!($('#email').next().attr('id')=='valid-mail')) {
							$(this).css({'border' : '1px solid #ff0000'});
	            $('#email').after("<span id = 'valid-mail'></span>");
							$('#valid-mail').text('Неверно введён e-mail');
						}
					}
				}
			});

      $('#phone').blur(function() {
				if($(this).val() != '') {
					 pattern2 = /^\d[\d\(\)\ -]{4,14}\d$/;
					if(pattern2.test($(this).val())){
						$(this).css({'border' : '1px solid #569b44'});
            $('#valid-phone').remove();
					} else {
						if (!($('#phone').next().attr('id')=='valid')) {
							$(this).css({'border' : '1px solid #ff0000'});
	            $('#phone').after("<span id = 'valid-phone'></span>");
							$('#valid-phone').text('Неверно введён номер телефона');
						}
					}
				}
			});

			$("#submit_btn").click(function(e) {
					if ((pattern1.test($("#email").val())) && (pattern2.test($("#phone").val()))) {
							e.preventDefault();
							$("form").submit();
							window.location.replace('https://google.com');
					}
					return false;
				});

		});
