# Simple configurable Pie Menu

A fork of Nikesh/Pie-Menu, cleaned up a bit.

## Requirements

* jQuery 1.8+

## Usage

1. Include the library

  * Include `<script type="text/javascript" src="js/jquery.menu.js">` 
  * **EITHER** include `<link rel="stylesheet" href="css/piemenu.css" >` 
  * **OR** modify and recompile piemenu.css from `less/piemenu.less`.

2. Write the supporting HTML

```html
  <div id='outer_container' class="outer_container" >
		<a class="menu_button" href="#" title="Toggle"><span>Menu Toggle</span></a>
		<ul class="menu_option">
		  <li><a href="#"><span>Item</span></a></li>
		  <li><a href="#"><span>Item</span></a></li>
		  <li><a href="#"><span>Item</span></a></li>
		  <li><a href="#"><span>Item</span></a></li>
		  <li><a href="#"><span>Item</span></a></li>
		</ul>
	</div>
```

3. Initialize the script

```javascript
	$('#outer_container').PieMenu({
		starting_angel: 0, // Starting Angle in degrees
		angel_difference: 90, // Angle between menu elements
		radius: 100 // Distance from button to where the menu elements end up
	});	
```

# MIT License

Copyright (C) 2013 Nikesh Hayaran

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
