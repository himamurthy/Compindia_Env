var currentIndex = 0;
			var currentId = "camera";
			$(document).ready(function() {
				$("#nav").ferroMenu({
					position 	: "center-top",
					delay 		: 70,
					rotation 	: 720,
					margin		: -25
				});
			});
			
			var colors = {
					"user" : {
						"background" : "#E9931A",
						"index" : 0
					},
					"camera" : {
						"background" : "#D06503",
						"index" : 1
					},
					"mapmarker" : {
						"background" : "#1691BE",
						"index" : 2
					},
					"music" : {
						"background" : "#166BA2",
						"index" : 3
					},
					"moon" : {
						"background" : "#1B3647",
						"index" : 4
					},
					"home" : {
						"background" : "#152836",
						"index" : 5
					}
					
			};
			
			function goTo(id){
				var obj = eval("colors."+id);
				
				$("body").css("background",obj.background);
				$("#ferromenu-controller,#nav li a").css("color",obj.background);
				if(obj.index > currentIndex){
					$(".active").addClass("off");
					$(".active").transition({
						x : -100,
						opacity : 0,
						zIndex : 0
					},600);
					
					$("#"+currentId).removeClass("active");
					
					$("#"+id).addClass("active");
					$("#"+id).transition({
						x : 400
					},0,function(){
						$("#"+id).removeClass("off");
						$("#"+id).transition({
							x : 0,
							opacity : 1,
							zIndex : 2
						},600);
					});
				}else if(obj.index < currentIndex){
					$(".active").addClass("off");
					$(".active").transition({
						x : 100,
						opacity : 0,
						zIndex : 0
					},600);
					$("#"+currentId).removeClass("active");
					
					
					$("#"+id).addClass("active");
					$("#"+id).transition({
						x : -400
					},0,function(){
						$("#"+id).removeClass("off");
						$("#"+id).transition({
							x : 0,
							opacity : 1,
							zIndex : 2
						},600);
					});
				}
				currentIndex = obj.index;
				currentId = id;
				
			}

			// Initialize the plugin with no custom options
		$(document).ready(function () {
			// None of the options are set
			$("div#makeMeScrollable").smoothDivScroll({
				autoScrollingMode: "onStart"
			});
		});