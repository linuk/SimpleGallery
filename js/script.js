
//setting functions
var autoPlay=false;  //function of auto play images
var intervalTime=3000; //miliseconds for auto play imgs 


$(document).ready(function() {

	//activate first slider pic 
	$("li:first-child").addClass("slider__image__active");

	//set counter for thumbnail 
	var thumbnailCounter=1;

	//click function for thumbnail pics
	$(".thumbnails").click(function(){
		// if click the thumbnail which is not current background
		if($(this).attr("slideTag")!==$('.slider__image__active').attr("id")){
			//remove active class with current background and add to chosen background
			$(".slider__image__active").fadeOut(1000,function(){
				$(this).removeClass("slider__image__active")
			});
			$("#"+$(this).attr("slideTag")).fadeIn(1000).addClass("slider__image__active");	
			//remove active class with current thumbnail and add to chosen thumbnail
			$(".thumbnails__active").removeClass("thumbnails__active");
			$(this).addClass("thumbnails__active");
			//set thumbnailCounter to the one clicked
			thumbnailCounter=parseInt($(this).attr("alt"));
		}
	});


	$(".navbar__arrow__container__right").click(function(){
		
		//for slides  
		//setting current and next slide
		var currentSlide=$(".slider__image__active");
		var nextSlide=currentSlide.next();
		//if there is no next slide, set it to first slide;
		if(nextSlide.length==0){
			nextSlide=$("ul.slider__ul li:first-child");
		};
		//remove active class with current thumbnail and add to chosen thumbnail
		currentSlide.fadeOut(1000).removeClass("slider__image__active");
		nextSlide.fadeIn(1000).addClass("slider__image__active");
		//for slides end


		//for thumbnails
		//when clicking counter of thumbnails +1
		thumbnailCounter+=1;
		
		//if counter out of region, set it to 1
		if(thumbnailCounter==7){
			thumbnailCounter=1;
		}

		//setting current thumbnail and nex one
		var currentThumbnail=$(".thumbnails__active");
		var nextThumbnail=$('img[slideTag="bg'+thumbnailCounter+'"]')
		
		//remove active class with current thumbnail and add to chosen thumbnail
		currentThumbnail.removeClass("thumbnails__active");
		nextThumbnail.addClass("thumbnails__active");
	});

	$(".navbar__arrow__container__left").click(function(){
		
		//for slides  
		//setting current and next slide
		var currentSlide=$(".slider__image__active");
		var prevSlide=currentSlide.prev();
		//if there is no next slide, set it to first slide;
		if(prevSlide.length==0){
			prevSlide=$("ul.slider__ul li:nth-child(6)");
		};
		//remove active class with current thumbnail and add to chosen thumbnail
		currentSlide.fadeOut(2000).removeClass("slider__image__active");
		prevSlide.fadeIn(2000).addClass("slider__image__active");
		//for slides end

		//for thumbnails
		//when clicking counter of thumbnails +1
		thumbnailCounter-=1;
		
		//if counter out of region, set it to 1
		if(thumbnailCounter==0){
			thumbnailCounter=6;
		}

		//setting current thumbnail and nex one
		var currentThumbnail=$(".thumbnails__active");
		var prevThumbnail=$('img[slideTag="bg'+thumbnailCounter+'"]')
		
		//remove active class with current thumbnail and add to chosen thumbnail
		currentThumbnail.removeClass("thumbnails__active");
		prevThumbnail.addClass("thumbnails__active");
	});

	var infoDispaly=false;
	function infoVanish(){
		$('.slider__title__info').css("display","none");
		console.log("vanish");
	};
	function infoProduce(){
		$('.slider__title__info').css("display","inline-block");
		console.log("produce");
	}


	//info hover and display title paragraph
	$(".info__container").click(function(){
		if(!infoDispaly){
			$(".title__paragraph").css("display","inline-block").animate({
				opacity:1
			},800);
			$(".color_overlay_container").animate({
				opacity:1
			},800);
			// $('.slider__title__info').animate({
			// 	opacity:0
			// },700);
			infoVanish();
			infoDispaly=true;

		};
	});

	

	//after info shown, press anywhere to close the infos
	$(document).mousedown(function(){	
		if(infoDispaly){
			//vanish paragraph for animate
			$(".title__paragraph").animate({
				opacity:0
				},800);
			//after same time interval set paragraph display to none
			setTimeout(function(){
				$(".title__paragraph").css("display","none");
			},800);
			
			$(".color_overlay_container").animate({
				opacity:0
				},800);
			// $('.slider__title__info').animate({
			// 	opacity:0.8,
			// },700).delay(500);
			infoProduce();
			infoDispaly=false;
		}
	});

	//autoPlay function
	if(autoPlay){
		//default of auto play function 
		var playPaused=false;
		//interval time of auto play 
		setInterval(function(){
			if(!playPaused){
				$(".navbar__arrow__right").click();
				console.log(playPaused);
			};
		},intervalTime);
		
		//click the document to stop auto play
		if(!playPaused){
			$(document).mousedown(function(){
				playPaused=true;
				console.log(playPaused);
			});
		};
		
		//TODO:add a way to start auto play again when mouse stop moving for a while
	};

});



