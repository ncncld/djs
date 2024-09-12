<template>
  <div class="ksh">
    <div id="load">
      <div class="load_img"><!-- 加载动画 -->
        <img class="jzxz1" src="/images/jzxz1.png">
        <img class="jzxz2" src="/images/jzxz2.png">
      </div>
    </div>
    <div class="head_top" style="cursor:pointer;">
      <img class="img-responsive" src="/images/jcdsj_logo.png">
    </div>
    <div style="height: 20px; width: 100%; margin-top: 10px;">
      <Vue3Marquee @onLoopComplete="broadcastLoopComplete" :pause="false" :duration="duration">
        <span style="color: #12fe81;">{{ message }}</span>
      </Vue3Marquee>
    </div>
    <div class="visual">
      <div class="visual_left">
        <div class="visual_box">
          <div class="visual_title">
            <span>每班学习</span>
            <img src="/images/ksh33.png">
          </div>
          <div class="visual_chart" id="main1">

          </div>
        </div>
        <div class="visual_box">
          <div class="visual_title">
            <span>通知公告</span>
            <img src="/images/ksh33.png">
          </div>
          <div class="visual_chart" id="main2">

          </div>
        </div>
        <div class="visual_box">
          <div class="visual_title">
            <span>收费站车流量</span>
            <img src="/images/ksh33.png">
          </div>
          <div class="visual_chart sfzcll">
            <a>运输方式</a>
            <a>客运量</a>
            <a>货运量</a>
            <div class="sfzcll_pos_box">
              <div class="sfzcll_box">
                <img class="sfzcll_bkJk" src="/images/ksh34.png">
                <img class="sfzcll_bkJk" src="/images/ksh34.png">
                <img class="sfzcll_bkJk" src="/images/ksh34.png">
                <img class="sfzcll_bkJk" src="/images/ksh34.png">
                <label><img src="/images/ksh35.png">公路运输</label>
                <div class="sfzcll_smallBk">
                  <div class="ygl">
                    <span>4347.2万</span>人
                  </div>
                </div>
                <div class="sfzcll_smallBk">
                  <div class="ygh">
                    <span>4347.2万</span>人
                  </div>
                </div>
                <div class="clear"></div>
              </div>
              <div class="sfzcll_box">
                <img class="sfzcll_bkJk" src="/images/ksh34.png">
                <img class="sfzcll_bkJk" src="/images/ksh34.png">
                <img class="sfzcll_bkJk" src="/images/ksh34.png">
                <img class="sfzcll_bkJk" src="/images/ksh34.png">
                <label><img src="/images/ksh35.png">公路运输</label>
                <div class="sfzcll_smallBk">
                  <div class="ygl">
                    <span>4347.2万</span>人
                  </div>
                </div>
                <div class="sfzcll_smallBk">
                  <div class="ygh">
                    <span>4347.2万</span>人
                  </div>
                </div>
                <div class="clear"></div>
              </div>
              <div class="sfzcll_box">
                <img class="sfzcll_bkJk" src="/images/ksh34.png">
                <img class="sfzcll_bkJk" src="/images/ksh34.png">
                <img class="sfzcll_bkJk" src="/images/ksh34.png">
                <img class="sfzcll_bkJk" src="/images/ksh34.png">
                <label><img src="/images/ksh35.png">公路运输</label>
                <div class="sfzcll_smallBk">
                  <div class="ygl">
                    <span>4347.2万</span>人
                  </div>
                </div>
                <div class="sfzcll_smallBk">
                  <div class="ygh">
                    <span>4347.3万</span>人
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="visual_con">
        <div class="visual_conTop">
          <div class="visual_conTop_box visual_conTop1">
            <div>
              <h3>安全生产(天)</h3>
              <p>67</p>
              <!-- <div class="conTop_smil">
                <a class="sz">日环比:<span>+3%</span><i class="fa fa-long-arrow-up"></i></a>
                <a class="xd">周环比:<span>-2%</span><i class="fa fa-long-arrow-down"></i></a>
              </div> -->
            </div>
          </div>
          <div class="visual_conTop_box visual_conTop2">
            <div>
              <h3>发现故障（件）</h3>
              <p>1.4</p>
              <div class="conTop_smil">
                <a class="">缓行</a>
                <a class="">平均车速<span>120</span>KM/H</a>
              </div>
            </div>
          </div>
          <div class="visual_conTop_box visual_conTop2">
            <div>
              <h3>两违两漏(件)</h3>
              <p>99</p>
              <div class="conTop_smil">
                <a class="sz">日环比:<span>+3%</span><i class="fa fa-long-arrow-up"></i></a>
                <a class="xd">周环比:<span>-2%</span><i class="fa fa-long-arrow-down"></i></a>
              </div>
            </div>
          </div>
          <div class="visual_conTop_box visual_conTop1">
            <div>
              <h3>班组综合评价</h3>
              <p>7.9</p>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="visual_conBot">
          <img class="visual_conBot_l" src="/images/ksh42.png">
          <img class="visual_conBot_2" src="/images/ksh43.png">
          <img class="visual_conBot_3" src="/images/ksh44.png">
          <img class="visual_conBot_4" src="/images/ksh45.png">
          <div class="visual_chart_text">
            <h1>当前作业</h1>
          </div>
          <div class="visual_chart" id="main8"></div>
          <div class="visual_conBot_bot">
            <div class="visualSssf_left">
              <h3>阶段作业计划（4小时）</h3>
              <el-table class="jdjh" :data="jdjh" style="width: 100%">
                <el-table-column type="index" :index="indexMethod" label="序号" width="100" header-align="center" />
                <el-table-column prop="checi" label="车次" align="center" />
                <el-table-column prop="lcxz" label="性质" align="center" />
                <el-table-column prop="yjsj" label="预计时间" align="center" />
                <el-table-column prop="fdz" label="发、到站" align="center" />
              </el-table>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
      <div class="visual_right">
        <div class="visual_box">
          <div class="visual_title">
            <span>星级排名</span>
            <img src="/images/ksh33.png">
          </div>
          <div class="swiper-container visual_swiper1 visual_chart">
            <div class="swiper-wrapper">
              <div class="swiper-slide" id="main3"></div>
              <div class="swiper-slide" id="main31"></div>
            </div>
          </div>
        </div>
        <div class="visual_box visualSfzsfl">
          <div class="visual_title">
            <span>收费站收费量</span>
            <img src="/images/ksh33.png">
          </div>
          <div class="visual_chart" id="main9999">

          </div>
        </div>
        <div class="visual_box">
          <div class="visual_title">
            <span>典故推送</span>
            <img src="/images/ksh33.png">
          </div>
          <div class="swiper-container visual_swiper2 visual_chart">
            <!--  -->
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script setup>

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/visual.css'

