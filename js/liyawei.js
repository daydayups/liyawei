/**
 * Created by Li on 2015/12/28.
 */

$(function () {

    // 距顶部
    var navbarTH = $(".am-header-fixed").height();
    $(".main").css("margin-top", navbarTH);

    // 顶部底部隐藏事件
    var winHeight = $(document).scrollTop();
    $(window).scroll(function () {
      var scrollY = $(document).scrollTop(); // 获取垂直滚动的距离，即滚动了多少
      if (scrollY > 100) { //如果滚动距离大于550px则隐藏，否则删除隐藏类
        $('.am-header-fixed').addClass('hiddened');
      } else {
        $('.am-header-fixed').removeClass('hiddened');
      }
      if (scrollY > winHeight) { //如果没滚动到顶部，删除显示类，否则添加显示类
        $('.am-header-fixed').removeClass('showed');
      } else {
        $('.am-header-fixed').addClass('showed');
      }

      if (scrollY > 100) { //如果滚动距离大于550px则隐藏，否则删除隐藏类
        $('.am-navbar').removeClass('hiddenedB');
      } else {
        $('.am-navbar').addClass('hiddenedB');
      }
      if (scrollY > winHeight) { //如果没滚动到顶部，删除显示类，否则添加显示类
        $('.am-navbar').removeClass('showedB');
      } else {
        $('.am-navbar').addClass('showedB');
      }
    });
    //激活 分时线等按钮组
    $('#stock-tend').on('click', function () {
      var e = window.event || arguments[0];
      var src = e.srcElement || e.target;
      if (src.nodeName == "INPUT") {
        $(src).parent().siblings().removeClass('am-active');
        $(src).parent().addClass('am-active');
        containerPain('', src.value);
      }
    })
    $('.container-code').parent().on('click', function () {
      var e = window.event || arguments[0];
      var src = e.srcElement || e.target;
      if (src.nodeName == "INPUT") {
        $(src).parent().siblings().removeClass('am-active');
        $(src).parent().addClass('am-active');
        containerPain(src.value, '');
      }
    })

    //chooseNum switch
    $('.modal-body .chooseNum .btn-group>.btn').on('click', function () {
      var e = window.event || arguments[0];
      var src = e.srcElement || e.target;
      if (src.nodeName == "SPAN") {
        $(src).parent().parent().find('div span[class*="btn-orange"]').removeClass('btn-orange');
        $(src).parent().parent().find('div span[class*="btn-orange"]').addClass('btn-default')
        $(src).removeClass('btn-default');
        $(src).addClass('btn-orange');
      }
    });
    containerPain('', 'M1');
    initOrderList();
  }
)

function initOrderList() {
  //距底部
  var navbarH = $(".zhuanrang-rootPop").height();
  $(".main").css("margin-bottom", navbarH);
}

