
$(document).ready(function(){
     $('.slider').slider();
     $('.parallax').parallax();
   });

   $('.pushpin-demo-nav').each(function() {
       var $this = $(this);
       var $target = $('#' + $(this).attr('data-target'));
       $this.pushpin({
         top: $target.offset().top,
         bottom: $target.offset().top + $target.outerHeight() - $this.height()
       });
     });

     $(document).ready(function(){
        // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
        $('.modal').modal();
      });
            