import { onMounted, ref } from 'vue';
import { ElTable } from 'element-plus'

import { Vue3Marquee } from 'vue3-marquee';
let duration = ref(20)
let message = ref('暂无信息')
const kong = '　'
let repeatedString = ''
for (let i = 0; i < 50; i++) {
  repeatedString += kong;
}
let broadcast = '这是公告内容'
let notice = '这是通知内容'
let share = '这是共享内容'
let messages = [broadcast, notice, share]

// 设置定时器，用于动态更新内容
setTimeout(function () {
  messages[2] = '共享内容变了。。。'
}, 40000);

function broadcastLoopComplete() {
  // 重新给滚动字幕赋值
  message.value = messages[0] + repeatedString + messages[1] + repeatedString + messages[2] + repeatedString
  // 根据滚动字幕长度自动调整滚动速度
  duration.value = 20 * Math.ceil(message.value.length / 80)
}

// 阶段作业计划
function indexMethod(index) {   //返回序号
  return index + 1;
}

const jdjh = [
  {
    checi: 'X27239',
    lcxz: '到达',
    yjsj: '20:23',
    fdz: '乔司～金马村'
  },
  {
    checi: 'X27239',
    lcxz: '到达',
    yjsj: '20:23',
    fdz: '乔司～金马村'
  },
  {
    checi: 'X27239',
    lcxz: '到达',
    yjsj: '20:23',
    fdz: '乔司～金马村'
  }
]

onMounted(() => {
  var a = $('.visualSssf_left a')
  for (var i = 0; i < a.length; i++) {
    a[i].index = i;
    a[i].onclick = function () {
      for (var i = 0; i < a.length; i++) {
        a[i].className = ''
      }
      this.className = 'active'
    }
  }

  var sfzcllH = $('.sfzcll_box').height()
  var sfzcllHtwo = sfzcllH - 2

  $('.sfzcll_box').css('line-height', sfzcllH + 'px')
  $('.sfzcll_smallBk>div').css('line-height', sfzcllHtwo + 'px')

  //删除加载动画
  $("#load").fadeOut(2000);
  setTimeout(function () {
    $("#load").remove();
  }, 3100);
});
</script>

<script>
export default {
  name: 'DigitDjs',
}
</script>

<style>
/*作业计划行字体颜色*/
.jdjh tr {
  color: #ccc;
  font-size: medium;
  line-height: 32px;
}

.jdjh th {
  color: #ccc;
}

.scroll {
  height: 20px;
  width: 100%;
  /* margin: 100px auto; */
  overflow: hidden;
}

.scroll .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 3px 0; */
}
</style>