var objects = ["最高:28796.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;昨收:28762.0<br>最低:28728.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今开:28762.0", [[1450947600000, 28707.0, 28714.0, 28694.0, 28701.0], [1450948500000, 28701.0, 28728.0, 28694.0, 28714.0], [1450949400000, 28714.0, 28728.0, 28687.0, 28707.0], [1450950300000, 28707.0, 28741.0, 28680.0, 28721.0], [1450951200000, 28721.0, 28748.0, 28721.0, 28728.0], [1450952100000, 28728.0, 28741.0, 28707.0, 28728.0], [1450953000000, 28728.0, 28728.0, 28680.0, 28680.0], [1450953900000, 28680.0, 28687.0, 28653.0, 28680.0], [1450954800000, 28680.0, 28687.0, 28660.0, 28667.0], [1450955700000, 28667.0, 28674.0, 28646.0, 28646.0], [1450956600000, 28646.0, 28660.0, 28599.0, 28626.0], [1450957500000, 28626.0, 28694.0, 28613.0, 28674.0], [1450958400000, 28674.0, 28687.0, 28667.0, 28687.0], [1450959300000, 28687.0, 28728.0, 28687.0, 28707.0], [1450960200000, 28707.0, 28707.0, 28599.0, 28633.0], [1450961100000, 28633.0, 28646.0, 28613.0, 28613.0], [1450962000000, 28613.0, 28687.0, 28606.0, 28674.0], [1450962900000, 28674.0, 28674.0, 28606.0, 28606.0], [1450963800000, 28606.0, 28653.0, 28599.0, 28646.0], [1450964700000, 28646.0, 28701.0, 28626.0, 28701.0], [1450965600000, 28701.0, 28721.0, 28680.0, 28701.0], [1450966500000, 28701.0, 28728.0, 28667.0, 28680.0], [1450967400000, 28680.0, 28762.0, 28674.0, 28755.0], [1450968300000, 28755.0, 28768.0, 28721.0, 28721.0], [1450969200000, 28721.0, 28762.0, 28707.0, 28755.0], [1450970100000, 28755.0, 28768.0, 28735.0, 28741.0], [1450971000000, 28741.0, 28755.0, 28728.0, 28741.0], [1450971900000, 28741.0, 28762.0, 28735.0, 28762.0], [1450972800000, 28762.0, 28768.0, 28741.0, 28762.0], [1450973700000, 28762.0, 28762.0, 28748.0, 28762.0], [1450974600000, 28762.0, 28796.0, 28762.0, 28796.0], [1450975500000, 28796.0, 28796.0, 28768.0, 28768.0], [1450976400000, 28768.0, 28775.0, 28768.0, 28775.0], [1450977300000, 28775.0, 28775.0, 28741.0, 28741.0], [1450978200000, 28741.0, 28748.0, 28728.0, 28748.0], [1450979100000, 28748.0, 28748.0, 28728.0, 28741.0], [1450980000000, 28741.0, 28762.0, 28741.0, 28762.0], [1450980900000, 28762.0, 28768.0, 28735.0, 28741.0], [1450981800000, 28741.0, 28741.0, 28728.0, 28735.0], [1450982700000, 28735.0, 28735.0, 28735.0, 28735.0]]];
var obj2 = ["最高:232.84&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;昨收:231.8<br>最低:226.21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今开:231.92", [[1451300400000, 228.67, 228.85, 227.75, 227.87], [1451304000000, 227.87, 228.05, 226.33, 226.7], [1451307600000, 226.7, 227.93, 226.03, 227.62], [1451311200000, 227.62, 228.91, 225.35, 225.66], [1451314800000, 225.66, 226.64, 225.1, 225.66], [1451318400000, 225.66, 226.82, 225.35, 226.03], [1451322000000, 226.03, 226.15, 225.1, 225.17], [1451325600000, 225.17, 226.27, 225.1, 225.9], [1451329200000, 225.9, 226.33, 225.23, 226.03], [1451343600000, 225.23, 225.78, 225.1, 225.41], [1451347200000, 225.41, 225.6, 225.17, 225.29], [1451350800000, 225.29, 225.78, 225.23, 225.66], [1451354400000, 225.66, 226.09, 225.53, 225.84], [1451358000000, 225.84, 226.15, 225.78, 226.03], [1451361600000, 226.03, 226.21, 226.03, 226.09], [1451365200000, 226.09, 226.33, 225.96, 226.21], [1451368800000, 226.21, 226.76, 226.21, 226.76], [1451372400000, 226.76, 227.25, 226.33, 226.76], [1451376000000, 226.76, 227.25, 226.21, 226.27], [1451379600000, 226.27, 227.07, 226.21, 226.95], [1451383200000, 226.95, 227.13, 226.39, 226.58], [1451386800000, 226.58, 227.01, 226.46, 226.76], [1451390400000, 226.76, 228.24, 226.46, 227.75], [1451394000000, 227.75, 230.57, 227.62, 230.45], [1451397600000, 230.45, 232.29, 230.08, 231.0], [1451401200000, 231.0, 232.47, 230.88, 231.8], [1451404800000, 231.8, 232.11, 230.26, 230.69], [1451408400000, 230.69, 231.86, 230.63, 231.37], [1451412000000, 231.37, 232.72, 231.18, 232.54], [1451415600000, 232.54, 232.84, 231.74, 232.41], [1451430000000, 229.47, 229.53, 228.24, 228.73], [1451433600000, 228.73, 229.1, 228.05, 228.11], [1451437200000, 228.11, 228.54, 228.11, 228.24], [1451440800000, 228.24, 228.36, 228.05, 228.3], [1451444400000, 228.3, 228.36, 228.05, 228.24], [1451448000000, 228.24, 228.61, 227.81, 227.93], [1451451600000, 227.93, 228.18, 227.93, 228.11], [1451455200000, 228.11, 228.73, 228.11, 228.3], [1451458800000, 228.3, 228.73, 227.93, 228.36], [1451462400000, 228.36, 228.67, 226.21, 226.89]]]

