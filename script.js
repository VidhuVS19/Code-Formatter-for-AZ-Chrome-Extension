
const SubmitButton = document.querySelector(".submit_btn")
const divElement = document.createElement('div')
const formatBTN = document.createElement('button')
formatBTN.style.borderRadius="10px"
formatBTN.style.backgroundColor="pink"
formatBTN.textContent="Format"
formatBTN.style.height="40px"
formatBTN.style.width="80px"
divElement.appendChild(formatBTN)
SubmitButton.parentElement.append(divElement)
SubmitButton.parentElement.style.display="flex"
SubmitButton.parentElement.style.flexDirection="row"

//Reading the input from input field:
formatBTN.addEventListener('click',process);

function process() {
    let code = getCode();
    console.log(code);
    let formattedCode = js_beautify(code, {
      indent_size: 4,
      brace_style: "expand",
    });
    // Define the code to be inserted as a string
    const codeToInsert = formattedCode; //applyCustomRules(formattedCode);
    insertCode(codeToInsert);
  }
  
  function insertCode(code) {
    if (code) {
      let codeMirrorSelector = document.querySelector(".CodeMirror");
      let codeMirror = codeMirrorSelector.CodeMirror;
      codeMirror.setValue(code);
    }
  }
  
  function getCode() {
    let codeMirrorSelector = document.querySelector(".CodeMirror");
    let codeMirror = codeMirrorSelector.CodeMirror;
    const code = codeMirror.getValue();
  
    return code;
  }
  
