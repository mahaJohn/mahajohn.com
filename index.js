var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
/*----------small screens---------------*/
var sidemeu=document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right="0"
}
function closemenu(){
    sidemeu.style.right="-200px"
}

/*-------------github link--------*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbzyKWyGH_gerNYQAIh3P48zBsfQAOnhVQLO-8iludvgBCr2100TA4RMDFxvd92xNCgG9Q/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  /*---------verification of submission----------*/
