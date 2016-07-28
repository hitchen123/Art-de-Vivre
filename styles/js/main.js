var Modules = (function(self){ return self; }(Modules || {}));


Modules.CouponPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupElement: '',
			$openClickElement: '',
			$closeClickElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupOverlay = $( _settings.popupOverlayClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				_data.$popupOverlay.addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');
				_data.$popupElement.addClass('pt-page-current pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupOverlay.removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 600);
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(){
				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');

				setTimeout(function(){
					_data.$popupElement.removeClass('pt-page-current pt-page-moveToRight pt-page-moveFromLeft');
					_data.$popupOverlay.removeClass('pt-page-current pt-page-moveToBottomFade pt-page-moveFromTopFade');
				}, 600);
				return false;
			});
			
			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openPopupEvent().closePopupEvent();

				return self;
			}
		}
}(Modules.CouponPopup || {}, jQuery));

Modules.СityPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			cityElementClass: '',
			topLineClass: '',
			topLineCloseClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupElement: '',
			$openClickElement: '',
			$closeClickElement: '',
			$cityElement: '',
			$topLineClose: '',
			$topLine: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupOverlay = $( _settings.popupOverlayClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );
			_data.$cityElement = $( _settings.cityElementClass );
			_data.$topLine = $( _settings.topLineClass );
			_data.$topLineClose = $( _settings.topLineCloseClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				_data.$popupOverlay.addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');
				_data.$popupElement.addClass('pt-page-current pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupOverlay.removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 600);
				return false;
			});
			
			return self;
		}

		self.closePopup = function(){		
			_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
			_data.$popupOverlay.addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');

			setTimeout(function(){
				_data.$popupElement.removeClass('pt-page-current pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.removeClass('pt-page-current pt-page-moveToBottomFade pt-page-moveFromTopFade');
			}, 600);
		
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(){
				self.closePopup();

				return false;
			});
			
			return self;
		}

		self.closeTopLine = function(){
				_data.$topLine.addClass('pt-page-heightOffDelay');
			return self;
		}

		self.closeTopLineEvent = function(){
			$(document).on('click', _settings.topLineCloseClass, function(){
				self.closeTopLine();

				return false;
			});
			
			return self;
		}

		self.chooseCityEvent = function(){
			$(document).on('click', _settings.popupElementClass + ' ul a', function(){
				_data.$cityElement.text($(this).text());

				self.closePopup().closeTopLine();
				return false;
			});
			
			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openPopupEvent().closePopupEvent().chooseCityEvent().closeTopLineEvent();

				return self;
			}
		}
}(Modules.СityPopup || {}, jQuery));


Modules.SearchPopup = (function(self, $){
	
	var _settings = {
			popupElementClass: '',
			openClickElementClass: '',
			clearElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupElement: '',
			$openClickElement: '',
			$clearElement: '',
			trigger: false
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$clearElement = $( _settings.clearElementClass );

			return self;
		}
		
		self.openClosePopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				if(_data.trigger == false){
					_data.$popupElement.removeClass('pt-page-heightOff');
					_data.$popupElement.addClass('pt-page-heightOn');
					_data.$popupElement.find('input').focus();
					_data.trigger = true;
				} else {
					_data.$popupElement.addClass('pt-page-heightOff');
					_data.$popupElement.removeClass('pt-page-heightOn');
					_data.trigger = false;
				}
				return false;
			});
		
			return self;
		}
		
		self.clearSearchEvent = function(){
			$(document).on('click', _settings.clearElementClass, function(){
				_data.$popupElement.find('input').val('').focus();
				return false;
			});		
			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openClosePopupEvent().clearSearchEvent();

				return self;
			}
		}
}(Modules.SearchPopup || {}, jQuery));

Modules.BasketPopup = (function(self, $){
	
	var _settings = {
			popupElementClass: '',
			openClickElementClass: '',
			countPlusElementClass: '',
			countMinusElementClass: '',
			deleteItemElementClass: '',
			itemElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupElement: '',
			$openClickElement: '',
			countPlusElement: '',
			countMinusElement: '',
			deleteItemElement: '',
			itemElement: '',
			trigger: false
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$countPlusElement = $( _settings.countPlusElementClass );
			_data.$countMinusElement = $( _settings.countMinusElementClass );
			_data.$deleteItemElement = $( _settings.deleteItemElementClass );
			_data.$itemElement = $( _settings.itemElementClass );

			return self;
		}
		
		self.openClosePopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				if(_data.trigger == false){
					_data.$popupElement.removeClass('pt-page-heightOff');
					_data.$popupElement.addClass('pt-page-heightOn');
					_data.$popupElement.find('input').focus();
					_data.trigger = true;
				} else {
					_data.$popupElement.addClass('pt-page-heightOff');
					_data.$popupElement.removeClass('pt-page-heightOn');
					_data.trigger = false;
				}
				return false;
			});
		
			return self;
		}

		self.countPlusItemEvent = function(){
			$(document).on('click', _settings.countPlusElementClass, function(){
				$(this).siblings('input').val(function(i, oldval) {
				    return ++oldval;
				});
				return false;
			});
		
			return self;
		}

		self.countMinusItemEvent = function(){
			$(document).on('click', _settings.countMinusElementClass, function(){
				if($(this).siblings('input').val() > 1){
					$(this).siblings('input').val( function(i, oldval) {
					    return --oldval;
					});
				}
				return false;
			});
		
			return self;
		}

		self.deleteItemEvent = function(){
			$(document).on('click', _settings.deleteItemElementClass, function(){
				var obj = $(this);
				obj.closest(_settings.itemElementClass).addClass('pt-page-moveToRight pt-page-moveFromLeft');

				setTimeout(function(){
					obj.closest(_settings.itemElementClass).remove();
				}, 600);
				return false;
			});
		
			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openClosePopupEvent().countPlusItemEvent().countMinusItemEvent().deleteItemEvent();

				return self;
			}
		}
}(Modules.BasketPopup || {}, jQuery));

