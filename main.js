var Modules = (function(self){ return self; }(Modules || {}));


Modules.CouponPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupWrapperClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupWrapper: '',
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
			_data.$popupWrapper = $( _settings.popupWrapperClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){ 
				if(_data.$popupElement.height() < $(window).height())
					_data.$popupElement.css({'margin-top': '-' + (_data.$popupElement.height() / 2) + 'px'});
				else _data.$popupElement.css({'top': '0px'});

				$('body').width($('body').width());
				$('body').addClass('html_noscroll');
				_data.$popupOverlay.addClass('pt-page-current');
				_data.$popupWrapper.addClass('pt-page-current pt-page-current-wrapper');
				_data.$popupElement.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 400);
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(e){
				if(e.target != this) return;

				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.removeClass('pt-page-current');

				setTimeout(function(){
					$('body').removeClass('html_noscroll');
					$('body').width('auto');
					_data.$popupWrapper.removeClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
				}, 400);
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

Modules.FittingPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupWrapperClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupWrapper: '',
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
			_data.$popupWrapper = $( _settings.popupWrapperClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				if(_data.$popupElement.height() < $(window).height())
					_data.$popupElement.css({'margin-top': '-' + (_data.$popupElement.height() / 2) + 'px'});
				else _data.$popupElement.css({'top': '0px'});

				$('body').width($('body').width());
				$('body').addClass('html_noscroll');
				_data.$popupOverlay.addClass('pt-page-current');
				_data.$popupWrapper.addClass('pt-page-current pt-page-current-wrapper');
				_data.$popupElement.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 400);
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(e){
				if(e.target != this) return;

				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.removeClass('pt-page-current');

				setTimeout(function(){
					$('body').removeClass('html_noscroll');
					$('body').width('auto');
					_data.$popupWrapper.removeClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
				}, 400);
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
}(Modules.FittingPopup || {}, jQuery));

Modules.SalePopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupWrapperClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupWrapper: '',
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
			_data.$popupWrapper = $( _settings.popupWrapperClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				if(_data.$popupElement.height() < $(window).height())
					_data.$popupElement.css({'margin-top': '-' + (_data.$popupElement.height() / 2) + 'px'});
				else _data.$popupElement.css({'top': '0px'});

				$('body').width($('body').width());
				$('body').addClass('html_noscroll');
				_data.$popupOverlay.addClass('pt-page-current');
				_data.$popupWrapper.addClass('pt-page-current pt-page-current-wrapper');
				_data.$popupElement.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 400);
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(e){
				if(e.target != this) return;

				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.removeClass('pt-page-current');

				setTimeout(function(){
					$('body').removeClass('html_noscroll');
					$('body').width('auto');
					_data.$popupWrapper.removeClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
				}, 400);
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
}(Modules.SalePopup || {}, jQuery));

Modules.PhoneMask = (function(self, $){
	
	var _settings = {
			phoneInputClass: '',
			mask: ''
		},
		_data = {
			$phoneInput: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$phoneInput = $( _settings.phoneInputClass );

			return self;
		}

		self.phoneOn = function(){
			_data.$phoneInput.mask(_settings.mask);

			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().phoneOn();

				return self;
			}
		}
}(Modules.PhoneMask || {}, jQuery));

Modules.ConsultPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupWrapperClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupWrapper: '',
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
			_data.$popupWrapper = $( _settings.popupWrapperClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				if(_data.$popupElement.height() < $(window).height())
					_data.$popupElement.css({'margin-top': '-' + (_data.$popupElement.height() / 2) + 'px'});
				else _data.$popupElement.css({'top': '0px'});

				$('body').width($('body').width());
				$('body').addClass('html_noscroll');
				_data.$popupOverlay.addClass('pt-page-current');
				_data.$popupWrapper.addClass('pt-page-current pt-page-current-wrapper');
				_data.$popupElement.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 400);
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(e){
				if(e.target != this) return;

				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.removeClass('pt-page-current');

				setTimeout(function(){
					$('body').removeClass('html_noscroll');
					$('body').width('auto');
					_data.$popupWrapper.removeClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
				}, 400);
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
}(Modules.ConsultPopup || {}, jQuery));

Modules.CouponMobMenuPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupWrapperClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			menuOverlayClass: '',
			menuElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupWrapper: '',
			$popupElement: '',
			$openClickElement: '',
			$closeClickElement: '',
			menuOverlay: '',
			menuElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupOverlay = $( _settings.popupOverlayClass );
			_data.$popupWrapper = $( _settings.popupWrapperClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );
			_data.$menuOverlay = $( _settings.menuOverlayClass );
			_data.$menuElement = $( _settings.menuElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				self.closeMenuEvent();

				setTimeout(function(){
					if(_data.$popupElement.height() < $(window).height())
						_data.$popupElement.css({'margin-top': '-' + (_data.$popupElement.height() / 2) + 'px'});
					else _data.$popupElement.css({'top': '0px'});

					$('body').width($('body').width());
					$('body').addClass('html_noscroll');
					_data.$popupOverlay.addClass('pt-page-current');
					_data.$popupWrapper.addClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElement.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

					setTimeout(function(){
						_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
					}, 400);
				}, 400);

				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(){
				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.removeClass('pt-page-current');

				setTimeout(function(){
					$('body').removeClass('html_noscroll');
					$('body').width('auto');
					_data.$popupWrapper.removeClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
				}, 400);
				return false;
			});
			
			return self;
		}

		self.closeMenuEvent = function(){
			_data.$menuElement.addClass('pt-page-moveToLeft-Menu');

			setTimeout(function(){
				_data.$menuElement.removeClass('pt-page-current pt-page-visible pt-page-moveToLeft-Menu');
				_data.$menuOverlay.removeClass('pt-page-current');
			}, 400);
			
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
				self.setSettings(params).setConfig().openPopupEvent().closePopupEvent().closeMenuEvent();

				return self;
			}
		}
}(Modules.CouponMobMenuPopup || {}, jQuery));

