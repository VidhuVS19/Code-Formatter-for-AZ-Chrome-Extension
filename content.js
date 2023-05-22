// content.js
// Author:
// Author URI: https://
// Author Github URI: https://www.github.com/
// Project Repository URI: https://github.com/
// Description: Handles all the webpage level activities (e.g. manipulating page data, etc.)
// License: MIT

//<a _ngcontent-hib-c34="" class="ml-auto">

var parentElement = document.querySelector(".ml-auto")

var divElement = document.createElement('div')

var formatBTN = document.createElement('button')

formatBTN.style.borderRadius="10px"

formatBTN.textContent="Format"

parentElement.appendChild(divElement)
divElement.appendChild(formatBTN)

