$(function(){	
						$(function(){
							$('nav>ul>li').mouseenter(function(){ 
								$('.submenu').stop().slideDown(200); 
							});
							$('nav>ul>li').mouseleave(function(){ 
								$('.submenu').hide().slideUp(200); 
							});
						});

					var x = 0; 
					setInterval (function(){
						if(x < 2) {
							x++;
						}
						else {
							x = 0;
						}
					var sliderPosition = x * (-1200)+"px"; 
					$('.sliderList').animate({left:sliderPosition},400); 
						console.log(x); 
					},3000); 
					  

	

					$('.layerPopup').on('click',function(e){
						e.preventDefault();
						$('#popup').fadeIn();
					})
					$('.close').on('click',function(e){
					   
						$('#popup').fadeOut();
					})
					
					
					
					});