Modules.CatalogItemPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupWrapperClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			popupOverlayCityClass: '',
			popupWrapperCityClass: '',
			popupElementCityClass: '',
			openClickElementCityClass: '',
			closeClickElementCityClass: '',
			cityElementCityClass: '',
			popupOverlayFittingClass: '',
			popupWrapperFittingClass: '',
			popupElementFittingClass: '',
			openClickElementFittingClass: '',
			closeClickElementFittingClass: '',
			popupOverlaySaleClass: '',
			popupWrapperSaleClass: '',
			popupElementSaleClass: '',
			openClickElementSaleClass: '',
			closeClickElementSaleClass: '',
			topLineCityClass: '',
			topLineCityCloseClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupWrapper: '',
			$popupElement: '',
			$openClickElement: '',
			$closeClickElement: '',
			$popupOverlayCity: '',
			$popupWrapperCity: '',
			$popupElementCity: '',
			$openClickElementCity: '',
			$closeClickElementCity: '',
			$cityElementCity: '',
			$popupOverlayFitting: '',
			$popupWrapperFitting: '',
			$popupElementFitting: '',
			$openClickElementFitting: '',
			$closeClickElementFitting: '',
			$popupOverlaySale: '',
			$popupWrapperSale: '',
			$popupElementSale: '',
			$openClickElementSale: '',
			$closeClickElementSale: '',
			$topLineCloseCity: '',
			$topLineCity: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupOverlay = $( _settings.popupOverlayClass );
			_data.$popupWrapper = $( _settings.popupWrapperClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );
			_data.$popupOverlayCity = $( _settings.popupOverlayCityClass );
			_data.$popupWrapperCity = $( _settings.popupWrapperCityClass );
			_data.$popupElementCity = $( _settings.popupElementCityClass );
			_data.$openClickElementCity = $( _settings.openClickElementCityClass );
			_data.$closeClickElementCity = $( _settings.closeClickElementCityClass );
			_data.$cityElementCity = $( _settings.cityElementCityClass );
			_data.$topLineCity = $( _settings.topLineCityClass );
			_data.$topLineCloseCity = $( _settings.topLineCloseCityClass );

			_data.$popupOverlayFitting = $( _settings.popupOverlayFittingClass );
			_data.$popupWrapperFitting = $( _settings.popupWrapperFittingClass );
			_data.$popupElementFitting = $( _settings.popupElementFittingClass );
			_data.$openClickElementFitting = $( _settings.openClickElementFittingClass );
			_data.$closeClickElementFitting = $( _settings.closeClickElementFittingClass );

			_data.$popupOverlaySale = $( _settings.popupOverlaySaleClass );
			_data.$popupWrapperSale = $( _settings.popupWrapperSaleClass );
			_data.$popupElementSale = $( _settings.popupElementSaleClass );
			_data.$openClickElementSale = $( _settings.openClickElementSaleClass );
			_data.$closeClickElementSale = $( _settings.closeClickElementSaleClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(e){

				if (e.ctrlKey || e.metaKey) {
					//Ecли нажали с контролом, то модальное не открываем
					return;
				}
      
                                id = $(this).closest('.b-catalog__item').data('id');
                                $.ajax({
                                    url: '/api/item.php?id=' + id,
                                    success: function (data) {
                                        $('.b-catalog__item-pop-up-i').html(data);
  
                                        if (_data.$popupElement.height() < $(window).height())
                                            _data.$popupElement.css({'margin-top': '-' + (_data.$popupElement.height() / 2) + 'px'});
                                        else
                                            _data.$popupElement.css({'top': '0px'});
                                        
                                        if($(_settings.popupElementClass).height() < $(window).height())
                                                $(_settings.popupElementClass).css({'margin-top': '-' + ($(_settings.popupElementClass).height() / 2) + 'px'});
                                        else $(_settings.popupElementClass).css({'top': '0px'});

                                        var element = $('.b-catalog__item-pop-up__r-arr, .b-catalog__item-pop-up__l-arr');
                                        element.css('top', $(_settings.popupWrapperClass).scrollTop() + $(window).height()/2 - element.height()/2);

                                        var elementTwo = $('.b-popup-wrapper__catalog .close');
			    						elementTwo.css('top', $(_settings.popupWrapperClass).scrollTop() + 25);

                                        $('body').width($('body').width());
                                        $('body').addClass('html_noscroll');
                                        $(_settings.popupOverlayClass).addClass('pt-page-current');
                                        $(_settings.popupWrapperClass).addClass('pt-page-current pt-page-current-wrapper');
                                        $(_settings.popupElementClass).addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

                                        setTimeout(function(){
                                                $(_settings.popupElementClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight');
                                        }, 400);
                                        
                                        $('.b-catalog__item-pop-up-i .b-item__middle').css('min-height', '585px');
                                        
                                        MagicZoom.refresh();

                                        Modules.ItemTabs.init({
                                                tabsWrapperClass: '.b-item-tabs',
                                                tabsContentWrapperClass: '.b-item__middle',
                                                tabElementClass: '.b-item-tabs > li',
                                                tabContentElementClass: '.b-item__middle .b-item__tab'
                                        });

                                    }
                                });
                                
                                 
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(e){
				if(e.target != this) return;
 
				$(_settings.popupElementClass).addClass('pt-page-moveToRight pt-page-moveFromLeft');
				$(_settings.popupOverlayClass).removeClass('pt-page-current');

				setTimeout(function(){
					$('body').removeClass('html_noscroll');
					$('body').width('auto');
					$(_settings.popupWrapperClass).removeClass('pt-page-current pt-page-current-wrapper');
					$(_settings.popupElementClass).removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
				}, 400);
				return false;
			});
			
			return self;
		}

		self.closePopupKeypressEvent = function(){
			$(document).on('keydown', function(e){
				if ( e.keyCode == 27 ) {
 
					$(_settings.popupElementClass).addClass('pt-page-moveToRight pt-page-moveFromLeft');
					$(_settings.popupOverlayClass).removeClass('pt-page-current');

					setTimeout(function(){
						$('body').removeClass('html_noscroll');
						$('body').width('auto');
						$(_settings.popupWrapperClass).removeClass('pt-page-current pt-page-current-wrapper');
						$(_settings.popupElementClass).removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
					}, 400);

					return false;
				}
			});
			
			return self;
		}

		self.showNextPopup = function(){
			$(document).on('click', '.b-catalog__item-pop-up__r-arr', function(e){

			             var id = $(this).data('id'); 
                                        $.ajax({
                                            url: '/api/item.php?id=' + id,
                                            success: function (data) { 
                                                $(_settings.popupElementClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight'); 
                                                $('.b-catalog__item-pop-up-i').html(data); 
                                                $('.b-catalog__item-pop-up-i .b-item__middle').css('min-height', '585px'); 
                                                if ($(_settings.popupElementClass).height() < $(window).height())
                                                    $(_settings.popupElementClass).css({'margin-top': '-' + ($(_settings.popupElementClass).height() / 2) + 'px'});
                                                else
                                                    $(_settings.popupElementClass).css({'top': '0px'});

                                                $(_settings.popupElementClass).addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

                                                MagicZoom.refresh();

                                                Modules.ItemTabs.init({
                                                    tabsWrapperClass: '.b-item-tabs',
                                                    tabsContentWrapperClass: '.b-item__middle',
                                                    tabElementClass: '.b-item-tabs > li',
                                                    tabContentElementClass: '.b-item__middle .b-item__tab'
                                                }); 
                                                $(_settings.popupElementClass).addClass('pt-page-moveToRight pt-page-moveFromLeft');

                                            }
                                        });

				return false;
			});

			return self;
		}

		self.showPrevPopup = function(){
			$(document).on('click', '.b-catalog__item-pop-up__l-arr', function(e){
 
                            var id = $(this).data('id'); 
                            $.ajax({
                                url: '/api/item.php?id=' + id,
                                success: function (data) { 
                                    $(_settings.popupElementClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight'); 
                                    $('.b-catalog__item-pop-up-i').html(data); 
                                    $('.b-catalog__item-pop-up-i .b-item__middle').css('min-height', '585px'); 
                                    if ($(_settings.popupElementClass).height() < $(window).height())
                                        $(_settings.popupElementClass).css({'margin-top': '-' + ($(_settings.popupElementClass).height() / 2) + 'px'});
                                    else
                                        $(_settings.popupElementClass).css({'top': '0px'});

                                    $(_settings.popupElementClass).addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

                                    MagicZoom.refresh();

                                    Modules.ItemTabs.init({
                                        tabsWrapperClass: '.b-item-tabs',
                                        tabsContentWrapperClass: '.b-item__middle',
                                        tabElementClass: '.b-item-tabs > li',
                                        tabContentElementClass: '.b-item__middle .b-item__tab'
                                    }); 
                                    $(_settings.popupElementClass).addClass('pt-page-moveToRight pt-page-moveFromLeft');

                                }
                            });

                            return false;
			});

			return self;
		}

		self.showNextKeypressPopup = function(){
			$(document).on('keydown', function(e){
				if ( e.keyCode == 39 ) { 
                                    var id = $('.b-catalog__item-pop-up__r-arr').data('id');
                                    if(id == undefined) {
                                        return false;
                                    }
                                       $.ajax({
                                           url: '/api/item.php?id=' + id,
                                           success: function (data) { 
                                               $(_settings.popupElementClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight'); 
                                               $('.b-catalog__item-pop-up-i').html(data); 
                                               $('.b-catalog__item-pop-up-i .b-item__middle').css('min-height', '585px'); 
                                               if ($(_settings.popupElementClass).height() < $(window).height())
                                                   $(_settings.popupElementClass).css({'margin-top': '-' + ($(_settings.popupElementClass).height() / 2) + 'px'});
                                               else
                                                   $(_settings.popupElementClass).css({'top': '0px'});

                                               $(_settings.popupElementClass).addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

                                               MagicZoom.refresh();

                                               Modules.ItemTabs.init({
                                                   tabsWrapperClass: '.b-item-tabs',
                                                   tabsContentWrapperClass: '.b-item__middle',
                                                   tabElementClass: '.b-item-tabs > li',
                                                   tabContentElementClass: '.b-item__middle .b-item__tab'
                                               }); 
                                               $(_settings.popupElementClass).addClass('pt-page-moveToRight pt-page-moveFromLeft');

                                           }
                                       });
				    return false;
				}
			});

			return self;
		}

		self.showPrevKeypressPopup = function(){
			$(document).on('keydown', function(e){
				if ( e.keyCode == 37 ) {
					 
                                 var id = $('.b-catalog__item-pop-up__l-arr').data('id'); 
                                 
                                    if(id == undefined) {
                                        return false;
                                    }
                                 
                                       $.ajax({
                                           url: '/api/item.php?id=' + id,
                                           success: function (data) { 
                                               $(_settings.popupElementClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight'); 
                                               $('.b-catalog__item-pop-up-i').html(data); 
                                               $('.b-catalog__item-pop-up-i .b-item__middle').css('min-height', '585px'); 
                                               if ($(_settings.popupElementClass).height() < $(window).height())
                                                   $(_settings.popupElementClass).css({'margin-top': '-' + ($(_settings.popupElementClass).height() / 2) + 'px'});
                                               else
                                                   $(_settings.popupElementClass).css({'top': '0px'});

                                               $(_settings.popupElementClass).addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

                                               MagicZoom.refresh();

                                               Modules.ItemTabs.init({
                                                   tabsWrapperClass: '.b-item-tabs',
                                                   tabsContentWrapperClass: '.b-item__middle',
                                                   tabElementClass: '.b-item-tabs > li',
                                                   tabContentElementClass: '.b-item__middle .b-item__tab'
                                               }); 
                                               $(_settings.popupElementClass).addClass('pt-page-moveToRight pt-page-moveFromLeft');

                                           }
                                       });

					return false;
				}
			});

			return self;
		}

		self.scrollEvent = function(){
			var element = $('.b-catalog__item-pop-up__r-arr, .b-catalog__item-pop-up__l-arr');
			var elementTwo = $('.b-popup-wrapper__catalog .close');

			$(_settings.popupWrapperClass).on('scroll', function(e) {
			    element.css('top', $(_settings.popupWrapperClass).scrollTop() + $(window).height()/2 - element.height()/2);
			    elementTwo.css('top', $(_settings.popupWrapperClass).scrollTop() + 25);
			});
			
			return self;
		}

		self.showPopupEvent = function(){
			$(_settings.popupWrapperClass).addClass('pt-page-current pt-page-current-wrapper');
			$(_settings.popupElementClass).addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

			setTimeout(function(){
				$(_settings.popupElementClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight');
			}, 400);
			
			return self;
		}
		
		self.hidePopupEvent = function(){
			$(_settings.popupElementClass).addClass('pt-page-moveToRight pt-page-moveFromLeft');

			setTimeout(function(){
				$(_settings.popupWrapperClass).removeClass('pt-page-current pt-page-current-wrapper');
				$(_settings.popupElementClass).removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
			}, 400);
			
			return self;
		}

		self.openCityPopupEvent = function(){
			$(document).on('click', _settings.openClickElementCityClass, function(){
				self.hidePopupEvent();

				setTimeout(function(){
					if($(_settings.popupElementCityClass).height() < $(window).height())
						$(_settings.popupElementCityClass).css({'margin-top': '-' + ($(_settings.popupElementCityClass).height() / 2) + 'px'});
					else $(_settings.popupElementCityClass).css({'top': '0px'});

					$(_settings.popupWrapperCityClass).addClass('pt-page-current pt-page-current-wrapper');
					$(_settings.popupElementCityClass).addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

					setTimeout(function(){
						$(_settings.popupElementCityClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight');
					}, 400);
				}, 400);
				return false;
			});
			
			return self;
		}

		self.closeCityPopup = function(){		
			$(_settings.popupElementCityClass).addClass('pt-page-moveToRight pt-page-moveFromLeft');

			setTimeout(function(){
				$(_settings.popupWrapperCityClass).removeClass('pt-page-current pt-page-current-wrapper');
				$(_settings.popupElementCityClass).removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
				self.showPopupEvent();
			}, 400);
		
			return self;
		}
		
		self.closeCityPopupEvent = function(){
			$(document).on('click', _settings.closeClickElementCityClass, function(e){
				if(e.target != this) return;

				self.closeCityPopup();

				return false;
			});
			
			return self;
		}

		self.closeCityTopLine = function(){
				_data.$topLineCity.addClass('pt-page-heightOffDelay');
			return self;
		}

		self.closeCityTopLineEvent = function(){
			$(document).on('click', _settings.topLineCloseCityClass, function(){
				self.closeCityTopLine();

				return false;
			});
			
			return self;
		}

		self.chooseCityEvent = function(){
			$(document).on('click', _settings.popupElementCityClass + ' ul a', function(){
				$(_settings.cityElementCityClass).text($(this).text());

				self.closeCityPopup().closeCityTopLine();
				return false;
			});
			
			return self;
		}

		self.openFittingPopupEvent = function(){
			$(document).on('click', _settings.openClickElementFittingClass, function(){
				self.hidePopupEvent();
				
				setTimeout(function(){
					if(_data.$popupElementFitting.height() < $(window).height())
						_data.$popupElementFitting.css({'margin-top': '-' + (_data.$popupElementFitting.height() / 2) + 'px'});
					else _data.$popupElementFitting.css({'top': '0px'});
					_data.$popupWrapperFitting.addClass('pt-page-current pt-page-current-wrapper');
					// _data.$popupOverlay.addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');
					_data.$popupElementFitting.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');
					setTimeout(function(){
						// _data.$popupOverlay.removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
						_data.$popupElementFitting.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
					}, 400);
				}, 400);
				return false;
			});
			
			return self;
		}
		self.closeFittingPopupEvent = function(){
			$(document).on('click', _settings.closeClickElementFittingClass, function(e){
				if(e.target != this) return;
				_data.$popupElementFitting.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				setTimeout(function(){
					_data.$popupWrapperFitting.removeClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElementFitting.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
					self.showPopupEvent();
				}, 400);
				return false;
			});
			
			return self;
		}
		self.openSalePopupEvent = function(){
			$(document).on('click', _settings.openClickElementSaleClass, function(){
				self.hidePopupEvent();
				setTimeout(function(){
					if(_data.$popupElementSale.height() < $(window).height())
						_data.$popupElementSale.css({'margin-top': '-' + (_data.$popupElementSale.height() / 2) + 'px'});
					else _data.$popupElementSale.css({'top': '0px'});
					_data.$popupWrapperSale.addClass('pt-page-current pt-page-current-wrapper');
					// _data.$popupOverlay.addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');
					_data.$popupElementSale.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');
					setTimeout(function(){
						// _data.$popupOverlay.removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
						_data.$popupElementSale.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
					}, 400);
				}, 400);
				return false;
			});
			
			return self;
		}
		self.closeSalePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementSaleClass, function(e){
				if(e.target != this) return;
				_data.$popupElementSale.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				setTimeout(function(){
					_data.$popupWrapperSale.removeClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElementSale.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
					self.showPopupEvent();
				}, 400);
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
				self.setSettings(params).setConfig().openPopupEvent().closePopupEvent().openCityPopupEvent()
				.closeCityPopupEvent().chooseCityEvent().closeCityTopLineEvent().closePopupKeypressEvent()
				.openFittingPopupEvent().openSalePopupEvent().closeFittingPopupEvent().closeSalePopupEvent()
				.showNextPopup().showPrevPopup().scrollEvent().showPrevKeypressPopup().showNextKeypressPopup();

				return self;
			}
		}
}(Modules.CatalogItemPopup || {}, jQuery));

Modules.FullBasketPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupWrapperClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			deliveryElementClass: '',
			popupOverlayBuyClass: '',
			popupWrapperBuyClass: '',
			popupElementBuyClass: '',
			openClickElementBuyClass: '',
			closeClickElementBuyClass: '',
			popupOverlayResultClass: '',
			popupWrapperResultClass: '',
			popupElementResultClass: '',
			openClickElementResultClass: '',
			closeClickElementResultClass: '',
			deleteItemElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupWrapper: '',
			$popupElement: '',
			$openClickElement: '',
			$closeClickElement: '',
			$deliveryElement: '',
			$popupOverlayBuy: '',
			$popupWrapperBuy: '',
			$popupElementBuy: '',
			$openClickElementBuy: '',
			$closeClickElementBuy: '',
			$popupOverlayResult: '',
			$popupWrapperResult: '',
			$popupElementResult: '',
			$openClickElementResult: '',
			$closeClickElementResult: '',
			$deleteItemElement: '',
			resultTrigger: false
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupOverlay = $( _settings.popupOverlayClass );
			_data.$popupWrapper = $( _settings.popupWrapperClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );
			_data.$deliveryElement = $( _settings.deliveryElementClass );
			_data.$popupOverlayBuy = $( _settings.popupOverlayBuyClass );
			_data.$popupWrapperBuy = $( _settings.popupWrapperBuyClass );
			_data.$popupElementBuy = $( _settings.popupElementBuyClass );
			_data.$openClickElementBuy = $( _settings.openClickElementBuyClass );
			_data.$closeClickElementBuy = $( _settings.closeClickElementBuyClass );
			_data.$popupOverlayResult = $( _settings.popupOverlayResultClass );
			_data.$popupWrapperResult = $( _settings.popupWrapperResultClass );
			_data.$popupElementResult = $( _settings.popupElementResultClass );
			_data.$openClickElementResult = $( _settings.openClickElementResultClass );
			_data.$closeClickElementResult = $( _settings.closeClickElementResultClass );
			_data.$deleteItemElement = $( _settings.deleteItemElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
  
                                 $('.b-popup-wrapper__catalog').click();

				console.log($(_settings.popupElementClass).height());
				console.log($(window).height());


                                 var id = $('.size dd.active').attr('data-id'); 

                                $.ajax({
                                    url: '/api/add2cart.php?id=' + id,
                                    dataType: 'json',
                                    success: function (data) {
                                        $('.b-main-nav__bag').html(data.top);
                                        $('.b-popup-wrapper__basket .b-cart-order-basket').html(data.popup);
                                        $('select').niceSelect();
                                        if($(_settings.popupElementClass).height() < $(window).height())
                                                $(_settings.popupElementClass).css({'margin-top': '-' + ($(_settings.popupElementClass).height() / 2) + 'px', 'top': '50%'});
                                        else $(_settings.popupElementClass).css({'top': '0px', 'margin-top': 'auto'});

                                        $('body').width($('body').width());
                                        $('body').addClass('html_noscroll');
                                        _data.$popupWrapper.addClass('pt-page-current pt-page-current-wrapper');
                                        _data.$popupOverlay.addClass('pt-page-current');
                                        _data.$popupElement.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

                                        setTimeout(function(){
                                                _data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
                                        }, 400);


                                    }
                                });
 
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(e){
				if(e.target != this) return;

				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.removeClass('pt-page-current');

				setTimeout(function(){
					$('body').removeClass('html_noscroll');
					$('body').width('auto');
					_data.$popupWrapper.removeClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
				}, 400);
				return false;
			});
			
			return self;
		}

		self.showPopupEvent = function(){
			_data.$popupWrapper.addClass('pt-page-current pt-page-current-wrapper');
			_data.$popupElement.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

			setTimeout(function(){
				_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
			}, 400);
			
			return self;
		}
		
		self.hidePopupEvent = function(){
			_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');

			setTimeout(function(){
				_data.$popupWrapper.removeClass('pt-page-current pt-page-current-wrapper');
				_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
			}, 400);
			
			return self;
		}

		self.chooseDeliveryEvent = function(){
			$(document).on('click', _settings.deliveryElementClass, function(){
				if($(this).data('additional'))
					_data.$popupElement.find($('.' + $(this).data('additional'))).show();
				else {
					_data.$popupElement.find('.data').each(function(){
						$('.' + $(this).data('additional')).hide();
					})
				}
			});
			
			return self;
		}

		self.openBuyPopupEvent = function(){
			$(document).on('click', _settings.openClickElementBuyClass, function(){
 				self.hidePopupEvent(); 
				setTimeout(function(){
					if(_data.$popupElementBuy.height() < $(window).height())
						_data.$popupElementBuy.css({'margin-top': '-' + (_data.$popupElementBuy.height() / 2) + 'px'});
					else _data.$popupElementBuy.css({'top': '0px'});

					_data.$popupWrapperBuy.addClass('pt-page-current pt-page-current-wrapper');
					// _data.$popupOverlay.addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');
					_data.$popupElementBuy.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

					setTimeout(function(){
						// _data.$popupOverlay.removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
						_data.$popupElementBuy.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
					}, 400);
				}, 400);
				return false;
			});
			
			return self;
		}

		self.deleteItemEvent = function(){
			$(document).on('click', _settings.deleteItemElementClass, function(){
				var obj = $(this);
				var items = _data.$popupElement.find(_data.$deleteItemElement.parent());
				obj.parent().addClass('pt-page-moveToRight pt-page-moveFromLeft');
				setTimeout(function(){
					obj.parent().remove();
				}, 400);
				if(items.length == 1){
					items.remove();
					
					_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
					_data.$popupOverlay.removeClass('pt-page-current');
					setTimeout(function(){
						$('body').removeClass('html_noscroll');
						$('body').width('auto');
						_data.$popupWrapper.removeClass('pt-page-current pt-page-current-wrapper');
						_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
					}, 400);
				}
				
				return false;
			});
		
			return self;
		}
		
		self.closeBuyPopupEvent = function(){
			$(document).on('click', _settings.closeClickElementBuyClass, function(e){
				if(e.target != this) return;

				_data.$popupElementBuy.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				// _data.$popupOverlay.addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');

				setTimeout(function(){
					_data.$popupWrapperBuy.removeClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElementBuy.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
					// _data.$popupOverlay.removeClass('pt-page-current pt-page-moveToBottomFade pt-page-moveFromTopFade');
					self.showPopupEvent();
				}, 400);
				return false;
			});
			
			return self;
		}

		self.openResultPopupEvent = function(){
			$(document).on('click', _settings.openClickElementResultClass, function(){
				console.log($(this).data('additionalbuy'));
				if(_data.resultTrigger == false) {
					_data.$popupElement.find($('.' + $(this).data('additionalbuy'))).show();
					_data.resultTrigger = true;
				} else {
					$('.' + $(this).data('additionalbuy')).hide();
					
					_data.resultTrigger = false;
				}

				return false;
			});

			return self;
		}

		// self.openResultPopupEvent = function(){
		// 	$(document).on('click', _settings.openClickElementResultClass, function(){
		// 		self.hidePopupEvent();
				
		// 		setTimeout(function(){
		// 			if(_data.$popupElementResult.height() < $(window).height())
		// 				_data.$popupElementResult.css({'margin-top': '-' + (_data.$popupElementResult.height() / 2) + 'px'});
		// 			else _data.$popupElementResult.css({'top': '0px'});

		// 			_data.$popupWrapperResult.addClass('pt-page-current pt-page-current-wrapper');
		// 			// _data.$popupOverlay.addClass('pt-page-current pt-page-moveToTopFade pt-page-moveFromBottomFade');
		// 			_data.$popupElementResult.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

		// 			setTimeout(function(){
		// 				// _data.$popupOverlay.removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
		// 				_data.$popupElementResult.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
		// 			}, 400);
		// 		}, 400);
		// 		return false;
		// 	});
			
		// 	return self;
		// }
		
		// self.closeResultPopupEvent = function(){
		// 	$(document).on('click', _settings.closeClickElementResultClass, function(e){
		// 		if(e.target != this) return;

		// 		_data.$popupElementResult.addClass('pt-page-moveToRight pt-page-moveFromLeft');
		// 		// _data.$popupOverlay.addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');

		// 		setTimeout(function(){
		// 			_data.$popupWrapperResult.removeClass('pt-page-current pt-page-current-wrapper');
		// 			_data.$popupElementResult.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
		// 			// _data.$popupOverlay.removeClass('pt-page-current pt-page-moveToBottomFade pt-page-moveFromTopFade');
		// 			self.showPopupEvent();
		// 		}, 400);
		// 		return false;
		// 	});
			
		// 	return self;
		// }
		
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
				self.setSettings(params).setConfig().openPopupEvent().closePopupEvent().chooseDeliveryEvent().openBuyPopupEvent().closeBuyPopupEvent()
				.deleteItemEvent()
				.openResultPopupEvent();
				//.closeResultPopupEvent();

				return self;
			}
		}
}(Modules.FullBasketPopup || {}, jQuery));

