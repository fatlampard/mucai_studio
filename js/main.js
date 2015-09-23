

index_init();

var flipsnap,heroInterval;



function index_init(){
  if(checkDevice()=='phone'){
    $('.wretina').each(function(){
      if($(this).attr('src').indexOf('mobile')==-1){
        $(this).attr('src',$(this).attr('src').replace('images/','images/mobile/'));
      }
    })
    $('body').addClass('phone');
  }else if(checkDevice()=='pad'){
    $('body').addClass('pad');
  }
  $('.wretina').retina("@2x");
  $('.nav-link--preorder').on('click',scrollToPreorder);

  var heroDura=1200
  flipsnap=Flipsnap('.flipsnap', { transitionDuration: heroDura });
  var heroInterval=setInterval(nextPage,6000);
  flipsnap.element.addEventListener('fspointmove', function() {
    $('.pagination-ctrl').filter('.pagination-ctrl--active').removeClass('pagination-ctrl--active');
    $('.pagination-ctrl').eq(flipsnap.currentPoint).addClass('pagination-ctrl--active');
  }, false);
}

function checkDevice(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if( $('body').outerWidth()<767 ){
      return 'phone';
    }else{
      return 'pad';
    }
  }else{
    return 'desktop';
  }
}

function goToPage(pageIndex){
  flipsnap.moveToPoint(pageIndex-1);
  $('.pagination-ctrl').filter('.pagination-ctrl--active').removeClass('pagination-ctrl--active');
  $('.pagination-ctrl').eq(flipsnap.currentPoint).addClass('pagination-ctrl--active');
}

function nextPage(){
  if(flipsnap.currentPoint==totalPage-1){
    flipsnap.moveToPoint(0)
  }else{
      flipsnap.toNext();
  }
  $('.pagination-ctrl').filter('.pagination-ctrl--active').removeClass('pagination-ctrl--active');
  $('.pagination-ctrl').eq(flipsnap.currentPoint).addClass('pagination-ctrl--active');
}

function scrollToPreorder(e){
    e.stopPropagation();
    e.preventDefault();
    $('#nav--list-toggle').prop('checked', false)
    $('body').animate({
      scrollTop:$('#preorder_form').offset().top
    },1200,function(){
    });
}