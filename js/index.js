$(function(){
//1. board_box> div 에 클릭이 있을떄 온 클릭 이벤트
//2. 전체적으로 active 클래스 없애기 
//3. 클릭한 this에 active를 붙이기 > togle button으로
  $(".board_box>div").on('click', function(){
    let This = $(this);

    $(".board_box>div").removeClass('active')
    This.addClass('active');
  });//function
  // telList active 
  //버튼 클릭 
  $(".telList>button").on('click', function(){
    $(".telList").toggleClass('active');
  });//button

  // 언어
  $(".language").click(function(){
    $(".language").toggleClass('active');
  });//button

});//doc