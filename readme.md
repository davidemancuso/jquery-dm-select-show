# jQuery DM Select Option and Show Content

This [jQuery](https://jquery.com/) plugin allows you to use the options of one or more select to display content.

## Quick start

### Install

Download the [latest release](https://github.com/davidemancuso/jquery-dm-select-show/releases).

### Load

#### Static HTML

Put the required stylesheet at the top of your markup:

```html
<link href="/jquery-dm-select-show/dist/jquery-dm-select-show.css" rel="stylesheet" type="text/css" media="all">
```

After add jQuery library and plugin script:

```html
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="/jquery-dm-select-show/dist/jquery-dm-select-show.js"></script>
```

### Usage

Creates a block that contains the select and the list of contents:

```html
<div id="asian_animals" class="block">
    <select class="option_select">
        <option>Select an Asian Animal</option>
        <option value="0">Snow Leopard</option>
        <option value="1">Red Panda</option>
        <option value="2">Bengal Tiger</option>
        <option value="3">Indian Rhinoceros</option>
        <option value="4">Asian Elephant</option>
        <option value="5">Clouded Leopard</option>
    </select>

    <div>
        <div class="option_element" data-option="0">
            <h2>Snow Leopard</h2>
            <p>Size: 1-1,3m</p>
            <p>Weight: 50-75 kg</p>
        </div>

        <div class="option_element" data-option="1">
            <h2>Red Panda</h2>
            <p>Size: 56-63 cm</p>
            <p>Weight: 4-7 kg</p>
        </div>

        <div class="option_element" data-option="2">
            <h2>Bengal Tiger</h2>
            <p>Size: 1,9-3 m</p>
            <p>Weight: 100-300 kg</p>
        </div>

        <div class="option_element" data-option="3">
            <h2>Indian Rhinoceros</h2>
            <p>Size: 3-4 m</p>
            <p>Weight: 1.800-2.700 kg</p>
        </div>

        <div class="option_element" data-option="4">
            <h2>Asian Elephant</h2>
            <p>Size: 2-3,5 m</p>
            <p>Weight: 3.000-5.000 kg</p>
        </div>

        <div class="option_element" data-option="5">
            <h2>Clouded Leopard</h2>
            <p>Size: 60-110 cm</p>
            <p>Weight: 11-20 kg</p>
        </div>
    </div>
</div>
```

Call the [plugin](https://learn.jquery.com/plugins/) function and your 'Select and Show' is ready.

```javascript
$(document).ready(function(){
    $('#asian_animals').selectShow();
});
```

#### Options

Basically, all elements are hidden. However, you can make an element of your choice visible:

```javascript
$(document).ready(function(){
    $('#asian_animals').selectShow({
        ShowElement: 1
    });
});
```

The plugin also allows you to assign custom classes to the select and list elements:

```javascript
$(document).ready(function(){
    $('#asian_animals').selectShow({
        ShowElement: 1
        SelectOption: '.european_animals_select',
        ListElement: '.european_animals_item'
    });
});
```

Remember to add the class of the items in your CSS and add 'display: none'.

```css
.european_animals_item { display: none; }
```

Finally, if you need to have multiple lists on your page, you can call the plugin several times:

```javascript
$(document).ready(function() {
    $('#european_animals').selectShow({
        ShowElement: 0,
        SelectOption: '.european_animals_select',
        ListElement: '.european_animals_item'
    });

    $('#asian_animals').selectShow();

    $('#north_america_animals').selectShow({
        ShowElement: 1
    });
});
```

## Demo

All the details of the plugin and the demo are available on the page [DM Select and Show](https://davidemancuso.studio/plugins/dm-select-show/).

## License

This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Licence [CC BY-NC-SA 4.0](LICENSE).
