
(function($){
 $.fn.tabs=function(){
 	var elements=$(this).children();
 	var el=[];
 	var tab="<ul>"
 	for(var i=0;i<elements.length;i++){
 		if(i==0){
 			tab=tab+"<li class='checkedTabli tabli' id="+i+">"+elements[i].title+"</li>"
 		}else{
 			tab=tab+"<li class='tabli' id="+i+">"+elements[i].title+"</li>"
 		}
 	}
   tab=tab+"</ul>"
   $(tab).insertBefore(elements[0]);
   $(this).on('click','.tabli',function(event){
   	$(event.target).addClass('checkedTabli');
  	$(event.target).siblings('.tabli').removeClass('checkedTabli')
   	$(elements[event.target.id]).siblings('.tab').removeClass('checkedtab');
   	$(elements[event.target.id]).addClass('checkedtab');   
   })    
 }
})(jQuery);
