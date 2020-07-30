<template>
  <div class="home">
    <pre data-key="C">
      ПРИПЕВ:
              C         G   D/F#    Em 
      Славь, душа, Господа, Славь, душа, 
      C     G   Dsus4  D 
      Имя Святое Его. 
        C             Em    C    D  Em 
      Пой Ему, как никогда, пой, душа, 
        C     D      C/G   G   C/G   G 
      Благослови Господа. 

      1 КУПЛЕТ:
       C        G          D     Em 
      Солнце встаёт, новый день приходит, 
      C       G      D    Em 
      Время опять хвалу воздать 
          C              G        D             Em
      За всё, что Ты мне дал, и за каждый новый вдох мой 
      C2      G       Dsus4   D  G Gsus4 G 
      Я буду петь и на закате дня. 

      2 КУПЛЕТ:
      Велик в любви, и даёшь мне милость, 
      Ты справедлив и так благ ко мне, 
      За все Твои дела я хочу прославить 
      Чтоб петь Тебе, есть 10 тысяч причин. 

      3 КУПЛЕТ:
      И когда мои силы иссякнут 
      На закате дней, когда время придёт, 
      Душа моя Тебя да будет славить 
      Больше, чем даже 10 тысяч лет.
    </pre>
  </div>
</template>

<script>
import $ from 'jquery'
import Chart from '@/utils/transposer'

export default {
  name: 'Home',
  mounted () {
    $(function() {
    	$("pre").transpose()
    })
  }
}
</script>

<style lang="scss" scoped>
span.c { 
  font-weight: bold; 
  color: #2159D6;
}

.transpose-keys {
	margin: 10px 0;
	overflow: auto;
	font: normal 11px sans-serif;
}
.transpose-keys a { 
	display: block;
	float: left;
	width: 2.25em;
	text-align: center;
	margin: 0 .25em .25em 0;
	color: #333;
	background: #eee;
	text-decoration: none;
	padding: .4em 0;
	border: solid 1px transparent;
	outline: none;
}
.transpose-keys a.selected { 
  background: #2159D6; 
  color: #FFF;
}

.autoScroll {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  background: #ffffff;
  width: 32px;
  padding: 1px;
  border-radius: 0.25rem;
  font-size: 18px;
  text-align: center;
  color: #fff;
  overflow: hidden;
}
.autoScroll input {
  width: 100%;
  text-align: center;
  outline: 0;
  height: 30px;
  font-size: 15px;
  border: 0;
  margin-bottom: 2px;
  background: #eee;
  border-radius: 50%;
border: 2px solid rgba(81, 171, 109, 0.2);
}
.autoScroll svg {
  font-size: 30px;
  cursor: pointer;
  width: 100%!important;
  padding: 1px;
  color: #212529;
  background: #eee;
  border-radius: 50%;
  border: 2px solid rgba(81, 171, 109, 0.2);
transition: background 0.3s, color 0.3s, border-color 0.3s !important;
}
.autoScroll svg:hover {
  background: rgb(15, 152, 100);
  color: #fff;
}
.autoScroll .fa-stop {
  padding: 7px 7px;
}
@media(max-width: 500px){
.autoScroll {
  opacity: 0.5;
}
}

#music_text {
  overflow: unset;
/*font-family: Calibri, "Trebuchet MS", Arial, serif;*/	
font-family: 'rub';
  font-size: 1em;
white-space: pre-wrap;
  min-height: 150px;
margin-top: 1.5rem;
}

