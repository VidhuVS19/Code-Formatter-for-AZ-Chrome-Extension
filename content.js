// content.js
// Author:
// Author URI: https://
// Author Github URI: https://www.github.com/
// Project Repository URI: https://github.com/
// Description: Handles all the webpage level activities (e.g. manipulating page data, etc.)
// License: MIT

//<a _ngcontent-hib-c34="" class="ml-auto">
//<a _ngcontent-ckx-c34="" class="btn btn-success submit_btn mr-1"><span _ngcontent-ckx-c34="" class="px-2">Submit </span></a>

//const parentElement = document.querySelector(".ml-auto")
const SubmitButton = document.querySelector(".submit_btn")
const divElement = document.createElement('div')
const formatBTN = document.createElement('button')
formatBTN.style.borderRadius="10px"
formatBTN.style.backgroundColor="yellow"
formatBTN.textContent="Format"
divElement.appendChild(formatBTN)
SubmitButton.append(divElement)