Modules.FullBasketBuyPopup = (function(self, $){
	
	var _settings = {
			popupOverlayBuyClass: '',
			popupWrapperBuyClass: '',
			popupElementBuyClass: '',
			openClickElementBuyClass: '',
			closeClickElementBuyClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlayBuy: '',
			$popupWrapperBuy: '',
			$popupElementBuy: '',
			$openClickElementBuy: '',
			$closeClickElementBuy: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupOverlayBuy = $( _settings.popupOverlayBuyClass );
			_data.$popupWrapperBuy = $( _settings.popupWrapperBuyClass );
			_data.$popupElementBuy = $( _settings.popupElementBuyClass );
			_data.$openClickElementBuy = $( _settings.openClickElementBuyClass );
			_data.$closeClickElementBuy = $( _settings.closeClickElementBuyClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementBuyClass, function(){
				if(_data.$popupElementBuy.height() < $(window).height())
					_data.$popupElementBuy.css({'margin-top': '-' + (_data.$popupElementBuy.height() / 2) + 'px'});
				else _data.$popupElementBuy.css({'top': '0px'});

				$('body').width($('body').width());
				$('body').addClass('html_noscroll');
				_data.$popupWrapperBuy.addClass('pt-page-current pt-page-current-wrapper');
				_data.$popupOverlayBuy.addClass('pt-page-current');
				_data.$popupElementBuy.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupElementBuy.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 400);
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementBuyClass, function(e){
				if(e.target != this) return;

				_data.$popupElementBuy.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlayBuy.removeClass('pt-page-current');

				setTimeout(function(){
					$('body').removeClass('html_noscroll');
					$('body').width('auto');
					_data.$popupWrapperBuy.removeClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElementBuy.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
				}, 400);
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
}(Modules.FullBasketBuyPopup || {}, jQuery));

Modules.MobileMenu = (function(self, $){
	
	var _settings = {
			menuOverlayClass: '',
			menuElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: ''
		},
		_data = {
			$menuOverlay: '',
			$menuElement: '',
			$openClickElement: '',
			$closeClickElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$menuOverlay = $( _settings.menuOverlayClass );
			_data.$menuElement = $( _settings.menuElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			return self;
		}
		
		self.openMenuEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				$('body').width($('body').width());
				$('html, body').addClass('html_noscroll');
				_data.$menuOverlay.addClass('pt-page-current');
				_data.$menuElement.addClass('pt-page-current pt-page-current-wrapper pt-page-visible pt-page-moveFromLeft-Menu');

				setTimeout(function(){
					_data.$menuElement.removeClass('pt-page-moveFromLeft-Menu');
				}, 400);
				return false;
			});
			
			return self;
		}
		
		self.closeMenuEvent = function(){
			$(document).on('click, touchstart', _settings.closeClickElementClass, function(){
				_data.$menuElement.addClass('pt-page-moveToLeft-Menu');
				_data.$menuOverlay.removeClass('pt-page-current');

				setTimeout(function(){
					$('html, body').removeClass('html_noscroll');
					$('body').width('auto');
					_data.$menuElement.removeClass('pt-page-current pt-page-current-wrapper pt-page-visible pt-page-moveToLeft-Menu');
				}, 400);
				return false;
			});
			
			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openMenuEvent().closeMenuEvent();

				return self;
			}
		}
}(Modules.MobileMenu || {}, jQuery));

