(function($, window, document,undefined){
  $.fn.createLunBo = function(props) {
    console.log(props,'ppppp');
    $(this).html(`
      <div id="box">
        <div class="screen">
          <ul id="ul">
            <li><img src='../html/assets/yay1.jpg' alt=""></li>
            <li><img src="../html/assets/yay2.jpg" alt=""></li>
            <li><img src="../html/assets/yay3.jpg" alt=""></li>
            <li><img src="../html/assets/yay1.jpg" alt=""></li>
          </ul>
          <ol>
            <li class="current">1</li>
            <li>2</li>
            <li>3</li>
          </ol>
          <div id="arrow">
            <span id="left">&lt;</span>
            <span id="right">&gt;</span>
          </div>
        </div>
      </div>
    `);
    $('.screen').css({
      height: '100px',
      width: '200px',
      position: 'relative',
      // border: '1px solid red',
      overflow: 'hidden',
    });
    $('.screen > ul').css({
      position: 'absolute',
      left: 0,
      top: 0,
      width: '3000px',
      height: '100%',
      listStyle: 'none',
      paddingLeft:'0'
    });
    $('.screen > ul > li').css({
      height: '100%',
      width: '200px',
      cursor: 'pointer',
      float:'left'
    });
    $('.screen > ol').css({
      position: 'absolute',
      bottom: '2px',
      lineHeight: '20px',
      left: 'calc(50% - 30px)',
    });
    $('.screen > ol > li').css({
      width: '10px',
      textAlign: 'center',
      cursor: 'pointer',
      display: 'inline-block',
      border: '1px solid black',
      padding: '2px'
    });
    $('li > img').css({
      height: '100%',
      width: '100%',
      cursor: 'pointer'
    });
    $('#arrow span').css({
      width: '20px',
      height: '20px',
      position: 'absolute',
      top: 'calc(50% - 10px)',
      background: '#000',
      cursor: 'pointer',
      lineHeight: '20px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily: '黑体',
      fontSize: '20px',
      color: '#fff',
      opacity: '0.3',
      border: '1px solid #fff',
    });
    $('#arrow #right').css({
      right: '5px'
    });
    $('.current').css({
      background: 'rebeccapurple'
    });

    let box = $('#box')[0];
    let ul = $('#ul')[0];
    let index = 0;
    let arr = $('#arrow')[0];
    let screenW = $('.screen')[0].offsetWidth;
    let pageList = $('ol>li');

    function animate (obj, target){
      clearInterval(obj.timerID);
      obj.timerID = setInterval(function (){
        let current = obj.offsetLeft;
        if(Math.abs( target - current ) > 10){
          current += target > current ? 10 : -10;
          obj.style.left = `${current}px`;
        }else {
          obj.style.left = `${target}px`;
        }
        if(current === target){
          clearInterval(obj.timerID);
        }
      },10);
    }
    function next (){
      if(index === ul.children.length - 1){
        index = 0;
        ul.style.left = 0;
      }
      index++;
      // pageList[index - 1].className = "";
      pageList[index - 1].style.background = "";
      if (index == ul.children.length - 1) {
        // pageList[0].className = "current";
        pageList[0].style.background = "";
      } else {
        // pageList[index].className = "current";
        pageList[index].style.background = "rebeccapurple";
      }
      animate(ul, -index*screenW);
    }

    let timerID = setInterval(next, 1000);

    for(let i = 0; i < pageList.length; i++){
      pageList[i].setAttribute('index', i);
      pageList[i].onclick = function (){
        if (index == ul.children.length - 1) {
          index = 0;
          ul.style.left = 0;
        }
        let idx = this.getAttribute('index');
        if (index == 0 && idx == pageList.length - 1) {
          index = ul.children.length - 1;
          ul.style.left = -index * screenW + "px";
        }
        animate(ul, -idx * screenW);
        index = idx;
        console.log(index);
        for (let j = 0; j < pageList.length; j++) {
          pageList[j].style.background = "";
        }
        $(this).css({
          background: 'rebeccapurple'
        })
        // this.className = "current";
      }
    }

    box.onmouseover = function() {
      //左右点击按钮隐藏
      arr.style.display = "block";
      //停止计时器
      clearInterval(timerID);
    }
    box.onmouseout = function() {
      arr.style.display = "none";
      timerID = setInterval(next, 1000);
    }

    $('#right').click(next);
    $('#left').click(function() {
      if (index == 0) {
        index = ul.children.length - 1;
        ul.style.left = -index * screenW + "px";
      }
      index--;
      animate(ul, -index * screenW);
      for (let i = 0; i < pageList.length; i++) {
        // pageList[i].className = "";
        pageList[i].style.background = "";
      }
      // pageList[index].className = "current";
      $(this).css({
        background: 'rebeccapurple'
      })
    })
  }
})(jQuery, window, document);
