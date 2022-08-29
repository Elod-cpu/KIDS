const toggle = document.getElementById ('toggle');
        const sidebar = document.getElementById ('sidebar');

        toggle.onclick = function(){
            toggle.classList.toggle('active');
            sidebar.classList.toggle('active');
        }

function rest() {
    event.preventDefault();
    let parent = document.getElementById("parent").value;
    let mail = document.getElementById("mail").value;
    let enfant = document.getElementById("enfant").value;
    let classe = document.getElementById("classe").value;
    
   localStorage('ls_parent', parent);
   localStorage('ls_mail', mail);
   localStorage('ls_enfant', enfant);
   localStorage('ls_classe', classe);
};


   