Modules.СityPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupWrapperClass: '',
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
			$popupWrapper: '',
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
			_data.$popupWrapper = $( _settings.popupWrapperClass );
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
				if(_data.$popupElement.height() < $(window).height())
					_data.$popupElement.css({'margin-top': '-' + (_data.$popupElement.height() / 2) + 'px'});
				else _data.$popupElement.css({'top': '0px'});

				$('body').width($('body').width());
				$('body').addClass('html_noscroll');
				_data.$popupOverlay.addClass('pt-page-current');
				_data.$popupWrapper.addClass('pt-page-current pt-page-current-wrapper');
				_data.$popupElement.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 400);
				return false;
			});
			
			return self;
		}

		self.closePopup = function(){		
			_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
			_data.$popupOverlay.removeClass('pt-page-current');

			setTimeout(function(){
				$('body').removeClass('html_noscroll');
				$('body').width('auto');
				_data.$popupWrapper.removeClass('pt-page-current pt-page-current-wrapper');
				_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
			}, 400);
		
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(e){
				if(e.target != this) return;

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
                                $.ajax({
                                    url: '/api/setCity.php?id=28'
                                });
				return false;
			});
			
			return self;
		}

		self.chooseCityEvent = function(){
			$(document).on('click', _settings.popupElementClass + ' ul a', function(){ 
                                var id = $(this).data('id');
				_data.$cityElement.text($(this).text()).attr('data-id', id);
                                $.ajax({
                                    url: '/api/setCity.php?id=' + id
                                });
				self.closePopup().closeTopLine();
                                if(typeof(addPoints) == 'function') {
                                    addPoints();
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
					// _data.$popupElement.removeClass('pt-page-heightOff');
					// _data.$popupElement.addClass('pt-page-heightOn');
					_data.$popupElement.show();
					_data.$popupElement.find('input').focus();
					_data.trigger = true;
				} else {
					// _data.$popupElement.addClass('pt-page-heightOff');
					// _data.$popupElement.removeClass('pt-page-heightOn');
					_data.$popupElement.hide();
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
 					_data.$popupElement.addClass('pt-page-current pt-page-visible').css({
 						'left': $('.b-main-nav-i').offset().left + $('.b-main-nav-i').width() - _data.$popupElement.width(),
 						'top': $('.b-main-nav-i').offset().top + $('.b-main-nav-i').height()
 					});
					_data.trigger = true;

					// setTimeout(function(){
					// 	_data.$popupElement.removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
					// }, 400);
				} else {
					// _data.$popupElement.addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');
					_data.trigger = false;
					_data.$popupElement.removeClass('pt-page-current pt-page-visible');

					// setTimeout(function(){
					// 	_data.$popupElement.removeClass('pt-page-current pt-page-visible');
					// }, 400);
				}
				return false;
			});
		
			return self;
		}
                
               
 		self.resizePageEvent = function(){
 			$(window).on('resize', function(){
 				_data.$popupElement.css({
 					'left': $('.b-main-nav-i').offset().left + $('.b-main-nav-i').width() - _data.$popupElement.width(),
 					'top': $('.b-main-nav-i').offset().top + $('.b-main-nav-i').height()
 				});
 				_data.trigger = true;
 
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
				var items = _data.$popupElement.find(_settings.itemElementClass);
                                var id = $(this).attr('data-id');
                                $.ajax({
                                    url: '/api/removeFromCart.php?id=' + id,
                                     success: function(data) {
                                        $('.b-main-nav__bag').html(data);
                                        $('select').niceSelect();
                                    }
                                });

				obj.closest(_settings.itemElementClass).addClass('pt-page-moveToRight pt-page-moveFromLeft');

				setTimeout(function(){
					obj.closest(_settings.itemElementClass).remove();
				}, 400);

				if(items.length == 1){
					items.parent().remove();
					_data.$popupElement.find('.empty').show();
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
				self.setSettings(params).setConfig().openClosePopupEvent().countPlusItemEvent().countMinusItemEvent().deleteItemEvent().resizePageEvent();

				return self;
			}
		}
}(Modules.BasketPopup || {}, jQuery));

Modules.CarpetType = (function(self, $){
	
	var _settings = {
			blockElementClass: '',
			hoverElementClass: '',
			hoverElementWrapperClass: '',
			imageElementClass: ''
		},
		_data = {
			$blockElement: '',
			$hoverElementWrapper: '',
			$hoverElement: '',
			$imageElement: '',
			firstTime: true,
			trigger: true
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$blockElement = $( _settings.blockElementClass );
			_data.$hoverElementWrapper = $( _settings.hoverElementWrapperClass );
			_data.$hoverElement = $( _settings.hoverElementClass );
			_data.$imageElement = $( _settings.imageElementClass );

			_data.$blockElement.find('.default-item').find(_settings.imageElementClass).addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');
			_data.$blockElement.find('.default-item').addClass('active');

			setTimeout(function(){
				_data.$blockElement.find('.default-item').find(_settings.imageElementClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight');
			}, 400);

			return self;
		}
		
		self.hoverEvent = function(){
			$(document).on('mouseenter', _settings.hoverElementClass, function(e){
				e.stopPropagation();

				var obj = $(this);
				var old = _data.$blockElement.find('.active');
				_data.trigger = true;

				if($(this).closest('dd') != old){
					_data.$hoverElement.closest('dd').removeClass('active');

					old.parent().find(_settings.imageElementClass).addClass('pt-page-moveToRight pt-page-moveFromLeft');

					old.parent().find(_settings.imageElementClass).removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
					
					obj.closest('dd').find(_settings.imageElementClass).addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');
					obj.closest('dd').addClass('active');

					setTimeout(function(){
						obj.closest('dd').find(_settings.imageElementClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight');
					}, 400);
				}
				
				return false;
			});
		
			return self;
		}

		self.hoverOutEvent = function(){
			$(document).on('mouseleave', _settings.hoverElementWrapperClass, function(e){
				e.stopPropagation();

				var old = _data.$blockElement.find('.active');

				old.parent().find(_settings.imageElementClass).removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
				
				_data.$blockElement.find('.default-item').find(_settings.imageElementClass).addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');
				_data.$blockElement.find('.default-item').addClass('active');

				setTimeout(function(){
					_data.$blockElement.find('.default-item').find(_settings.imageElementClass).removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 400);
		
				return false;
			});
		
			return self;
		}

		self.hoverOutEventFix = function(){
			$(document).on('mouseleave', _settings.hoverElementWrapperClass + ' i', function(e){
				return false;
			});
		
			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().hoverEvent().hoverOutEvent().hoverOutEventFix();

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
			mobileFilterElementClass: '',
			filterElementListClass: '',
			addedFiltersClass: '',
			mobileFiltersClass: '',
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
			$mobileFilterElement: '',
			$bottomFilterElement: '',
			$bottomFilterDelete: '',
			$bottomFilterDeleteAll: '',
			$filterItemElement: '',
			$filterElementList: '',
			$addedFilters: '',
			$mobileFilters: '',
			trigger: false,
			mobileTriggerFilter: false,
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
			_data.$mobileFilterElement = $( _settings.mobileFilterElementClass );
			_data.$filterElementList = $( _settings.filterElementListClass );
			_data.$addedFilters = $( _settings.addedFiltersClass );
			_data.$mobileFilters = $( _settings.mobileFiltersClass );

			$(_settings.openClickElementClass + ':not(' + _settings.filterButtonClass + ')').slice(_settings.visibleNum, $(_settings.openClickElementClass + ':not(' + _settings.filterButtonClass + ')').length).parent().hide();

			return self;
		}

		self.setConfigMobile = function(){
			_data.$filterElementList.addClass('pt-page-heightOff');
			_data.$popupElement.addClass('pt-page-heightOff');

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
					// tempOld.siblings(_data.$popupElement).addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');

					obj.addClass('active');
					obj.siblings(_data.$popupElement).addClass('pt-page-current pt-page-visible');					

					tempOld.siblings(_data.$popupElement).removeClass('pt-page-current pt-page-visible');
					
					// setTimeout(function(){
					// 	tempOld.siblings(_data.$popupElement).removeClass('pt-page-current pt-page-visible');
					// 	// obj.siblings(_data.$popupElement).removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
					// }, 400);

					_data.trigger = true;

					_data.$lastClickedElement = obj;
				}else{
					if(_data.trigger == false){
						obj.addClass('active');
						obj.siblings(_data.$popupElement).addClass('pt-page-current pt-page-visible');

						setTimeout(function(){
							// obj.siblings(_data.$popupElement).removeClass('pt-page-moveToTopFade pt-page-moveFromBottomFade');
						}, 400);
						_data.trigger = true;
					} else {
						obj.removeClass('active');
						// obj.siblings(_data.$popupElement).addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');
						obj.siblings(_data.$popupElement).removeClass('pt-page-current pt-page-visible');

						// setTimeout(function(){
						// 	obj.siblings(_data.$popupElement).removeClass('pt-page-current pt-page-visible');
						// }, 400);

						_data.trigger = false;
					}

					_data.$lastClickedElement = obj;
				}

				return false;
			});
		
			return self;
		}

		self.openCloseMobileFiltersEvent = function(){
			$(document).on('click', _settings.mobileFilterElementClass + ':not(' + _settings.filterButtonClass + ')', function(){
                            if(_data.trigger == false){
					_data.$filterElementList.removeClass('pt-page-heightOff');
					_data.$filterElementList.addClass('pt-page-heightOn');

					if($('.b-catalog__sub-nav .tags-list__filter').length > 0)
						$('.b-catalog__sub-nav').show();

					_data.trigger = true;
				} else {
					_data.$filterElementList.addClass('pt-page-heightOff');
					_data.$filterElementList.removeClass('pt-page-heightOn');
					_data.trigger = false;

					setTimeout(function(){
						$('.b-catalog__sub-nav').hide();
					}, 300)
				}
				return false;
			});
		
			return self;
		}

		self.openCloseMobileEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				var obj = $(this);

				if(_data.$lastClickedElement == null){
					_data.$lastClickedElement = obj;
				}

				if(_data.$lastClickedElement.get(0) != obj.get(0)){
					var tempOld = _data.$lastClickedElement;

					tempOld.removeClass('active');
					tempOld.siblings(_data.$popupElement).addClass('pt-page-heightOff').removeClass('pt-page-heightOn');

					$(this).addClass('active');
					$(this).siblings(_data.$popupElement).removeClass('pt-page-heightOff');
					$(this).siblings(_data.$popupElement).addClass('pt-page-heightOn');
					_data.mobileTriggerFilter = true;

					_data.$lastClickedElement = obj;
				} else {
					if(_data.mobileTriggerFilter == false){
						$(this).addClass('active');
						$(this).siblings(_data.$popupElement).removeClass('pt-page-heightOff');
						$(this).siblings(_data.$popupElement).addClass('pt-page-heightOn');
						_data.mobileTriggerFilter = true;
					} else {
						$(this).removeClass('active');
						$(this).siblings(_data.$popupElement).addClass('pt-page-heightOff');
						$(this).siblings(_data.$popupElement).removeClass('pt-page-heightOn');
						_data.mobileTriggerFilter = false;
					}
				}
				return false;
			});
		
			return self;
		}

		self.filterButtonClickEvent = function(){
			$(document).on('click', _settings.filterButtonClass, function() {  
				if(_data.triggerFilter == false){
					$(_settings.openClickElementClass + ':not(' + _settings.filterButtonClass + ')').slice(_settings.visibleNum, $(_settings.openClickElementClass + ':not(' + _settings.filterButtonClass + ')').length).parent().show();
					_data.triggerFilter = true;
                                        $(this).text('СКРЫТЬ ФИЛЬТРЫ');
				} else {
                                        $(this).text('ЕЩЁ ФИЛЬТРЫ');
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
                                
                                name = $(this).attr('name');
                                
				if($(this).prop('checked') == true){
					_data.$addedFilters.show(); 
					$('.tags-list dt').after('<dd class="tags-list__filter" data-name="' + name + '" data-val="' + $(this).val() + '"><span>' + $(this).parent().data('name') + '</span><a href="#" class="del">Удалить</a></dd>');
				} else {
                                    name = name.replace(/\[/g, '\\[');
                                    name = name.replace(/\]/g, '\\]');
                                    val = $(this).val();
				    $('[data-name=' + name + ']').filter('[data-val=' + val + ']').remove();
  
                                    if($('.tags-list__filter:visible').length == 0){
                                            $('.b-catalog__sub-nav').hide();
                                        }
				} 
                                filterCatalog();
			});

			return self;
		}

		self.filterMobileItemElementClickEvent = function(){
			$(document).on('click', _settings.filterItemElementClass + ' > input[type="checkbox"]', function(event){
				event.stopPropagation();
				if($(this).prop('checked') == true){
					_data.$mobileFilters.show();
					$('.tags-list dt').after('<dd class="tags-list__filter" data-id="' + $(this).parent().attr('class') + '"><span>' + $(this).parent().data('name') + '</span><a href="#" class="del">Удалить</a></dd>');

				} else{
					$('*[data-id="' + $(this).parent().attr('class') + '"]').remove();

					if($(_settings.bottomFilterElementClass).length == 0)
						_data.$mobileFilters.hide();
				}
			});

			return self;
		}

		self.bottomFilterDeleteEvent = function(){
			$(document).on('click', _settings.bottomFilterDeleteClass, function(e){
                            
                            t = $(this).parent().attr('data-name'); 
                            t = t.replace(/\[/g, '\\[');
                            t = t.replace(/\]/g, '\\]');
                            val = $(this).parent().attr('data-val'); 
                            if(t.length) {
                                $('[name=' + t + ']').filter('[value=' + val + ']').click(); 
                            }
			    $(this).parent().remove(); 
                            if($(_settings.bottomFilterElementClass).length == 0)
                                    _data.$addedFilters.hide();
 
				return false;
			});

			return self;
		}

		self.bottomFilterDeleteAllEvent = function(){
			$(document).on('click', _settings.bottomFilterDeleteAllClass, function(e){
				$.each($(_settings.bottomFilterElementClass), function( i, val ) { 
					$(this).remove();
				}); 
                                $('#catalog-list-form :checked').attr('checked', false);
                                 $('#catalog-list-form [type=text]').val('');
				_data.$addedFilters.hide(); 
                                
                                filterCatalog();
                                
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
					// _data.$popupElement.addClass('pt-page-moveToBottomFade pt-page-moveFromTopFade');
					_data.trigger = false;
					_data.$popupElement.removeClass('pt-page-current pt-page-visible');

					// setTimeout(function(){
					// 	_data.$popupElement.removeClass('pt-page-current pt-page-visible');
					// }, 400);
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
				if($(window).width() > 1024)
					self.setSettings(params).setConfig().openClosePopupEvent().closeAllEvent().filterButtonClickEvent().filterItemElementClickEvent().bottomFilterDeleteEvent().bottomFilterDeleteAllEvent();
				else 
					self.setSettings(params).setConfig().setConfigMobile().openCloseMobileFiltersEvent().openCloseMobileEvent().filterMobileItemElementClickEvent().bottomFilterDeleteAllEvent().bottomFilterDeleteEvent().filterButtonClickEvent();

				return self;
			}
		}
}(Modules.CatalogFiltersPopup || {}, jQuery));