Modules.CarpetType = (function(self, $){
	
	var _settings = {
			blockElementClass: '',
			hoverElementClass: '',
			imageElementClass: ''
		},
		_data = {
			$blockElement: '',
			$hoverElement: '',
			$imageElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$blockElement = $( _settings.blockElementClass );
			_data.$hoverElement = $( _settings.hoverElementClass );
			_data.$imageElement = $( _settings.imageElementClass );

			_data.$hoverElement.eq(0).children().find(_settings.imageElementClass).addClass('pt-page-current pt-page-moveToLeft pt-page-moveFromRight');
			_data.$hoverElement.eq(0).addClass('active');

			return self;
		}
		
		self.hoverEvent = function(){
			$(document).on('mouseover', _settings.hoverElementClass, function(){
					var old = _data.$blockElement.find('.active');
					_data.$hoverElement.removeClass('active');
					old.children().find(_settings.imageElementClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight').addClass('pt-page-current pt-page-moveToRight pt-page-moveFromLeft');

					$(this).find(_settings.imageElementClass).addClass('pt-page-current pt-page-moveToLeft pt-page-moveFromRight');
					$(this).addClass('active');
				return false;
			});
		
			return self;
		}

		self.hoverOutEvent = function(){
			$(document).on('mouseleave', _settings.blockElementClass, function(){
				var old = _data.$blockElement.find('.active');
				_data.$hoverElement.removeClass('active');
				old.find(_settings.imageElementClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight').addClass('pt-page-current pt-page-moveToRight pt-page-moveFromLeft');

				_data.$hoverElement.eq(0).children().find(_settings.imageElementClass).addClass('pt-page-current pt-page-moveToLeft pt-page-moveFromRight');
				_data.$hoverElement.eq(0).addClass('active');
				return false;
			});
		
			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().hoverEvent().hoverOutEvent();

				return self;
			}
		}
}(Modules.CarpetType || {}, jQuery));

Modules.CatalogFiltersPopup = (function(self, $){
	
	var _settings = {
			popupElementClass: '',
			openClickElementClass: '',
			filterElementClass: '',
			bottomFilterElementClass: '',
			bottomFilterDeleteClass: '',
			bottomFilterDeleteAllClass: '',
			filterButtonClass: '',
			filterItemElementClass: '',
			closeAllClick: true,
			visibleNum: 4,
			ajaxUrl: ''
		},
		_data = {
			$popupElement: '',
			$openClickElement: '',
			$lastClickedElement: null,
			$filterButton: '',
			$filterElement: '',
			$bottomFilterElement: '',
			$bottomFilterDelete: '',
			$bottomFilterDeleteAll: '',
			$filterItemElement: '',
			trigger: false,
			triggerFilter: false
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$filterElement = $( _settings.filterElementClass );
			_data.$bottomFilterElement = $( _settings.bottomFilterElementClass );
			_data.$filterButton = $( _settings.filterButtonClass );
			_data.$filterItemElement = $( _settings.filterItemElementClass );

			$(_settings.openClickElementClass + ':not(' + _settings.filterButtonClass + ')').slice(_settings.visibleNum, $(_settings.openClickElementClass + ':not(' + _settings.filterButtonClass + ')').length).parent().hide();

			return self;
		}
		
		self.openClosePopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass + ':not(' + _settings.filterButtonClass + ')', function(){
				var obj = $(this);

				if(_data.$lastClickedElement == null){
					_data.$lastClickedElement = obj;
				}

				if(_data.$lastClickedElement.get(0) != obj.get(0)){
					var tempOld = _data.$lastClickedElement;

					tempOld.removeClass('active');
					tempOld.siblings(_data.$popupElement).addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');

					obj.addClass('active');
					obj.siblings(_data.$popupElement).addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');					

					setTimeout(function(){
						tempOld.siblings(_data.$popupElement).removeClass('pt-page-current pt-page-moveToBottomFade pt-page-moveFromTopFade');
						obj.siblings(_data.$popupElement).removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
					}, 600);

					_data.trigger = true;

					_data.$lastClickedElement = obj;
				}else{
					if(_data.trigger == false){
						obj.addClass('active');
						obj.siblings(_data.$popupElement).addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');

						setTimeout(function(){
							obj.siblings(_data.$popupElement).removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
						}, 600);
						_data.trigger = true;
					} else {
						obj.removeClass('active');
						obj.siblings(_data.$popupElement).addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');
						

						setTimeout(function(){
							obj.siblings(_data.$popupElement).removeClass('pt-page-current pt-page-moveToBottomFade pt-page-moveFromTopFade');
						}, 600);

						_data.trigger = false;
					}

					_data.$lastClickedElement = obj;
				}

				return false;
			});
		
			return self;
		}

		self.filterButtonClickEvent = function(){
			$(document).on('click', _settings.filterButtonClass, function(){
				if(_data.triggerFilter == false){
					$(_settings.openClickElementClass + ':not(' + _settings.filterButtonClass + ')').slice(_settings.visibleNum, $(_settings.openClickElementClass + ':not(' + _settings.filterButtonClass + ')').length).parent().show();
					_data.triggerFilter = true;
				} else {
					$(_settings.openClickElementClass + ':not(' + _settings.filterButtonClass + ')').slice(_settings.visibleNum, $(_settings.openClickElementClass + ':not(' + _settings.filterButtonClass + ')').length).parent().hide();
					_data.triggerFilter = false;
				}

				return false;
			});

			return self;
		}

		self.filterItemElementClickEvent = function(){
			$(document).on('click', _settings.filterItemElementClass + ' > input[type="checkbox"]', function(event){
				event.stopPropagation();
				console.log($(this).prop('checked'))
				if($(this).prop('checked') == true){
					$('.b-catalog__sub-nav').show();
					console.log($(this).prop('checked'));
					$('.tags-list dt').after('<dd class="tags-list__filter" id="' + $(this).parent().attr('class') + '"><span>' + $(this).parent().data('name') + '</span><a href="#" class="del">Удалить</a></dd>');
				} else{
					console.log($(this).attr('name'))
					$('#' + $(this).parent().attr('class')).remove();

					if($(_settings.bottomFilterDeleteClass).length == 0)
						$('.b-catalog__sub-nav').hide();
				}
			});

			return self;
		}

		self.bottomFilterDeleteEvent = function(){
			$(document).on('click', _settings.bottomFilterDeleteClass, function(e){
				$('.' + $(this).parent().attr('id')).children($('input[type="checkbox"]')).prop( "checked", false );
				$(this).parent().remove();

				if($(_settings.bottomFilterDeleteClass).length == 0)
					$('.b-catalog__sub-nav').hide();

				return false;
			});

			return self;
		}

		self.bottomFilterDeleteAllEvent = function(){
			$(document).on('click', _settings.bottomFilterDeleteAllClass, function(e){
				$.each($(_settings.bottomFilterElementClass), function( i, val){
					$('.' + $(this).attr('id')).children($('input[type="checkbox"]')).prop( "checked", false );
					$(this).remove();
				});

				$('.b-catalog__sub-nav').hide();

				return false;
			});

			return self;
		}

		self.closeAllEvent = function(){
			$(document).on('click', function(e){
			    if( $(e.target).closest((_settings.popupElementClass + ', ' + _settings.openClickElementClass).length > 0 || _data.trigger == false) 
			    	&& _settings.closeAllClick == true
			    	&& $(e.target).parents(_settings.popupElementClass).length > 0){
			    }else{
			    	$(_settings.openClickElementClass).removeClass('active');
					_data.$popupElement.addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');
					_data.trigger = false;

					setTimeout(function(){
						_data.$popupElement.removeClass('pt-page-current pt-page-moveToBottomFade pt-page-moveFromTopFade');
					}, 600);

				    return false;
			    }
			});

			return self;
		}
			
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openClosePopupEvent().closeAllEvent().filterButtonClickEvent().filterItemElementClickEvent().bottomFilterDeleteEvent().bottomFilterDeleteAllEvent();

				return self;
			}
		}
}(Modules.CatalogFiltersPopup || {}, jQuery));

