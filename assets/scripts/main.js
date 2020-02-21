(function(){
	var processed = [];
	setInterval(function(){
		$('.timesheetControlPopup').not('.timesheetEmptyRowControl').each(function(i, e){
			if (processed.indexOf(this) == -1){
				processed.push(this);
				
				var select = $(this);
				var trigger = true;
				
				select.chosen().change(function(){
					if (trigger){
						trigger = false;
						var evt = document.createEvent("HTMLEvents");
						evt.initEvent('change', true, true);
						select[0].dispatchEvent(evt);
					}
					setTimeout(function(){
						trigger = true;
					}, 1);
				});
				select.siblings(".chosen-container").find(".chosen-search-input").attr("placeholder", "Search");
				select.parent().prev().find('.select-oa').change(function(){
					setTimeout(function(){
						select.trigger('chosen:updated');
					}, 1);
				});
			}
		});
	},200);
})();
