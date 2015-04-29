$(document).ready(function() {	
    
    // Animated scroll to the link described
	$("a.scroll[href^='#']").on("click", function() {
		var hash = this.hash;
		$("html, body").animate({ scrollTop: $(hash).offset().top }, 
                                1000, 
                                function(){window.location.hash = hash;}
                               );
	});
	
    
	$(".skills-btn").click(function() {
        $(".skills").slideToggle(200);
        
        var elem = document.getElementById("skills-separator").className;
        
        if (elem == "show") {
            document.getElementById("skills-separator").className = "hide";
        } else {
            document.getElementById("skills-separator").className = "show";
        }
        
        // http://rendro.github.io/easy-pie-chart/?utm_source=jquer.in&utm_medium=website&utm_campaign=content-curation
        $('.chart').easyPieChart({
        	barColor: "#0D6B00",
			trackColor: false,
			scaleColor: false,
			lineCap: "round",
			lineWidth: 12,
			size:110,
			animate: 2000
		});
        
    });
});