Modules.ProductImageFilter = (function(self, $){
	
	var _settings = {
			icoElement1Class: '',
			icoElement2Class: '',
			productWrapperClass: ''
		},
		_data = {
			$icoElement1: '',
			$icoElement2: '',
			$productWrapper: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$icoElement1 = $( _settings.icoElement1Class );
			_data.$icoElement2 = $( _settings.icoElement2Class );
			_data.$productWrapper = $( _settings.productWrapperClass );

			return self;
		}

		self.icoElement1ClickEvent = function(){
			$(document).on('click', _settings.icoElement1Class, function(e){
				if(!$(this).hasClass('active')){
					_data.$icoElement2.removeClass('active');
					_data.$icoElement2.children('.is-active').removeClass('active');
					_data.$icoElement2.children('.is-not-active').addClass('active');

					_data.$icoElement1.addClass('active');
					_data.$icoElement1.children('.is-active').addClass('active');
					_data.$icoElement1.children('.is-not-active').removeClass('active');

					_data.$productWrapper.addClass('big-img');
				}

				return false;
			});

			return self;
		}

		self.icoElement2ClickEvent = function(){
			$(document).on('click', _settings.icoElement2Class, function(e){
				if(!$(this).hasClass('active')){
					_data.$icoElement1.removeClass('active');
					_data.$icoElement1.children('.is-active').removeClass('active');
					_data.$icoElement1.children('.is-not-active').addClass('active');

					_data.$icoElement2.addClass('active');
					_data.$icoElement2.children('.is-active').addClass('active');
					_data.$icoElement2.children('.is-not-active').removeClass('active');

					_data.$productWrapper.removeClass('big-img');
				}

				return false;
			});

			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().icoElement1ClickEvent().icoElement2ClickEvent();

				return self;
			}
		}
}(Modules.ProductImageFilter || {}, jQuery));

Modules.CatalogBannerFirstPopup = (function(self, $){
	
	var _settings = {
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: ''
		},
		_data = {
			$popupElement: '',
			$openClickElement: '',
			$closeClickElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			_data.$popupElement.addClass('pt-page-heightOff');

			return self;
		}
		
		self.openPopupClickEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
					_data.$popupElement.removeClass('pt-page-heightOff');
					_data.$popupElement.addClass('pt-page-heightOn');
					_data.$openClickElement.removeClass('active');
					_data.$closeClickElement.addClass('active');

				return false;
			});
		
			return self;
		}

		self.closePopupClickEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(){
				_data.$popupElement.addClass('pt-page-heightOff');
				_data.$popupElement.removeClass('pt-page-heightOn');
				_data.$openClickElement.addClass('active');
				_data.$closeClickElement.removeClass('active');

				return false;
			});
		
			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openPopupClickEvent().closePopupClickEvent();

				return self;
			}
		}
}(Modules.CatalogBannerFirstPopup || {}, jQuery));