function containerPain(code, weekflg) {
  if ('' == code) {
    code = $(".container-code").find("input").parent().filter('.am-active').find('input').val();//行情编码
    if (typeof(code) == "undefined") {
      code = $(".container-code").find("input")[0].value;
    }
  }
  if ('' == weekflg) {
    var weekflg = $("#stock-tend").find("input").parent().filter('.am-active').find('input').val();//周期（M1,M5,M15,...MN）
    if (typeof(weekflg) == "undefined") {
      weekflg = $("#stock-tend").find("input")[0].value;
    }
  }
  //var rows = 40;
  //$.post('/XiangShangWeiXin/data/hiData.do',{pricecode:code,weekflg:weekflg,rows:rows},function(objects){
  console.log(code, weekflg);

  var data = code != 'Copper' ? obj2[1] : objects[1];

  $("#container").highcharts('StockChart', {
    chart: {
      events: {
        load: function () {
          series = this.series[0];

        }
      },
      backgroundColor: '#F0FAFC',
      pinchType: '',// 让在移动端可以滑动
      zoomType: ''
    },
    colors: ['#99caf2', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
    title: {
      style: {"color": "#0978d2", "fontSize": "12px"},
      text: objects[0],
      align: 'right',
      useHTML: true
    },
    credits: { // 网站标识
      enabled: false
    },
    exporting: {
      enabled: false
    },
    tooltip: {
      formatter: function () {
        console.log(this);
        var d = '<b>' + Highcharts.dateFormat("%Y-%m-%d %H:%M", this.x) + '</b><br/>';
        if (weekflg == 'M1') {

          d += name + ":" + this.y + '元	';
        } else {
          d += name + '<br/>';
          d += '开盘价: <span style="line-height: 25px;">' + this.points[0].point.open + "元</span><br/>";
          d += '最高价: <span style="line-height: 25px;">' + this.points[0].point.high + "元</span><br/>";
          d += '最低价: <span style="line-height: 25px;">' + this.points[0].point.low + "元</span><br/>";
          d += '收盘价: <span style="line-height: 25px;">' + this.points[0].point.close + "元</span><br/>";
        }
        return d;
      }
// 				valueSuffix: '元	',
// 	            xDateFormat: '%Y-%m-%d %H:%M'//鼠标移动到趋势线上时显示的日期格式
    },
    navigator: { // 底部导航内容
      enabled: false
    },
    scrollbar: {
      enabled: false
    },
    rangeSelector: {
      enabled: false
    },
    xAxis: {
      dateTimeLabelFormats: {
        second: weekflg == 'D1' ? '%m-%d' : '%H:%M:%S',
        minute: weekflg == 'D1' ? '%m-%d' : '%H:%M',
        hour: weekflg == 'D1' ? '%m-%d' : '%H:%M',
        day: weekflg == 'D1' ? '%m-%d' : '%H:%M',
        week: weekflg == 'D1' ? '%m-%d' : '%H:%M',
        month: weekflg == 'D1' ? '%m-%d' : '%H:%M'
      },
      top: 40,
      lineColor: '#000',
      lineWidth: 1,
      type: 'datetime',
      tickWidth: 1,
      tickColor: '#000',
      tickPixelInterval: 50,
      tickLength: 0,
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    yAxis: {
      top: 40,
      opposite: false,
      minorTickInterval: "auto",
      lineColor: '#000',
      lineWidth: 1,
      tickWidth: 1,
      tickLength: 0,
      tickColor: '#000',
      title: {
        text: ''
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    series: [{
      type: weekflg == 'M1' ? '' : 'candlestick',
      name: name,
      data: data
    }]
  });
}
;

//});