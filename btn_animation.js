function btn_click(btn_id) {
    $(document).ready(function(){
      $(btn_id).click(function(){
        // Вращение на 360 градусов за 1 секунду
        $(this).animate({ 
          rotate: '+=360deg' 
        }, 1000);
        
        // Use switch with break statements
        switch(btn_id) {
          case "#git_btn":
            window.location.href = "https://github.com/semikitten123?tab=repositories";
            break;
          case "#vk_btn":
            window.location.href = "https://vk.com/miroslavonelove";
            break;
          case "#tg_btn":
            window.location.href = "https://t.me/semikitten123";
            break;
        }
      });
    });
  }
  
  btn_click("#vk_btn");
  btn_click("#git_btn");
  btn_click("#tg_btn");
  