Modules.MobileMenuItem = (function(self, $){
	
	var _settings = {
			popupElementClass: '',
			openClickElementClass: '',
			cityElementClass: '',
			cityMenuItemClass: ''
		},
		_data = {
			$popupElement: '',
			$openClickElement: '',
			$lastClickedElement: null,
			$cityElement: null,
			$cityMenuItem: null,
			trigger: false
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$cityElement = $( _settings.cityElementClass );
			_data.$cityMenuItem = $( _settings.cityMenuItemClass );

			return self;
		}
		
		self.openClosePopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				var obj = $(this);

				if(_data.$lastClickedElement == null){
					_data.$lastClickedElement = obj;
				}

				if(_data.$lastClickedElement.get(0) != obj.get(0)){
					var tempOld = _data.$lastClickedElement;

					tempOld.siblings(_data.$popupElement).removeClass('pt-page-heightOn active').addClass('pt-page-heightOff');

					obj.siblings(_data.$popupElement).removeClass('pt-page-heightOff').addClass('pt-page-heightOn active');

					_data.trigger = true;

					_data.$lastClickedElement = obj;
				}else{
					if(_data.trigger == false){
						$(this).siblings(_data.$popupElement).removeClass('pt-page-heightOff');
						$(this).siblings(_data.$popupElement).addClass('pt-page-heightOn active');
						_data.trigger = true;
					} else {
						$(this).siblings(_data.$popupElement).addClass('pt-page-heightOff');
						$(this).siblings(_data.$popupElement).removeClass('pt-page-heightOn active');
						_data.trigger = false;
					}

						_data.$lastClickedElement = obj;
					}

				return false;
			});
		
			return self;
		}

		self.chooseCityEvent = function(){
			$(document).on('click', _settings.cityMenuItemClass, function(){
				_data.$cityElement.text($(this).text());

				return false;
			});
			
			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openClosePopupEvent().chooseCityEvent();

				return self;
			}
		}
}(Modules.MobileMenuItem || {}, jQuery));

Modules.ItemMobileTabs = (function(self, $){
	
	var _settings = {
			popupElementClass: '',
			openClickElementClass: ''
		},
		_data = {
			$popupElement: '',
			$openClickElement: '',
			$lastClickedElement: null,
			trigger: false
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );

			return self;
		}
		
		self.openClosePopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				var obj = $(this);

				_data.$openClickElement.removeClass('active');

				if(_data.$lastClickedElement == null){
					_data.$lastClickedElement = obj;
				}

				if(_data.$lastClickedElement.get(0) != obj.get(0)){
					var tempOld = _data.$lastClickedElement;

					tempOld.siblings(_data.$popupElement).removeClass('pt-page-heightOn active').addClass('pt-page-heightOff');

					obj.siblings(_data.$popupElement).removeClass('pt-page-heightOff').addClass('pt-page-heightOn active');

					$(this).addClass('active');

					_data.trigger = true;

					_data.$lastClickedElement = obj;
				}else{
					if(_data.trigger == false){
						$(this).siblings(_data.$popupElement).removeClass('pt-page-heightOff');
						$(this).siblings(_data.$popupElement).addClass('pt-page-heightOn active');
						$(this).addClass('active');

						_data.trigger = true;
					} else {
						$(this).siblings(_data.$popupElement).addClass('pt-page-heightOff');
						$(this).siblings(_data.$popupElement).removeClass('pt-page-heightOn active');
						_data.trigger = false;
					}

						_data.$lastClickedElement = obj;
					}

				return false;
			});
		
			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openClosePopupEvent();

				return self;
			}
		}
}(Modules.ItemMobileTabs || {}, jQuery));

Modules.FixedButton = (function(self, $){
	
	var _settings = {
			buttonElementClass: ''
		},
		_data = {
			$buttonElement: '',
			$offset: 0,
			$offsetleft: 0
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$buttonElement = $( _settings.buttonElementClass );

			var offset = _data.$buttonElement.offset();
			_data.$offset = offset.top - parseInt(_data.$buttonElement.css('padding-top'));
			_data.$offsetLeft = offset.left;

			if($(window).width() < 1024){
				_data.$buttonElement.css({
					'margin-left': '-' + _data.$buttonElement.width()/2 + 'px',
					'left': '50%'
				})
	    	}

			return self;
		}
		
		self.scrollEvent = function(){
			$(window).on('scroll', function(e){
				e.preventDefault();

			    if($(window).scrollTop() >= _data.$offset && $(window).scrollTop() < ($('footer').offset().top - _data.$buttonElement.outerHeight())){
			      _data.$buttonElement.css({
			        'position': 'fixed',
			        'top': '0',
			        'left': _data.$offsetLeft,
			        'z-index': '150',
			        'margin-left': 0
			      });

			      if($(window).width() < 1024)
					_data.$buttonElement.children().eq(0).css({'font-size': 0, 'background-position': '50%'});

			    } else if( $(window).scrollTop() + _data.$buttonElement.outerHeight() > $('footer').offset().top || $(window).scrollTop() < _data.$offset) {
			    	_data.$buttonElement.css({
				        'position': 'absolute',
				        'top': '0',
				        'left': '0'
				      });

			    	if($(window).width() < 1024){
						_data.$buttonElement.children().eq(0).css({'font-size': '12px', 'background-position': '12px 50%'});
						_data.$buttonElement.css({
							'margin-left': '-' + _data.$buttonElement.width()/2 + 'px',
							'left': '50%'
						})
			    	}
			    }
			});
		
			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().scrollEvent();

				return self;
			}
		}
}(Modules.FixedButton || {}, jQuery));

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

Modules.ProductImageMobileFilter = (function(self, $){
	
	var _settings = {
			buttonElementClass: '',
			itemElementClass: '',
			productWrapperClass: ''
		},
		_data = {
			$buttonElement: '',
			$itemElement: '',
			$productWrapper: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$buttonElement = $( _settings.buttonElementClass );
			_data.$itemElement = $( _settings.itemElementClass );
			_data.$productWrapper = $( _settings.productWrapperClass );

			return self;
		}

		self.buttonElementClickEvent = function(){
			$(document).on('click', _settings.buttonElementClass, function(e){
				if(!$(this).hasClass('active')){
					var old = $(this).find('.active');
					_data.$itemElement.removeClass('active');
					old.siblings(_data.$itemElement).addClass('active');

					if(_data.$productWrapper.attr('class').indexOf('big-img') >= 0)
						_data.$productWrapper.removeClass('big-img');
					else
						_data.$productWrapper.addClass('big-img');
				}

				return false;
			});

			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().buttonElementClickEvent();

				return self;
			}
		}
}(Modules.ProductImageMobileFilter || {}, jQuery));

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