Modules.CatalogBannerSecondPopup = (function(self, $){
	
	var _settings = {
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: ''
		},
		_data = {
			$popupElement: '',
			$openClickElement: '',
			$closeClickElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			_data.$popupElement.addClass('pt-page-heightOff');

			return self;
		}
		
		self.openPopupClickEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
					_data.$popupElement.removeClass('pt-page-heightOff');
					_data.$popupElement.addClass('pt-page-heightOn');
					_data.$openClickElement.removeClass('active');
					_data.$closeClickElement.addClass('active');

				return false;
			});
		
			return self;
		}

		self.closePopupClickEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(){
				_data.$popupElement.addClass('pt-page-heightOff');
				_data.$popupElement.removeClass('pt-page-heightOn');
				_data.$openClickElement.addClass('active');
				_data.$closeClickElement.removeClass('active');

				return false;
			});
		
			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openPopupClickEvent().closePopupClickEvent();

				return self;
			}
		}
}(Modules.CatalogBannerSecondPopup || {}, jQuery));

Modules.ProductAdd = (function(self, $){
	
	var _settings = {
			basketElementClass: '',
			addButtonElementClass: '',
			productImageClass: '',
			productItemClass: ''
		},
		_data = {
			$basketElement: '',
			$addButtonElement: '',
			$productImage: '',
			$productItem: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$basketElement = $( _settings.basketElementClass );
			_data.$addButtonElement = $( _settings.addButtonElementClass );
			_data.$productImage = $( _settings.productImageClass );
			_data.$productItem = $( _settings.productItemClass );

			return self;
		}
		
		self.addBasketClickEvent = function(){
			$(document).on('click', _settings.addButtonElementClass, function(){
			    var divider = 3;
			    _data.$productImage = $(this).parents(_settings.productItemClass).find(_settings.productImageClass);
			    var flyerClone = _data.$productImage.clone();

			    $(flyerClone).css({position: 'absolute', top: _data.$productImage.offset().top + "px", left: _data.$productImage.offset().left + "px", opacity: 1, 'z-index': 1000});
			    $('body').append($(flyerClone));

			    var gotoX = _data.$basketElement.offset().left + (_data.$basketElement.width() / 2) - (_data.$productImage.width()/divider)/2;
			    var gotoY = _data.$basketElement.offset().top + (_data.$basketElement.height() / 2) - (_data.$productImage.height()/divider)/2;
			     
			    $(flyerClone).animate({
			        opacity: 0.4,
			        left: gotoX,
			        top: gotoY,
			        width: _data.$productImage.width()/divider,
			        height: _data.$productImage.height()/divider
			    }, 700,
			    function () {
			        _data.$basketElement.fadeOut('fast', function () {
			            _data.$basketElement.fadeIn('fast', function () {
			                $(flyerClone).fadeOut('fast', function () {
			                    $(flyerClone).remove();
			                });
			            });
			        });
			    });

				return false;
			});
		
			return self;
		}

		return {
			init: function(params){
				self.setSettings(params).setConfig().addBasketClickEvent();

				return self;
			}
		}
}(Modules.ProductAdd || {}, jQuery));

Modules.TopBottomButton = (function(self, $){
	
	var _settings = {
			bottomPosition: 0,
			flagBottom: false,
			flagAnimate: false
		},
		_data = {}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			return self;
		}
		
		self.topBottomClickEvent = function(){
			$(document).on('click', '.in_top', function(){
		        // поднимаем флаг, началась выполнениние анимации
		        _settings.flagAnimate = true;
		        // если на данный момент кнопка "назад"
		        if( _settings.flagBottom){
		            // то скролим страницу в нужное место
		            $("body,html").animate({"scrollTop": _settings.bottomPosition}, 300, function(){ 
		                // опускаем влаг анимации, она закончилась
		                _settings.flagAnimate = false;
		            });
		            // меняем кнопку
		            _settings.flagBottom = false;
		            $('.in_top span').html('↑ Наверх ↑');
		        }else{
		            // если кнопка "вверх"
		            $("body,html").animate({"scrollTop":0}, 300, function(){ 
		                _settings.flagAnimate = false;
		            });     
		            // запомним на сколько была прокручена страница
		            _settings.bottomPosition = $(window).scrollTop();
		            // и зададим флаг, что нужно показать кнопку "назад"
		            _settings.flagBottom = true;
		            $('.in_top span').html('↓ Назад ');
		        }

		        return false;
		    });
		
			return self;
		}

		self.topBottomScrollEvent = function(){
			$(window).scroll(function(event){
		        var countScroll = $(window).scrollTop();
		        // если прокрутили больше 100 пикселей и анимация не выполняется, то показываем кнопку
		        if (countScroll > 100 && !_settings.flagAnimate){
		            $('.in_top').show();
		            if(_settings.flagBottom){
		                _settings.flagBottom = false;
		                $('.in_top span').html('↑ Наверх ↑');
		            }
		        // иначе прячем кнопку, если это не кнопка "назад"
		        }else{
		            if(!_settings.flagBottom){
		                $('.in_top').hide();
		            }
		        }

		        return false;
		    });
		
			return self;
		}

		return {
			init: function(params){
				self.setSettings(params).setConfig().topBottomClickEvent().topBottomScrollEvent();

				return self;
			}
		}
}(Modules.TopBottomButton || {}, jQuery));

Modules.PremiumBanner = (function(self, $){
	
	var _settings = {
			bannerElementClass: '',
			closeClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$bannerElement: '',
			$closeClickElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$bannerElement = $( _settings.bannerElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			_data.$bannerElement.addClass('pt-page-heightOn');

			return self;
		}
		
		self.closeBannerClickEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(){
				_data.$bannerElement.addClass('pt-page-heightOff');
				_data.$bannerElement.removeClass('pt-page-heightOn');

				return false;
			});
		
			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().closeBannerClickEvent();

				return self;
			}
		}
}(Modules.PremiumBanner || {}, jQuery));

