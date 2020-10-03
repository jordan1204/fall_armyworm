
$(function () { 
    $(".navmenu").mouseover(function(){ 
        $(this).children("ul").show();  
    }) 
    $(".navmenu").mouseout(function(){ 
        $(this).children("ul").hide();
    }) 
    $(".navmenu").children("ul").hide();
    $(window).scroll(function () {
        var window_height = $(window).height();
        var window_scrollTop = $(window).scrollTop();
        var document_height = $(document).height();
        if (window_height + window_scrollTop == document_height) {
            setTimeout(
                function () {
                    $("#button-1,#button-2").removeClass("disabled");
                }, 600);
        }
        else {
            $("#button-1,#button-2").addClass("disabled");
        }
    });
    var wid = document.body.clientWidth;
    $("#header").css("width", wid + "px");
    function isMobile() {
         try{ document.createEvent("TouchEvent"); return true; }
         catch(e){ return false;}
     }
    if (isMobile() === false) {
         $("#circle").remove();
		 $(".mmmm").remove();
    }
    var clicks = 0;
    $("#circle").bind("tap", tapHandler);
    function tapHandler() {
        if (clicks == 0) {
            $("#content").css({ "background-color": "white", "opacity": "0.3" });
            $(".list-group").css({ "display": "flex", "z-index": "10000" });
            clicks = 1;
        }
        else {
            $("#content").css({ "background-color": "white", "opacity": "1" });
            $(".list-group").css({ "display": "none", "z-index": "10000" });
            clicks = 0;
        }
        }
	var pdf = new jsPDF('p','pt','a4');
	
    }) 