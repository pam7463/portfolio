window.onload = function(){
  new fullpage('#fullpage', {
    anchors:['intro', 'about', 'skill','portfolio','call_me'],
    sectionsColor: ['#000', '#f00', '#0f0', '#00f', '#ffff00'],
    scrollBar:false,
    navigation:true,
    navigationPosition:'right',
  });
}