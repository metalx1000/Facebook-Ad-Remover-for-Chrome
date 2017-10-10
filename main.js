var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('html_code.js');
s.onload = function() {
      this.parentNode.removeChild(this);
};

$(document).ready(function(){
  console.log("Script Running");
  update();
  setInterval(update,1000);
}); 

function update(){
  console.log("Updated");
  //removes Suggested posts
  $("._m8d").parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().hide();

  //Removes sidebar ads
  $(".ego_section").parent().hide();

  //Removes post for when a friend like a company or product
  $("._m8c").parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().hide();

  return 0;
}
