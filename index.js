const toggle = document.getElementById ('toggle');
        const sidebar = document.getElementById ('sidebar');

        toggle.onclick = function(){
            toggle.classList.toggle('active');
            sidebar.classList.toggle('active');
        }