Modules.YandexMaps = (function(self, $, ymaps){
	
	var _settings = {
			mapWrapperId: '',
			ajaxUrl: ''
		},
		_data = {
			$mapWrapper: '',
			tooltips: {}
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			_data.tooltips = [
				{"coordinates": [55.76, 37.64], "properties": {"balloonHeader": "Ковры Персия", "balloonContent": 'Ленинский проспект д.95<br/>Телефон: +7 (499) 131-28-89<br/>Режим работы: 10:00 - 20:00<br/><a href="#">Подробнее ›</a>'}},
				{"coordinates": [55.76, 37.64], "properties": {"balloonHeader": "Ковры Персия", "balloonContent": 'Ленинский проспект д.95<br/>Телефон: +7 (499) 131-28-89<br/>Режим работы: 10:00 - 20:00<br/><a href="#">Подробнее ›</a>'}},
				{"coordinates": [55.76, 37.64], "properties": {"balloonHeader": "Ковры Персия", "balloonContent": 'Ленинский проспект д.95<br/>Телефон: +7 (499) 131-28-89<br/>Режим работы: 10:00 - 20:00<br/><a href="#">Подробнее ›</a>'}},
				{"coordinates": [55.76, 37.64], "properties": {"balloonHeader": "Ковры Персия", "balloonContent": 'Ленинский проспект д.95<br/>Телефон: +7 (499) 131-28-89<br/>Режим работы: 10:00 - 20:00<br/><a href="#">Подробнее ›</a>'}},
				{"coordinates": [55.76, 37.64], "properties": {"balloonHeader": "Ковры Персия", "balloonContent": 'Ленинский проспект д.95<br/>Телефон: +7 (499) 131-28-89<br/>Режим работы: 10:00 - 20:00<br/><a href="#">Подробнее ›</a>'}}
			];

			return self;
		}
		
		self.setConfig = function(){
			_data.$mapWrapper = $( _settings.mapWrapperId );

			return self;
		}
		
		self.mapInit = function(){
			var myMap = new ymaps.Map(_settings.mapWrapperId, {
			        center: [55.76, 37.64],
			        zoom: 9,
            		behaviors: ['default', 'scrollZoom']
			    }, {
			        searchControlProvider: 'yandex#search'
			    }),
			    objectManager = new ymaps.ObjectManager({
			        // Чтобы метки начали кластеризоваться, выставляем опцию.
			        clusterize: true,
			        // ObjectManager принимает те же опции, что и кластеризатор.
			        gridSize: 32
			    });

			// Чтобы задать опции одиночным объектам и кластерам,
			// обратимся к дочерним коллекциям ObjectManager.
			objectManager.objects.options.set('preset', 'islands#greenDotIcon');
			objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
			myMap.geoObjects.add(objectManager);


			// Создание макета балуна на основе Twitter Bootstrap.
	        MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                    '<div class="b-contacts__map-tool-type">' +
                    	'$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' +
                    '</div>', {
	                /**
	                 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
	                 * @function
	                 * @name build
	                 */
	                build: function () {
	                    this.constructor.superclass.build.call(this);

	                    this._$element = $('.b-contacts__map-tool-type', this.getParentElement());

	                    this.applyElementOffset();

	                    // this._$element.find('.close')
	                    //     .on('click', $.proxy(this.onCloseClick, this));
	                },

	                /**
	                 * Удаляет содержимое макета из DOM.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
	                 * @function
	                 * @name clear
	                 */
	                // clear: function () {
	                //     this._$element.find('.close')
	                //         .off('click');

	                //     this.constructor.superclass.clear.call(this);
	                // },

	                /**
	                 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
	                 * @function
	                 * @name onSublayoutSizeChange
	                 */
	                onSublayoutSizeChange: function () {
	                    MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

	                    if(!this._isElement(this._$element)) {
	                        return;
	                    }

	                    this.applyElementOffset();

	                    this.events.fire('shapechange');
	                },

	                /**
	                 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
	                 * @function
	                 * @name applyElementOffset
	                 */
	                applyElementOffset: function () {
	                    this._$element.css({
	                        left: -(this._$element[0].offsetWidth / 2),
	                        top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
	                    });
	                },

	                /**
	                 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
	                 * @function
	                 * @name onCloseClick
	                 */
	                // onCloseClick: function (e) {
	                //     e.preventDefault();

	                //     this.events.fire('userclose');
	                // },

	                /**
	                 * Используется для автопозиционирования (balloonAutoPan).
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
	                 * @function
	                 * @name getClientBounds
	                 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
	                 */
	                getShape: function () {
	                	console.log(position);
	                    if(!this._isElement(this._$element)) {
	                        return MyBalloonLayout.superclass.getShape.call(this);
	                    }

	                    var position = this._$element.position();
	                    console.log(position);

	                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
	                        [position.left, position.top], [
	                            position.left + this._$element[0].offsetWidth,
	                            position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
	                        ]
	                    ]));
	                },

	                /**
	                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
	                 * @function
	                 * @private
	                 * @name _isElement
	                 * @param {jQuery} [element] Элемент.
	                 * @returns {Boolean} Флаг наличия.
	                 */
	                _isElement: function (element) {
	                    return element && element[0] && $(element.attr('class') + ' after');
	                }
	            }),

	    	// Создание вложенного макета содержимого балуна.
	        MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
	            '<h2>$[properties.balloonHeader]</h2>' +
                '<p>$[properties.balloonContent]</p>'
	        ),

		    // Создание метки с пользовательским макетом балуна.
		    $.each(_data.tooltips, function( index, value ) {
		        myMap.geoObjects.add(new ymaps.Placemark(value.coordinates, {
			            balloonHeader: value.properties.balloonHeader,
			            balloonContent: value.properties.balloonContent
			        }, {
			            balloonShadow: false,
			            balloonLayout: MyBalloonLayout,
			            balloonContentLayout: MyBalloonContentLayout,
			            balloonPanelMaxMapArea: 0
			            // Не скрываем иконку при открытом балуне.
			            // hideIconOnBalloonOpen: false,
			            // И дополнительно смещаем балун, для открытия над иконкой.
			            // balloonOffset: [3, -40]
			        })
		        )
		    });

			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig();
				if(ymaps != null)
					ymaps.ready(self.mapInit);

				return self;
			}
		}
}(Modules.YandexMaps || {}, jQuery, typeof ymaps != "undefined" ? ymaps : null));

