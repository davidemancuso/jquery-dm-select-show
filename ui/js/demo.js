;(function($, window, document, undefined) {
    $(document).ready(function() {
        $('#european_animals').selectShow({
            ShowElement: 0,
            SelectOption: '.european_animals_select',
            ListElement: '.european_animals_item'
        });
        
        $('#asian_animals').selectShow();
        
        $('#north_american_animals').selectShow({
            ShowElement: 1
        });
    });
})(window.jQuery, window, document);