/*
 * jQuery DM Select Option and Show Content
 * Plugin Version: 1.0.1
 * Release Date: 2020-08-29
 * URL Plugin: https://davidemancuso.studio/plugins/dm-select-show/
 *
 * Licence: CC BY-NC-SA (for more info visit https://creativecommons.org/licenses/by-nc-sa/4.0/)
 *
 * Author Name: Davide Mancuso
 * URL Author: https://davidemancuso.studio/
 */

;(function($, window, document, undefined) {
    $.selectShow = function(element, options) {
        var BlockElements = element
          , settings = $.extend({
            ShowElement: null,
            SelectOption: '.option_select',
            ListElement: '.option_element'
        }, options);
        
        $(BlockElements).each(function() {
            var ThisBlockElement = $(this);
            
            if (settings.ShowElement == null) {
                ThisBlockElement.find(settings.ListElement).hide();
            } else {
                ThisBlockElement.find(settings.ListElement + '[data-option="' + settings.ShowElement + '"]').show();
            }

            ThisBlockElement.find(settings.SelectOption).change(function() {
                var OptionValue = $(this).val()
                  , ListElementValue = ThisBlockElement.find(settings.ListElement + '[data-option="' + OptionValue + '"]');

                ThisBlockElement.find(settings.ListElement).hide();
                $(ListElementValue).show();
            });
        });
    }
    
    $.fn.selectShow = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('selectShow')) {
                var plugin = new $.selectShow(this, options);
                
                $(this).data('selectShow', plugin);
            }
        });
    }
})(window.jQuery, window, document);