Modules.MenuShadow = (function(self, $){
	
	var _settings = {
			menuItemClass: '',
			popupOverlayClass: ''
		},
		_data = {
			$menuItem: '',
			$popupOverlay: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$menuItem = $( _settings.menuItemClass );
			_data.$popupOverlay = $( _settings.popupOverlayClass );

			return self;
		}

		self.hoverEvent = function(){
			$(document).on('mouseenter', _settings.menuItemClass, function(e){
				_data.$popupOverlay.css('top', $('header').height());

				_data.$popupOverlay.addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');

				setTimeout(function(){
					_data.$popupOverlay.removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
				}, 600);

				return false;
			});
		
			return self;
		}

		self.hoverOutEvent = function(){
			$(document).on('mouseleave', _settings.menuItemClass, function(){
				_data.$popupOverlay.addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');

				setTimeout(function(){
					_data.$popupOverlay.removeClass('pt-page-current pt-page-moveToBottomFade pt-page-moveFromTopFade');
				}, 600);

				return false;
			});
		
			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().hoverEvent().hoverOutEvent();

				return self;
			}
		}
}(Modules.MenuShadow || {}, jQuery));

Modules.SignInPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupElement: '',
			$openClickElement: '',
			$closeClickElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupOverlay = $( _settings.popupOverlayClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				_data.$popupOverlay.addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');
				_data.$popupElement.addClass('pt-page-current pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupOverlay.removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 600);
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(){
				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');

				setTimeout(function(){
					_data.$popupElement.removeClass('pt-page-current pt-page-moveToRight pt-page-moveFromLeft');
					_data.$popupOverlay.removeClass('pt-page-current pt-page-moveToBottomFade pt-page-moveFromTopFade');
				}, 600);
				return false;
			});
			
			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openPopupEvent().closePopupEvent();

				return self;
			}
		}
}(Modules.SignInPopup || {}, jQuery));

Modules.SignUpPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupElement: '',
			$openClickElement: '',
			$closeClickElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupOverlay = $( _settings.popupOverlayClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				_data.$popupOverlay.addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');
				_data.$popupElement.addClass('pt-page-current pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupOverlay.removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 600);
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(){
				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');

				setTimeout(function(){
					_data.$popupElement.removeClass('pt-page-current pt-page-moveToRight pt-page-moveFromLeft');
					_data.$popupOverlay.removeClass('pt-page-current pt-page-moveToBottomFade pt-page-moveFromTopFade');
				}, 600);
				return false;
			});
			
			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openPopupEvent().closePopupEvent();

				return self;
			}
		}
}(Modules.SignUpPopup || {}, jQuery));

Modules.DesignerProfileTabs = (function(self, $){
	
	var _settings = {
			tabsWrapperClass: '',
			tabsContentWrapperClass: '',
			tabElementClass: '',
			tabContentElementClass: '',
			classPrefix: ''
		},
		_data = {
			$tabsWrapper: '',
			$tabsContentWrapper: '',
			$tabElement: '',
			$tabContentElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			
			_data.$tabsWrapper = $( _settings.tabsWrapperClass );
			_data.$tabsContentWrapper = $( _settings.tabsContentWrapperClass );
			_data.$tabElement = $( _settings.tabElementClass );
			_data.$tabContentElement = $( _settings.tabContentElementClass );
			
			_data.$tabElement.eq(0).addClass('active');
			_data.$tabContentElement.eq(0).addClass('active');
			
			self.fixHeight(_data.$tabsContentWrapper, _data.$tabContentElement.eq(0));

			return self;
		}
		
		self.fixHeight = function(wrapper, inner){
			wrapper.height(inner.outerHeight());

			return self;
		}
		
		self.onClickEvent = function(){
			$(document).on('click', _settings.tabElementClass, function(){
				var obj = $(this);

				_data.$tabElement.removeClass('active');

				obj.addClass('active');
				_data.$tabContentElement.removeClass('active').eq( obj.index() ).addClass('active');
				self.fixHeight(_data.$tabsContentWrapper, _data.$tabContentElement.eq(obj.index()));

				return false;
			});

			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().onClickEvent();

				return self;
			}
		}
}(Modules.DesignerProfileTabs || {}, jQuery));


Modules.ProfileTabs = (function(self, $){
	
	var _settings = {
			tabsWrapperClass: '',
			tabsContentWrapperClass: '',
			tabElementClass: '',
			tabContentElementClass: '',
			classPrefix: ''
		},
		_data = {
			$tabsWrapper: '',
			$tabsContentWrapper: '',
			$tabElement: '',
			$tabContentElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			
			_data.$tabsWrapper = $( _settings.tabsWrapperClass );
			_data.$tabsContentWrapper = $( _settings.tabsContentWrapperClass );
			_data.$tabElement = $( _settings.tabElementClass );
			_data.$tabContentElement = $( _settings.tabContentElementClass );
			
			_data.$tabElement.eq(0).addClass('active');
			_data.$tabContentElement.eq(0).addClass('active');
			
			self.fixHeight(_data.$tabsContentWrapper, _data.$tabContentElement.eq(0));

			return self;
		}
		
		self.fixHeight = function(wrapper, inner){
			wrapper.height(inner.outerHeight());

			return self;
		}
		
		self.onClickEvent = function(){
			$(document).on('click', _settings.tabElementClass, function(){
				var obj = $(this);

				_data.$tabElement.removeClass('active');

				obj.addClass('active');
				_data.$tabContentElement.removeClass('active').eq( obj.index() ).addClass('active');
				self.fixHeight(_data.$tabsContentWrapper, _data.$tabContentElement.eq(obj.index()));

				return false;
			});

			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().onClickEvent();

				return self;
			}
		}
}(Modules.ProfileTabs || {}, jQuery));