.chopds .tooltip {
  position: relative;
  display: inline;
  opacity: unset;
z-index: unset;	
  font-size: unset;
}
.chopds .c {
  cursor: pointer;
  font-weight: bold;
  color: #218abd;
/*font-family: "Trebuchet MS", Calibri, Arial, serif;*/
font-family: 'rub';
}
.chopds .tooltip-content {
  border-radius: .25rem;
  position: absolute;
  background: #0f9864;
  z-index: 9999;
  width: 65px;
  bottom: 139%;
  left: 50%;
  margin-left: -30px;
  padding: 8px 0px;
  opacity: 0;
  cursor: default;
-webkit-transform: scale3d(0.1,0.2,1);
  transform: scale3d(0.1,0.2,1);
  -webkit-transform-origin: 50% 120%;
  transform-origin: 50% 120%;
  transition: opacity 0.4s, transform 0.4s;
}
.tooltip-content::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  left: 50%;
  margin-left: -8px;
  top: 100%;
  background: #0f9864;
  -webkit-transform: translate3d(0,-60%,0) rotate3d(0,0,1,45deg);
  transform: translate3d(0,-60%,0) rotate3d(0,0,1,45deg);
}
.chopds .tooltip:hover .tooltip-content {
  opacity: 1;
  pointer-events: auto;
  -webkit-transform: scale3d(1,1,1);
  transform: scale3d(1,1,1);
}

#song_chords .c-img {
  background: #0f9864;
  padding: 5px 0;
  margin: 0 5px 5px 0;
border-radius: .25rem;
  -webkit-transition: all ease .2s;
  transition: all ease .2s;
  width:62px;
}

#song_chords .c-img:hover {
  background-color: #5bb978;
  cursor: pointer;
  -webkit-transform: scale(1.1,1.1);
  transform: scale(1.1,1.1);
}

.videlit_line {
color: #51AB6C;
  padding: 3px 0 3px 1.5rem;
  background: #f1f5f1;
  text-transform: uppercase;
  min-width: 50%;
  display: inline-block;
  margin-left: -1.5rem;
}
#keys {	
  position: relative;
  z-index: 2;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: pre;
  height: 32px;
}
.transpose-keys {
margin-top: 1.5rem;	
}
.transpose-keys a, .m-item {
border: 2px solid rgba(81, 171, 109, 0.2);
  display: inline-block;
  width: 32px;
  height: 32px;
  padding: 8px 0px 0!important;
  line-height: 11px;
  text-align: center;
  margin: 0 2px;
  color: #2a2a2a;
  background: #fff;
  text-decoration: none;
  outline: none;
  font-size: 13px;
  font-weight: 600;
  border-radius: 65% 35% 65% 35%/35% 65% 35% 65%;
  /* border-radius: 50%;*/
  transition: background 0.3s, color 0.3s, border-color 0.3s !important;
}
.m-item:active {box-shadow: 0px 0px 0px 4px #0000001f!important;}
.transpose-keys a:hover,
.transpose-keys a.selected,
.m-item:hover,
.m-item.selected { 
background: #0f9864!important;
color: #FFF!important;
}
.transpose-keys a.ton {
  background: #d1ead1;
  color: #000;
}
.btn-outline-secondary {
  color: #0f9864;
  border-color: #0f9864;
}
.btn-outline-secondary:hover {
  color: #fff;
  background-color: #0f9864;
  border-color: #6bb883;
}
.video-box {height:300px;}
@media screen and (max-width: 590px) {
.video-box {height:220px;}
}
@media screen and (max-width: 470px) {
.video-box {height:175px;}
}
/*--------------------------------------------------------------
13.0 Print Style
--------------------------------------------------------------*/
@media print {
body {background: #ffffff; color: #404040;}
.noprint, .transpose-keys, .music_item.pactive [data-audio-file]::after {display:none !important}
#music_text, .media, .h5 {font-size: 1.9rem;line-height: 1.0;}
#song_chords .c-img {width: 100px;}
#song_chords {
  position: absolute;
  left: 120%;
  width: 220px;
  bottom: 0;}
.media a {
  color: #656565;
  text-decoration: none;
}
pre {
border: 0;
font-family: inherit;
font-size: 100%;
font-style: inherit;
font-weight: inherit;
margin-bottom: 2rem;
outline: 0;
padding: 0;
vertical-align: baseline;
}
}
</style>
