(function($) {

	$.fn.tagIt = function(options) {
		var baseImg = this;	

		if (options && options.tags) {			
			$.each(options.tags, function(idx, value) {
				var tag = showTag(baseImg, value.x, value.y), 
					tagBubble = showTagBubble(tag, false); 

				tag.hide();
				tagBubble.hide();
				tag.mouseover(function() { 
					$('.tag').show();
					$(this).find('.ui-tooltip').show();
				}).mouseout(function() {
					$(this).find('.ui-tooltip').hide();
				});
			});

			baseImg.mouseover(function() {
				$('.tag').show();
			}).mouseout(function() {
				$('.tag').hide();
			});
		} else {
			baseImg.click(function(event) {
				var tagX = event.offsetX, tagY = event.offsetY, 
					tag = showTag(this, tagX, tagY);
					bubble = showTagBubble(tag, true);
					
				tag.find('.closeIcon').click(function() {
					tag.remove();
				});
			});			
		}
	}

	function showTag(img, relativeX, relativeY) {
		var tagLeft = $(img).offset().left + relativeX, 
			tagTop = $(img).offset().top + relativeY, 
			tag = $('<div class="tag"><div class="circle"><div class="innerCircle"></div></div></div>');

		tag.css({position: 'absolute', left: tagLeft, top: tagTop});
		$('body').append(tag);
		return tag;
	}

	function showTagBubble(tag, edit) {
		var bText;
		if (edit) {
			bText = $('<div class="ui-tooltip" style="top: 15px; position:relative;"><div class="closeIcon"></div><div><input placeholder="Text" /></div><div><input placeholder="Link" /></div><div class="arrow top center"></div></div>');
		} else {
			bText = $('<div class="ui-tooltip" style="top: 15px; position:relative;"><a href="http://www.facebook.com" >Link to Item</a><div class="arrow top center"></div></div>');
		}
		tag.append(bText);
		
		var tipAlign = bText.width()/2+10;
		bText.css({left: '-'+tipAlign+'px'});
		return bText;
	}

})(jQuery);