Modules.LoadMoreButton = (function(self, $){
	
	var _settings = {
			itemsWrapperClass: '',
			buttonLoadClass: '',
			tabsContentWrapperClass: '',
			tabContentElementClass: '',
			count: 4,
			ajaxUrl: ''
		},
		_data = {
			$itemsWrapper: '',
			$buttonLoad: '',
			$tabsContentWrapper: '',
			$tabContentElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$itemsWrapper = $( _settings.itemsWrapperClass );
			_data.$buttonLoad = $( _settings.buttonLoadClass );
			_data.$tabsContentWrapper = $( _settings.tabsContentWrapperClass );
			_data.$tabContentElement = $( _settings.tabContentElementClass );

			return self;
		}

		self.fixHeight = function(wrapper, inner){
			wrapper.height(inner.outerHeight());

			return self;
		}
		
		self.onClickEvent = function(){
			$(document).on('click', _settings.buttonLoadClass, function(){
				var html = '';

				for (var i = 0; i < _settings.count; i++) {
				   html += '<tr>' +
	                            '<td class="col-1">' +
	                                '<span>02.10.2016</span>' +
	                            '</td>' +
	                            '<td class="col-2">' +
	                                '<span>12343534-УВ</span>'+
	                            '</td>' +
	                            '<td class="col-3">' +
	                                '<span>' +
	                                    '<img src="temp/39.png">' +
	                                '</span>' +
	                            '</td>' +
	                            '<td class="col-4">' +
	                                '<b>540 000 р.</b>' +
	                            '</td>' +
	                        '</tr>';
				}

				_data.$itemsWrapper.append(html);
				self.fixHeight(_data.$tabsContentWrapper, _data.$tabContentElement.eq($(this).index()));

				return false;
			});

			return self;
		}

		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().onClickEvent();

				return self;
			}
		}
}(Modules.LoadMoreButton || {}, jQuery));


Modules.ProfilePopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupElement: '',
			$openClickElement: '',
			$closeClickElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupOverlay = $( _settings.popupOverlayClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				_data.$popupOverlay.addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');
				_data.$popupElement.addClass('pt-page-current pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupOverlay.removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 600);
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(){
				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');

				setTimeout(function(){
					_data.$popupElement.removeClass('pt-page-current pt-page-moveToRight pt-page-moveFromLeft');
					_data.$popupOverlay.removeClass('pt-page-current pt-page-moveToBottomFade pt-page-moveFromTopFade');
				}, 600);
				return false;
			});
			
			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openPopupEvent().closePopupEvent();

				return self;
			}
		}
}(Modules.ProfilePopup || {}, jQuery));

Modules.ProfileOrdersPopup = (function(self, $){
	
	var _settings = {
			popupElementClass: '',
			popupElementWrapperClass: '',
			openClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupElement: '',
			$popupElementWrapper: '',
			$openClickElement: '',
			trigger: false
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$popupElementWrapper = $( _settings.popupElementWrapperClass );
			_data.$openClickElement = $( _settings.openClickElementClass );

			return self;
		}

		self.fixHeight = function(wrapper, inner){
			wrapper.height(inner.outerHeight());

			return self;
		}
		
		self.openClosePopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				if(_data.trigger == false){
					// _data.$popupElement.removeClass('pt-page-heightOff');
					// _data.$popupElement.addClass('pt-page-heightOn');
					_data.$popupElement.removeClass('active');
					$(this).parent().addClass('active');

					self.fixHeight(_data.$popupElementWrapper, _data.$popupElement.parent());
					_data.trigger = true;
				} else {
					// _data.$popupElement.addClass('pt-page-heightOff');
					// _data.$popupElement.removeClass('pt-page-heightOn');
					_data.$popupElement.removeClass('active');

					self.fixHeight(_data.$popupElementWrapper, _data.$popupElement.parent());
					_data.trigger = false;
				}
				return false;
			});

			
		
			return self;
		}
		
		self.sendAjax = function(){
			$.ajax({
				type : "post",
				url : _settings.ajaxUrl,
				data : {data: {}}	
			}).done(function(data){
				if(data){
					var response = $.parseJSON(data);
					
				}
			}).fail(function(){

			}).error(function(jqXHR, status, errorThrown){
				console.log(jqXHR);
				console.log(status);
				console.log(errorThrown);
			});

			return false;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openClosePopupEvent();

				return self;
			}
		}
}(Modules.ProfileOrdersPopup || {}, jQuery));