Modules.BookmarkBannerPopup = (function(self, $){
	
	var _settings = {
			popupElementClass: '',
			openCloseClickElementClass: ''
		},
		_data = {
			$popupElement: '',
			$openCloseClickElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openCloseClickElement = $( _settings.openCloseClickElementClass );

			_data.$popupElement.addClass('pt-page-heightOff');

			return self;
		}
		
		self.openClosePopupClickEvent = function(){ 
			$(document).on('click', _settings.openCloseClickElementClass, function() { 
				if(_data.$openCloseClickElement.attr('class') != 'active'){
					_data.$popupElement.removeClass('pt-page-heightOff');
					_data.$popupElement.addClass('pt-page-heightOn');
					_data.$openCloseClickElement.addClass('active');
				} else {
					_data.$openCloseClickElement.removeClass('active');
					_data.$popupElement.addClass('pt-page-heightOff');
					_data.$popupElement.removeClass('pt-page-heightOn');
				}
					
				return false;
			});
		
			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openClosePopupClickEvent();

				return self;
			}
		}
}(Modules.BookmarkBannerPopup || {}, jQuery));

Modules.CatalogBannerSecondPopup = (function(self, $){
	
	var _settings = {
			popupElementClass: '',
			openCloseClickElementClass: ''
		},
		_data = {
			$popupElement: '',
			$openCloseClickElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openCloseClickElement = $( _settings.openCloseClickElementClass );

			_data.$popupElement.addClass('pt-page-heightOff');

			return self;
		}
		
		self.openClosePopupClickEvent = function(){
			$(document).on('click', _settings.openCloseClickElementClass, function(){ 
					var old = $(_settings.openCloseClickElementClass + ' > .active');
					_data.$openCloseClickElement.children().addClass('active');
					old.removeClass('active'); 
					if($('.b-catalog__middle-banner-2-i').hasClass('pt-page-heightOff')){
						$('.b-catalog__middle-banner-2-i').removeClass('pt-page-heightOff');
						$('.b-catalog__middle-banner-2-i').addClass('pt-page-heightOn');
					} else {
						$('.b-catalog__middle-banner-2-i').addClass('pt-page-heightOff');
						$('.b-catalog__middle-banner-2-i').removeClass('pt-page-heightOn');
					}
					
				return false;
			});
		
			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().openClosePopupClickEvent();

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

Modules.ProductFavorite = (function(self, $){
	var _settings = {
			popupElementClass: '',
			openClickElementClass: '',
			deleteClickElementClass: '',
			itemElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupElement: '',
			$openClickElement: '',
			$deleteClickElement: '',
			$itemElement: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.deleteClickElementClass );
			_data.$itemElement = $( _settings.itemElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function() { 
                            var id = $(this).attr('data-id'); 
                            $.ajax({
                               url : '/api/add2list.php?id=' + id,
                               success: function(data) {
                                   $('.b-liked').html(data); 
                                    _data.$popupElement.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

                                    setTimeout(function(){
                                            _data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
                                    }, 400);
                               }
                            }); 
                            return false;
			}); 
                        
			return self;
		}
		
		self.deleteElementEvent = function(){
			$(document).on('click', _settings.deleteClickElementClass, function(e){
				if(e.target != this) return;
  
                                var id = $(this).attr('data-id'); 
                                $.ajax({
                                   url : '/api/removeFromList.php?id=' + id, 
                                }); 
                                     
				var obj = $(this);
				var items = $(_settings.itemElementClass);

				obj.closest(_settings.itemElementClass).addClass('pt-page-moveToBottom pt-page-moveFromTop');

				setTimeout(function(){
					obj.closest(_settings.itemElementClass).remove();
				}, 400);

				if(items.length == 2){
					items.remove();
					_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');

					setTimeout(function(){
						_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
					}, 400);
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
				self.setSettings(params).setConfig().openPopupEvent().deleteElementEvent();

				return self;
			}
		}
}(Modules.ProductFavorite || {}, jQuery));

Modules.ProductItemAdd = (function(self, $){
	
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
			_data.$productItem = $( _settings.productItemClass );

			return self;
		}
		
		self.addBasketClickEvent = function(){
			$(document).on('click', _settings.addButtonElementClass, function(){ 
			    var divider = 3;
			    _data.$productImage = $(this).closest(_data.$productItem).find(_settings.productImageClass);
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
}(Modules.ProductItemAdd || {}, jQuery));


Modules.ProductPremiumItemAdd = (function(self, $){
	
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
			_data.$productItem = $( _settings.productItemClass );

			return self;
		}
		
		self.addBasketClickEvent = function(){
			$(document).on('click', _settings.addButtonElementClass, function(){
			    var divider = 3;
			    _data.$productImage = $(this).closest(_data.$productItem).find(_settings.productImageClass);

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
}(Modules.ProductPremiumItemAdd || {}, jQuery));

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
		            $("body,html").animate({"scrollTop": _settings.bottomPosition}, 400, function(){ 
		                // опускаем влаг анимации, она закончилась
		                _settings.flagAnimate = false;
		            });
		            // меняем кнопку
		            _settings.flagBottom = false;
		            $('.in_top span').html('Наверх');
		        }else{
		            // если кнопка "вверх"
		            $("body,html").animate({"scrollTop":0}, 400, function(){ 
		                _settings.flagAnimate = false;
		            });     
		            // запомним на сколько была прокручена страница
		            _settings.bottomPosition = $(window).scrollTop();
		            // и зададим флаг, что нужно показать кнопку "назад"
		            _settings.flagBottom = true;
		            $('.in_top span').html('Назад');
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
		                $('.in_top span').html('Наверх');
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

Modules.MenuShadow = (function(self, $){
	
	var _settings = {
			navClass: '',
			navMenuClass: '',
			menuItemClass: '',
			popupOverlayClass: '',
			dropdownMenuItemClass: ''
		},
		_data = {
			$nav: '',
			$navMenu: '',
			$menuItem: '',
			$popupOverlay: '',
			$dropdownMenuItem: '',
			trigger: false
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$nav = $( _settings.navClass );
			_data.$navMenu = $( _settings.navMenuClass );
			_data.$menuItem = $( _settings.menuItemClass );
			_data.$dropdownMenuItem = $( _settings.dropdownMenuItemClass );
			_data.$popupOverlay = $( _settings.popupOverlayClass );

			return self;
		}

		self.hoverEvent = function(){
			$(document).on('mouseenter', _settings.menuItemClass, function(e){
				if($(e.target).attr('class') == 'b-main-nav-dropdown' && _data.$popupOverlay.attr('class') != 'b-overlay-menu pt-page-current'){
					$(e.target).find(_data.$dropdownMenuItem).eq(0).addClass('active');

					_data.$nav.css({'z-index': 1000});
					_data.$popupOverlay.css('top', $('header').height());
					_data.$popupOverlay.addClass('pt-page-current');
				}

				return false;
			});
		
			return self;
		}

		self.hoverOutEvent = function(){
			$(document).on('mouseleave', _settings.menuItemClass, function(e){;
				e.stopPropagation();

				if(_data.$menuItem.find($(e.toElement)).length == 0){
					_data.$menuItem.find(_data.$dropdownMenuItem).removeClass('active');

					_data.$nav.css({'z-index': 'auto'});
					_data.$popupOverlay.removeClass('pt-page-current');
				}

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


Modules.DropdownMenu = (function(self, $){
	
	var _settings = {
			navMenuClass: '',
			menuItemClass: ''
		},
		_data = {
			$navMenu: '',
			$menuItem: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$navMenu = $( _settings.navMenuClass );
			_data.$menuItem = $( _settings.menuItemClass );

			return self;
		}

		self.hoverEvent = function(){
			$(document).on('mouseenter', _settings.menuItemClass, function(e){
				if(e.target != this) return;

				_data.$menuItem.removeClass('active');
				$(this).addClass('active');

				return false;
			});
		
			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().hoverEvent();

				return self;
			}
		}
}(Modules.DropdownMenu || {}, jQuery));

Modules.SignInPopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupWrapperClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupWrapper: '',
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
			_data.$popupWrapper = $( _settings.popupWrapperClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				if(_data.$popupElement.height() < $(window).height())
					_data.$popupElement.css({'margin-top': '-' + (_data.$popupElement.height() / 2) + 'px'});
				else _data.$popupElement.css({'top': '0px'});

				$('body').width($('body').width());
				$('body').addClass('html_noscroll');
				_data.$popupOverlay.addClass('pt-page-current');
				_data.$popupWrapper.addClass('pt-page-current pt-page-current-wrapper');
				_data.$popupElement.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 400);
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(e){
				if(e.target != this) return;

				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.removeClass('pt-page-current');

				setTimeout(function(){
					$('body').removeClass('html_noscroll');
					$('body').width('auto');
					_data.$popupWrapper.removeClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
				}, 400);
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
			popupWrapperClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupWrapper: '',
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
			_data.$popupWrapper = $( _settings.popupWrapperClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				if(_data.$popupElement.height() < $(window).height())
					_data.$popupElement.css({'margin-top': '-' + (_data.$popupElement.height() / 2) + 'px'});
				else _data.$popupElement.css({'top': '0px'});

				$('body').width($('body').width());
				$('body').addClass('html_noscroll');
				_data.$popupOverlay.addClass('pt-page-current');
				_data.$popupWrapper.addClass('pt-page-current pt-page-current-wrapper');
				_data.$popupElement.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 400);
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(e){
				if(e.target != this) return;

				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.removeClass('pt-page-current');

				setTimeout(function(){
					$('body').removeClass('html_noscroll');
					$('body').width('auto');
					_data.$popupWrapper.removeClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
				}, 400);
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

Modules.DesignerProfileMobTabs = (function(self, $){
	
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

			_data.$tabContentElement.eq(0).addClass('active');
			
			self.fixHeight(_data.$tabsContentWrapper, _data.$tabContentElement.eq(0));

			return self;
		}
		
		self.fixHeight = function(wrapper, inner){
			wrapper.height(inner.outerHeight());

			return self;
		}
		
		self.onClickEvent = function(){
			$(document).on('change', _settings.tabElementClass, function(){
				var obj = $(this);

				_data.$tabContentElement.removeClass('active').eq( obj.find(":selected").index() ).addClass('active');
				self.fixHeight(_data.$tabsContentWrapper, _data.$tabContentElement.eq(obj.find(":selected").index()));

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
}(Modules.DesignerProfileMobTabs || {}, jQuery));

Modules.ItemTabs = (function(self, $){
	
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
}(Modules.ItemTabs || {}, jQuery));

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

Modules.LoadMoreProducts = (function(self, $){
	
	var _settings = {
			itemsWrapperClass: '',
			buttonLoadClass: '',
			count: 4,
			ajaxUrl: ''
		},
		_data = {
			$itemsWrapper: '',
			$buttonLoad: ''
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$itemsWrapper = $( _settings.itemsWrapperClass );
			_data.$buttonLoad = $( _settings.buttonLoadClass );

			return self;
		}
		
		self.onClickEvent = function(){
			$(document).on('click', _settings.buttonLoadClass, function() {
                                var link = $(_settings.buttonLoadClass + ' a').attr('href'); 
                                $.ajax({
                                    url: link,
                                    success: function(response) { 
                                        data = $(response).find('.b-catalog__middle').html();
                                        $('.b-catalog__middle').append(data); 
                                        $('.b-catalog__item-i .cover, .b-item__gallery .fotorama__img').zoom();
                                    }
                                }); 
                                $(this).fadeTo( 400 , 0, function() {
                                    $(this).remove();
                                  }); 
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
}(Modules.LoadMoreProducts || {}, jQuery));

Modules.ProfilePopup = (function(self, $){
	
	var _settings = {
			popupOverlayClass: '',
			popupWrapperClass: '',
			popupElementClass: '',
			openClickElementClass: '',
			closeClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupOverlay: '',
			$popupWrapper: '',
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
			_data.$popupWrapper = $( _settings.popupWrapperClass );
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );
			_data.$closeClickElement = $( _settings.closeClickElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){
				if(_data.$popupElement.height() < $(window).height())
					_data.$popupElement.css({'margin-top': '-' + (_data.$popupElement.height() / 2) + 'px'});
				else _data.$popupElement.css({'top': '0px'});

				$('body').width($('body').width());
				$('body').addClass('html_noscroll');
				_data.$popupOverlay.addClass('pt-page-current');
				_data.$popupWrapper.addClass('pt-page-current pt-page-current-wrapper');
				_data.$popupElement.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

				setTimeout(function(){
					_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				}, 400);
				return false;
			});
			
			return self;
		}
		
		self.closePopupEvent = function(){
			$(document).on('click', _settings.closeClickElementClass, function(e){
				if(e.target != this) return;

				_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');
				_data.$popupOverlay.removeClass('pt-page-current');

				setTimeout(function(){
					$('body').removeClass('html_noscroll');
					$('body').width('auto');
					_data.$popupWrapper.removeClass('pt-page-current pt-page-current-wrapper');
					_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
				}, 400);
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

Modules.ProfileUserOutPopup = (function(self, $){
	
	var _settings = {
			popupElementClass: '',
			openClickElementClass: '',
			ajaxUrl: ''
		},
		_data = {
			$popupElement: '',
			$openClickElement: '',
			trigger: false
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$popupElement = $( _settings.popupElementClass );
			_data.$openClickElement = $( _settings.openClickElementClass );

			return self;
		}
		
		self.openPopupEvent = function(){
			$(document).on('click', _settings.openClickElementClass, function(){

				if(_data.trigger == false){
					_data.$popupElement.fadeIn(100);
					_data.trigger = true;
				} else {
					_data.$popupElement.fadeOut(100);
					_data.trigger = false;
				}


				// _data.$popupElement.addClass('pt-page-current pt-page-visible pt-page-moveToLeft pt-page-moveFromRight');

				// setTimeout(function(){
				// 	_data.$popupElement.removeClass('pt-page-moveToLeft pt-page-moveFromRight');
				// }, 400);
				return false;
			});
			
			return self;
		}
		
		self.closeAllEvent = function(){
			$(document).on('click', function(e){
			    if( $(e.target).closest((_settings.popupElementClass + ', ' + _settings.openClickElementClass).length > 0) 
			    	&& $(e.target).parents(_settings.popupElementClass).length > 0){
			    }else{
			  //   	_data.$popupElement.addClass('pt-page-moveToRight pt-page-moveFromLeft');

					// setTimeout(function(){
					// 	_data.$popupElement.removeClass('pt-page-current pt-page-visible pt-page-moveToRight pt-page-moveFromLeft');
					// }, 400);

					_data.$popupElement.fadeOut(100);
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
				self.setSettings(params).setConfig().openPopupEvent().closeAllEvent();

				return self;
			}
		}
}(Modules.ProfileUserOutPopup || {}, jQuery));

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

Modules.SizeProductButton = (function(self, $){
	
	var _settings = {
			sizeButtonClass: ''
		},
		_data = {
		}
			
		self.setSettings = function(params){
			$.extend(_settings, params);

			return self;
		}
		
		self.setConfig = function(){
			_data.$sizeButton = $( _settings.sizeButtonClass );

			return self;
		}

		self.sizeButtonClickEvent = function(){
			$(document).on('click', _settings.sizeButtonClass, function(e){
				$( _settings.sizeButtonClass ).removeClass('active');
				$(this).addClass('active');
                                var price = $(this).attr('data-price'); 
                                $(this).parent().parent().find('.price strong').text(price);
                                var offerId = $(this).attr('data-id');
                                shops = products[offerId];
                                $('.address .cfix[data-shop]').hide();
                                for (id in shops) {
                                    $('.address .cfix[data-shop=' + shops[id].shop + ']').show(); 
                                }
				return false;
			});

			return self;
		}
		
		return {
			init: function(params){
				self.setSettings(params).setConfig().sizeButtonClickEvent();

				return self;
			}
		}
}(Modules.SizeProductButton || {}, jQuery));

(function($){
	$(function(){
		var menuShadow = new Modules.MenuShadow.init({
			navClass: '.b-top',
			navMenuClass: '.b-main-nav',
			menuItemClass: '.b-main-nav-dropdown',
			dropdownMenuItemClass: '.b-main-nav__catalog .list-1 a',
			popupOverlayClass: '.b-overlay-menu'
		});

		var dropdownMenu = new Modules.DropdownMenu.init({
			navMenuClass: '.b-main-nav__catalog',
			menuItemClass: '.b-main-nav__catalog .list-1 a'
		});

		var couponPopup = new Modules.CouponPopup.init({
			popupOverlayClass: '.b-overlay',
			popupWrapperClass: '.b-popup-wrapper__coupon',
			popupElementClass: '.b-popup-wrapper__coupon .b-coupon-pop-up',
			openClickElementClass: '.b-middle-store__img a, .b-contacts__promo a, .coupon-menu-item a',
			closeClickElementClass: '.b-popup-wrapper__coupon .b-coupon-pop-up .close, .b-popup-wrapper__coupon',
			ajaxUrl: ''
		});

		var fittingPopup = new Modules.FittingPopup.init({
			popupOverlayClass: '.b-overlay',
			popupWrapperClass: '.b-popup-wrapper__fitting',
			popupElementClass: '.b-popup-wrapper__fitting .b-fitting-pop-up',
			openClickElementClass: '.g-item .b-item__r-c .info .i-1 a',
			closeClickElementClass: '.g-item .b-popup-wrapper__fitting .b-fitting-pop-up .close, .g-item .b-popup-wrapper__fitting',
			ajaxUrl: ''
		});

		var salePopup = new Modules.SalePopup.init({
			popupOverlayClass: '.b-overlay',
			popupWrapperClass: '.b-popup-wrapper__sale',
			popupElementClass: '.b-popup-wrapper__sale .b-sale-pop-up',
			openClickElementClass: '.g-item .b-item__r-c .info .i-2 a',
			closeClickElementClass: '.g-item .b-popup-wrapper__sale .b-sale-pop-up .close, .g-item .b-popup-wrapper__sale',
			ajaxUrl: ''
		});

		var consultPopup = new Modules.ConsultPopup.init({
			popupOverlayClass: '.b-overlay',
			popupWrapperClass: '.b-popup-wrapper__consult',
			popupElementClass: '.b-popup-wrapper__consult .b-coupon-pop-up',
			openClickElementClass: '.consult-btn',
			closeClickElementClass: '.b-popup-wrapper__consult .b-coupon-pop-up .close, .b-popup-wrapper__consult',
			ajaxUrl: ''
		});

		var fullBasketPopup = new Modules.FullBasketPopup.init({
			popupOverlayClass: '.b-overlay',
			popupWrapperClass: '.b-popup-wrapper__basket',
			popupElementClass: '.b-cart-order-basket',
			openClickElementClass: '.add-item-lnk',
			closeClickElementClass: '.b-cart-order-basket .close, .b-popup-wrapper__basket',
			deliveryElementClass: '.b-cart-order-basket .b-cart-order__form label',
			popupOverlayBuyClass: '.b-overlay',
			popupWrapperBuyClass: '.b-popup-wrapper__basket-buy-i',
			popupElementBuyClass: '.b-cart-order__form-buy',
			openClickElementBuyClass: '.b-cart-order-basket .p-lnk',
			closeClickElementBuyClass: '.b-cart-order__form-buy .b-cart-order-close, .b-popup-wrapper__basket-buy-i',
			deleteItemElementClass: '.b-main-nav__bag-item .del',
			popupOverlayResultClass: '.b-overlay',
			popupWrapperResultClass: '.b-popup-wrapper__basket-result',
			popupElementResultClass: '.b-cart-order__form-result',
			openClickElementResultClass: '.b-cart-order-basket .promo a',
			closeClickElementResultClass: '.b-cart-order__form-result .close, .b-popup-wrapper__basket-result',
			ajaxUrl: ''
		}); 

		var fullBasketBuyPopup = new Modules.FullBasketBuyPopup.init({
			popupOverlayBuyClass: '.b-overlay',
			popupWrapperBuyClass: '.b-popup-wrapper__basket-buy',
			popupElementBuyClass: '.b-cart-order__form-buy',
			openClickElementBuyClass: '.b-main-nav__bag-i .lnk a',
			closeClickElementBuyClass: '.b-cart-order__form-buy .b-cart-order-buy-close, .b-popup-wrapper__basket-buy',
			ajaxUrl: ''
		});

		var signInPopup = new Modules.SignInPopup.init({
			popupOverlayClass: '.b-overlay',
			popupWrapperClass: '.b-popup-wrapper__signin',
			popupElementClass: '.b-designer__pop-up-signin',
			openClickElementClass: '.login .signin',
			closeClickElementClass: '.b-designer__pop-up-signin .close, .b-popup-wrapper__signin',
			ajaxUrl: ''
		});

		var signUpPopup = new Modules.SignUpPopup.init({
			popupOverlayClass: '.b-overlay',
			popupWrapperClass: '.b-popup-wrapper__signup',
			popupElementClass: '.b-designer__pop-up-signup',
			openClickElementClass: '.login .signup',
			closeClickElementClass: '.b-designer__pop-up-signup .close, .b-popup-wrapper__signup',
			ajaxUrl: ''
		});

		var cityPopup = new Modules.СityPopup.init({
			popupOverlayClass: '.b-overlay',
			popupWrapperClass: '.b-popup-wrapper__city',
			popupElementClass: '.b-popup-wrapper__city .b-city-pop-up',
			openClickElementClass: '.g-container-outer .b-top__reg-i a, .g-container-outer .b-top__no, .g-container-outer .b-contacts__title a, .g-container-outer .b-item__r-c .title-2 a, .b-order-l-col .title-2 a',
			closeClickElementClass: '.b-popup-wrapper__city .b-city-pop-up .close, .b-popup-wrapper__city',
			cityElementClass: '.b-top__reg-i a, .b-contacts__title a, .b-item__r-c .title-2 a, .b-order-l-col .title-2 a',
			topLineClass: '.b-top__yellow-line',
			topLineCloseClass: '.b-top__yes',
			ajaxUrl: ''
		});

		var productFavorite = new Modules.ProductFavorite.init({
			popupElementClass: '.b-liked',
			openClickElementClass: '.b-popup-wrapper__catalog .btn-2, .b-item__r-c .btn-2, .r-c .btn-2, .b-item-premium__info .btn-2, .b-catalog__item .fav-link',
			deleteClickElementClass: '.b-liked li .del',
			itemElementClass: '.b-liked li',
			ajaxUrl: ''
		});

		var searchPopup = new Modules.SearchPopup.init({
			popupElementClass: '.b-main-nav__search',
			openClickElementClass: '.search-lnk',
			clearElementClass: '.b-main-nav__search .del',
			ajaxUrl: ''
		});

		var mobileMenuItem = new Modules.MobileMenuItem.init({
			popupElementClass: '.inner-list',
			openClickElementClass: '.open-close-menu-item > a',
			cityElementClass: '.mobile-menu-city-name',
			cityMenuItemClass: '.mobile-menu-city li a'
		});

		var itemMobileTabs = new Modules.ItemMobileTabs.init({
			popupElementClass: '.b-item-mob__tab',
			openClickElementClass: '.b-item-mob-tabs li > a'
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
			hoverElementWrapperClass: '.b-middle-nav__list-1 dl',
			hoverElementClass: '.b-middle-nav__list-1 dd a',
			imageElementClass: '.b-middle-nav__list-i'
		});

		var catalogFiltersPopup = new Modules.CatalogFiltersPopup.init({
			popupElementClass: '.b-catalog__nav-item',
			filterElementListClass: '.b-catalog__nav-list',
			openClickElementClass: '.b-catalog__nav-list > li > a',
			filterElementClass: '.b-catalog__nav-list > li',
			filterButtonClass: '.b-catalog__nav-button',
			filterItemElementClass: '.b-catalog__check-item label',
			bottomFilterElementClass: '.tags-list__filter',
			bottomFilterDeleteClass: '.tags-list__filter .del',
			bottomFilterDeleteAllClass: '.tags-list__button',
			mobileFilterElementClass: '.b-catalog__mob',
			addedFiltersClass: '.b-catalog__sub-nav',
			mobileFiltersClass: '.b-catalog__mob .b-catalog__sub-nav',
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

		var bookmarkBannerPopup = new Modules.BookmarkBannerPopup.init({
			popupElementClass: '.b-bookmark__banner .content',
			openCloseClickElementClass: '.b-bookmark__banner .title a'
		});

		var catalogBannerSecondPopup = new Modules.CatalogBannerSecondPopup.init({
			popupElementClass: '.b-catalog__middle-banner-2 .b-catalog__middle-banner-popup',
			openCloseClickElementClass: '.b-catalog__middle-banner-2 .btn-link'
		});

		var productAdd = new Modules.ProductAdd.init({
			basketElementClass: '.fl-r',
			addButtonElementClass: '.add-lnk',
			productImageClass: 'img',
			productItemClass: '.b-catalog__item'
		});

		var productItemAdd = new Modules.ProductItemAdd.init({
			basketElementClass: '.fl-r',
			addButtonElementClass: '.add-item-lnk',
			productImageClass: '.b-item__gallery img:eq(0), .b-item__middle-i .r-c img:eq(0)',
			productItemClass: '.b-item__top, .b-item__middle'
		});

		var productPremiumItemAdd = new Modules.ProductPremiumItemAdd.init({
			basketElementClass: '.fl-r',
			addButtonElementClass: '.b-item-premium__info .btn-1',
			productImageClass: 'img:eq(0)',
			productItemClass: '.b-item-premium__info'
		});

		var premiumBanner = new Modules.PremiumBanner.init({
			bannerElementClass: '.b-catalog-premium__banner',
			closeClickElementClass: '.b-catalog-premium__banner .close'
		});
 
		var profileTabs = new Modules.ProfileTabs.init({
			tabsWrapperClass: '.b-profile__tabs',
			tabsContentWrapperClass: '.b-profile-i',
			tabElementClass: '.b-profile__tabs > li',
			tabContentElementClass: '.b-profile-i > div'
		});

		var designerProfileTabs = new Modules.DesignerProfileTabs.init({
			tabsWrapperClass: '.b-designer-profile-tabs',
			tabsContentWrapperClass: '.b-designer-profile-i',
			tabElementClass: '.b-designer-profile-tabs > li',
			tabContentElementClass: '.b-designer-profile-i > div'
		});

		var loadMoreButton = new Modules.LoadMoreButton.init({
			itemsWrapperClass: '.b-profile__tab.item-2 table',
			buttonLoadClass: '.b-profile__tab.item-2 .load-more',
			count: 4,
			tabsContentWrapperClass: '.b-designer-profile-i',
			tabContentElementClass: '.b-designer-profile-i > div',
			ajaxUrl: ''
		});

		var loadMoreProducts = new Modules.LoadMoreProducts.init({
			itemsWrapperClass: '.b-catalog__middle-i:last-child',
			buttonLoadClass: '.b-catalog__middle-i .show-more',
			count: 4,
			ajaxUrl: ''
		});

		var profilePopup = new Modules.ProfilePopup.init({
			popupOverlayClass: '.b-overlay',
			popupWrapperClass: '.b-popup-wrapper__profile',
			popupElementClass: '.b-profile',
			openClickElementClass: '.private-office .b-user_logged-in',
			closeClickElementClass: '.b-profile .close, .b-popup-wrapper__profile',
			ajaxUrl: ''
		});

		var profileUserOutPopup = new Modules.ProfileUserOutPopup.init({
			popupElementClass: '.b-user-from',
			openClickElementClass: '.private-office .b-user_logged-out',
			ajaxUrl: ''
		});

		var profileOrdersPopup = new Modules.ProfileOrdersPopup.init({
			popupElementClass: '.b-profile__orders .item',
			popupElementWrapperClass: '.b-profile-i',
			openClickElementClass: '.b-profile__orders .item-top',
			ajaxUrl: ''
		});

		var sizeProductButton = new Modules.SizeProductButton.init({
			sizeButtonClass: '.b-item__r-c .size dd'
		});

		if($('.b-middle .b-back-lnk').length > 0){
			var fixedButton = new Modules.FixedButton.init({
				buttonElementClass: '.b-middle .b-back-lnk'
			});
		}

		if($('.b-item__gallery.fotorama').length > 0){
			if($(document).width() < 1024){
				$('.b-item__gallery').fotorama({
				    'nav': 'false'
				})
			} else {
				$('.b-item__gallery').fotorama({
				    'nav': 'thumbs'
				});
			}
		}

		if ($.fn.niceSelect) {
		    $('select').niceSelect();
		}

		if ($.fn.zoom) {
		    $('.b-catalog__item-i .cover, .b-item__gallery .fotorama__img').zoom();
		}

		if ($.fn.mask) {
			var phoneMask = new Modules.PhoneMask.init({
				phoneInputClass: '.b-type-phone',
				mask: '+7 (999) 999-99-99'
			});
		}

		if($(document).width() < 1024){
			var mobileMenu = new Modules.MobileMenu.init({
				menuOverlayClass: '.b-overlay-mobile-menu',
				menuElementClass: '.b-mobile-nav__list',
				openClickElementClass: '.mobile-menu-link',
				closeClickElementClass: '.b-overlay-mobile-menu'
			});

			var designerProfileMobTabs = new Modules.DesignerProfileMobTabs.init({
				tabsWrapperClass: '.b-designer__middle-mob-tab',
				tabsContentWrapperClass: '.b-designer-profile-i',
				tabElementClass: '.b-designer-profile-mob-tabs',
				tabContentElementClass: '.b-designer-profile-i > div'
			});

			var productImageMobileFilter = new Modules.ProductImageMobileFilter.init({
				buttonElementClass: '.mobile-filter',
				itemElementClass: '.mobile-filter span',
				productWrapperClass: '.b-catalog__middle'
			});

			if($('.b-viewed').length > 0 && $(window).width() < 1024){
				if ($.fn.owlCarousel) {
					$('.b-viewed ul').owlCarousel({
					    loop:true,
					    nav:true,
					    items : 3,
					    itemsDesktop : [1023,3],
					    itemsDesktopSmall : [320,3]
					})
				}
			}

			var couponMobMenuPopup = new Modules.CouponMobMenuPopup.init({
				menuOverlayClass: '.b-overlay-mobile-menu',
				menuElementClass: '.b-mobile-nav__list',
				popupOverlayClass: '.b-overlay',
				popupWrapperClass: '.b-popup-wrapper__coupon',
				popupElementClass: '.b-coupon-pop-up',
				openClickElementClass: '.coupon-menu-mob-item',
				closeClickElementClass: '.b-coupon-pop-up .close, .b-popup-wrapper__coupon',
				ajaxUrl: ''
			});
		} else {
			 
			var topBottomButton = new Modules.TopBottomButton.init({
			});

			var designerProfileTabs = new Modules.DesignerProfileTabs.init({
				tabsWrapperClass: '.b-designer-profile-tabs',
				tabsContentWrapperClass: '.b-designer-profile-i',
				tabElementClass: '.b-designer-profile-tabs > li',
				tabContentElementClass: '.b-designer-profile-i > div'
			});

			if($('.owl-carousel').length > 0){
				if ($.fn.owlCarousel) {
					$('.owl-carousel').owlCarousel({
					    loop:true,
					    nav:true,
					    items : 4,
					    itemsDesktop : [1320,3],
					    itemsDesktopSmall : [1024,3]
					})
				}
			}

			var itemTabs = new Modules.ItemTabs.init({
				tabsWrapperClass: '.b-item-tabs',
				tabsContentWrapperClass: '.b-item__middle',
				tabElementClass: '.b-item-tabs > li',
				tabContentElementClass: '.b-item__middle .b-item__tab'
			});

			var catalogItemPopup = new Modules.CatalogItemPopup.init({
				popupOverlayClass: '.b-overlay',
				popupWrapperClass: '.b-popup-wrapper__catalog',
				popupElementClass: '.g-catalog .b-catalog__item-pop-up',
				openClickElementClass: '.g-catalog .b-catalog__item-i .img, .g-catalog .b-catalog__item-i a',
				closeClickElementClass: '.g-catalog .b-catalog__item-pop-up-i, .g-catalog .b-catalog__item-pop-up, .b-popup-wrapper__catalog, .b-popup-wrapper__catalog .close',
				popupOverlayCityClass: '.b-overlay',
				popupWrapperCityClass: '.b-popup-wrapper__city-item',
				popupElementCityClass: '.b-popup-wrapper__city-item .b-city-pop-up',
				openClickElementCityClass: '.b-popup-wrapper__catalog .b-item__r-c .title-2 a',
				closeClickElementCityClass: '.b-popup-wrapper__city-item .b-city-pop-up .close, .b-popup-wrapper__city-item',
				cityElementCityClass: '.b-top__reg-i a, .b-contacts__title a, .b-item__r-c .title-2 a',
				topLineCityClass: '.b-top__yellow-line',
				topLineCloseCityClass: '.b-top__yes',
				popupOverlayFittingClass: '.b-overlay',
				popupWrapperFittingClass: '.b-popup-wrapper__fitting',
				popupElementFittingClass: '.b-fitting-pop-up',
				openClickElementFittingClass: '.b-catalog__item-pop-up-i .b-item__r-c .info .i-1 a',
				closeClickElementFittingClass: '.b-popup-wrapper__fitting .b-fitting-pop-up .close, .b-popup-wrapper__fitting',
				popupOverlaySaleClass: '.b-overlay',
				popupWrapperSaleClass: '.b-popup-wrapper__sale',
				popupElementSaleClass: '.b-sale-pop-up',
				openClickElementSaleClass: '.b-catalog__item-pop-up-i .b-item__r-c .info .i-2 a',
				closeClickElementSaleClass: '.b-popup-wrapper__sale .b-sale-pop-up .close, .b-popup-wrapper__sale',
				ajaxUrl: ''
			});
		}
	});
})(jQuery);