(function($){
	$(function(){
		var menuShadow = new Modules.MenuShadow.init({
			menuItemClass: '.b-main-nav-dropdown',
			popupOverlayClass: '.b-overlay-menu'
		});

		var couponPopup = new Modules.CouponPopup.init({
			popupOverlayClass: '.b-overlay',
			popupElementClass: '.b-coupon-pop-up',
			openClickElementClass: '.b-middle-store__img a, .b-contacts__promo a',
			closeClickElementClass: '.b-coupon-pop-up .close',
			ajaxUrl: ''
		});

		var signInPopup = new Modules.SignInPopup.init({
			popupOverlayClass: '.b-overlay',
			popupElementClass: '.b-designer__pop-up-signin',
			openClickElementClass: '.login .signin',
			closeClickElementClass: '.b-designer__pop-up-signin .close',
			ajaxUrl: ''
		});

		var signUpPopup = new Modules.SignUpPopup.init({
			popupOverlayClass: '.b-overlay',
			popupElementClass: '.b-designer__pop-up-signup',
			openClickElementClass: '.login .signup',
			closeClickElementClass: '.b-designer__pop-up-signup .close',
			ajaxUrl: ''
		});

		var cityPopup = new Modules.СityPopup.init({
			popupOverlayClass: '.b-overlay',
			popupElementClass: '.b-city-pop-up',
			openClickElementClass: '.b-top__reg-i a, .b-top__no, .b-contacts__title a',
			closeClickElementClass: '.b-city-pop-up .close',
			cityElementClass: '.b-top__reg-i a, .b-contacts__title a',
			topLineClass: '.b-top__yellow-line',
			topLineCloseClass: '.b-top__yes',
			ajaxUrl: ''
		});

		var searchPopup = new Modules.SearchPopup.init({
			popupElementClass: '.b-main-nav__search',
			openClickElementClass: '.search-lnk',
			clearElementClass: '.b-main-nav__search .del',
			ajaxUrl: ''
		});

		var basketPopup = new Modules.BasketPopup.init({
			popupElementClass: '.b-main-nav__bag',
			openClickElementClass: '.bag-lnk',
			countPlusElementClass: '.b-main-nav__bag .count-plus',
			countMinusElementClass: '.b-main-nav__bag .count-minus',
			deleteItemElementClass: '.b-main-nav__bag .del',
			itemElementClass: '.b-main-nav__bag-item',
			ajaxUrl: ''
		});

		var carpetType = new Modules.CarpetType.init({
			blockElementClass: '.b-middle-nav__list-1',
			hoverElementClass: '.b-middle-nav__list-1 dd',
			imageElementClass: '.b-middle-nav__list-i'
		});

		var catalogFiltersPopup = new Modules.CatalogFiltersPopup.init({
			popupElementClass: '.b-catalog__nav-item',
			openClickElementClass: '.b-catalog__nav-list > li > a',
			filterElementClass: '.b-catalog__nav-list > li',
			filterButtonClass: '.b-catalog__nav-button',
			filterItemElementClass: '.b-catalog__check-item label',
			bottomFilterElementClass: '.tags-list__filter',
			bottomFilterDeleteClass: '.tags-list__filter .del',
			bottomFilterDeleteAllClass: '.tags-list__button',
			ajaxUrl: ''
		});

		var productImageFilter = new Modules.ProductImageFilter.init({
			icoElement1Class: '.img-filter-1',
			icoElement2Class: '.img-filter-2',
			productWrapperClass: '.b-catalog__middle'
		});

		var catalogBannerFirstPopup = new Modules.CatalogBannerFirstPopup.init({
			popupElementClass: '.b-catalog__middle-banner-1 .b-catalog__middle-banner-popup',
			openClickElementClass: '.b-catalog__middle-banner-1 .open',
			closeClickElementClass: '.b-catalog__middle-banner-1 .close'
		});

		var catalogBannerSecondPopup = new Modules.CatalogBannerSecondPopup.init({
			popupElementClass: '.b-catalog__middle-banner-2 .b-catalog__middle-banner-popup',
			openClickElementClass: '.b-catalog__middle-banner-2 .open',
			closeClickElementClass: '.b-catalog__middle-banner-2 .close'
		});

		var productAdd = new Modules.ProductAdd.init({
			basketElementClass: '.fl-r',
			addButtonElementClass: '.add-lnk',
			productImageClass: 'img',
			productItemClass: '.b-catalog__item'
		});

		var topBottomButton = new Modules.TopBottomButton.init({
		});

		var premiumBanner = new Modules.PremiumBanner.init({
			bannerElementClass: '.b-catalog-premium__banner',
			closeClickElementClass: '.b-catalog-premium__banner .close'
		});

		var yandexMap = new Modules.YandexMaps.init({
			mapWrapperId: 'map'
		});

		var designerProfileTabs = new Modules.DesignerProfileTabs.init({
			tabsWrapperClass: '.b-tabs',
			tabsContentWrapperClass: '.b-designer-profile-i',
			tabElementClass: '.b-tabs > li',
			tabContentElementClass: '.b-designer-profile-i > div'
		});

		var profileTabs = new Modules.ProfileTabs.init({
			tabsWrapperClass: '.b-tabs',
			tabsContentWrapperClass: '.b-profile-i',
			tabElementClass: '.b-tabs > li',
			tabContentElementClass: '.b-profile-i > div'
		});

		var loadMoreButton = new Modules.LoadMoreButton.init({
			itemsWrapperClass: '.b-profile__tab.item-2 table',
			buttonLoadClass: '.b-profile__tab.item-2 .load-more',
			count: 4,
			tabsContentWrapperClass: '.b-designer-profile-i',
			tabContentElementClass: '.b-designer-profile-i > div',
			ajaxUrl: ''
		});

		var couponPopup = new Modules.CouponPopup.init({
			popupOverlayClass: '.b-overlay',
			popupElementClass: '.b-profile',
			openClickElementClass: '.private-office a',
			closeClickElementClass: '.b-profile .close',
			ajaxUrl: ''
		});

		var profileOrdersPopup = new Modules.ProfileOrdersPopup.init({
			popupElementClass: '.b-profile__orders .item',
			popupElementWrapperClass: '.b-profile-i',
			openClickElementClass: '.b-profile__orders .item-top',
			ajaxUrl: ''
		});
	});
})(jQuery);