<template>
<div class="home-preview" :style='{"width":"100%","margin":"10px auto"}'>
	<el-row type="flex" :gutter="5" justify="center" style="width: 100%">
		<el-col :span="3" v-if="queryList.length>1">
			<el-select v-model="queryIndex">
				<el-option
				  v-for="(item,index) in queryList"
				  :key="index"
				  :label="item.queryName"
				  :value="index"
				></el-option>
			</el-select>
		</el-col>
		<el-col :span="3" v-if="queryIndex==0">
			<el-input v-model="xuejushangpinshangpinmingcheng" placeholder="商品名称"></el-input>
		</el-col>
		<el-col :span="3" v-if="queryIndex==0">
			<el-button type="primary" @click="search('xuejushangpin')">搜索</el-button>
		</el-col>
	</el-row>



<div class="recommend" :style='{"width":"100%","padding":"20px 0 30px","margin":"0","position":"relative","background":"url(http://codegen.caihongy.cn/20230127/cb48feb1ff1b497faa783e042fab17b3.jpg) repeat-y center top / 100% 100%"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"minHeight":"50px","padding":"0 0 30px","margin":"60px auto 40px","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230127/08c16dc8bbc641d9b10f2c8403aeb7f1.png) no-repeat center bottom","display":"flex","width":"100%","justifyContent":"center"}'>
		<span :style='{"color":"#fff","fontSize":"30px","lineHeight":"50px"}'>雪具商品推荐</span>
	</div>
	
	
	
	<!-- 样式二 -->
	<div class="list list2 index-pv1" :style='{"padding":"0 7%","margin":"20px 0 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		<div :style='{"margin":"0 0 30px","flexWrap":"wrap","background":"#fff","display":"flex","width":"23.5%","fontSize":"0","position":"relative","justifyContent":"space-between","height":"auto"}' v-for="(item,index) in xuejushangpinRecommend" class="list-item animation-box" :key="index" @click="toDetail('xuejushangpinDetail', item)">
			<img :style='{"border":"none","padding":"10px 10px 60px","objectFit":"cover","background":"url(http://codegen.caihongy.cn/20230127/ef04f1f0d78145d4b55871efdc1e6549.png) no-repeat center bottom / 100% auto,#7dd8ee","display":"inline-block","width":"100%","height":"380px"}' v-if="preHttp(item.shangpintupian)" :src="item.shangpintupian.split(',')[0]" alt="" />
			<img :style='{"border":"none","padding":"10px 10px 60px","objectFit":"cover","background":"url(http://codegen.caihongy.cn/20230127/ef04f1f0d78145d4b55871efdc1e6549.png) no-repeat center bottom / 100% auto,#7dd8ee","display":"inline-block","width":"100%","height":"380px"}' v-else :src="baseUrl + (item.shangpintupian?item.shangpintupian.split(',')[0]:'')" alt="" />
			<div class="item-info" :style='{"width":"100%","padding":"10px 0","verticalAlign":"middle","overflow":"hidden","display":"inline-block","height":"100%"}'>
				<div class="name line1" :style='{"margin":"0 0 10px","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","width":"100%","lineHeight":"40px","fontSize":"16px","textOverflow":"ellipsis","fontWeight":"500","height":"40px"}'>{{item.shangpinmingcheng}}</div>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	<div @click="moreBtn('xuejushangpin')" :style='{"padding":"0 20px","margin":"10px auto","textAlign":"center","background":"none","display":"inline-block","width":"100%","lineHeight":"40px"}'>
		<span :style='{"color":"#fff","fontSize":"18px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#fff","fontSize":"18px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>

	<!-- 系统简介 -->
	<div :style='{"padding":"0 7%","boxShadow":"0 0px 0px rgba(255, 255, 255, .3)","margin":"40px 0","background":"none","width":"100%","position":"relative","height":"500px"}'>
	  <div :style='{"margin":"0 auto 60px","color":"#333","textAlign":"right","width":"50%","lineHeight":"50px","fontSize":"30px","float":"left","fontWeight":"500","height":"50px"}'>{{systemIntroductionDetail.title}}</div>
	  <div :style='{"padding":"0 10px","margin":"0 0 60px","color":"#666","textAlign":"left","width":"50%","lineHeight":"50px","fontSize":"24px","float":"left"}'>{{systemIntroductionDetail.subtitle}}</div>
	  <div :style='{"width":"100%","padding":"0 10px","flexWrap":"wrap","justifyContent":"space-between","display":"flex","height":"auto"}'>
	    <img :style='{"border":"1px solid #ddd","padding":"10px","margin":"0","backgroundColor":"rgba(255,255,255,.9)","objectFit":"cover","left":"3%","flex":1,"display":"block","width":"24%","position":"absolute","height":"320px"}' :src="baseUrl + systemIntroductionDetail.picture1">
	    <img :style='{"border":"1px solid #ddd","padding":"20px","margin":"0","objectFit":"cover","flex":1,"background":"rgba(255,255,255,.9)","display":"block","width":"24%","position":"absolute","right":"3%","height":"320px"}' :src="baseUrl + systemIntroductionDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
	  </div>
	  <div :style='{"padding":"60px 20px 20px","margin":"0 0 0 25%","overflow":"hidden","color":"#333","textAlign":"left","background":"url(http://codegen.caihongy.cn/20230127/03ad723288d44044a8b922de0a51127f.png) no-repeat left top,#e0edf2","width":"49%","lineHeight":"2","fontSize":"16px","textIndent":"2em","float":"left","height":"320px"}' v-html="systemIntroductionDetail.content"></div>
	  <div :style='{"top":"60px","left":"0","background":"url(http://codegen.caihongy.cn/20230127/9b960911d44148759e8047661d17347b.png) no-repeat center bottom","display":"block","width":"100%","position":"absolute","height":"20px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>
	
<div class="news" :style='{"width":"100%","margin":"0","position":"relative","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230127/9a8312998bcc4b55aefae7725f58f713.jpg) no-repeat center top","display":"block"}'>
	<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","padding":"0 0 40px","margin":"60px auto 40px","lineHeight":"50px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230127/9b960911d44148759e8047661d17347b.png) no-repeat center bottom"}'>
		<span :style='{"color":"#15a6e1","fontSize":"32px"}'>公告信息</span>
	</div>
	
	
	
	
	
	
	
	
	<!-- 样式七 -->
	<div v-if="newsList.length" class="list list7 index-pv1" :style='{"padding":"0","margin":"0 7%","flexWrap":"wrap","background":"none","display":"flex","width":"86%","justifyContent":"space-between","height":"auto"}'>
	  <div v-for="(item,index) in newsList" v-if="index<4" :key="index" @click="toDetail('newsDetail', item)" class="new7-list-item animation-box" style="cursor: pointer;" :style='{"boxShadow":"1px 2px 6px #bddeeb","margin":"0 0 40px","background":"#ebf6fc","width":"23.5%","position":"relative","transition":"background 0.3s ease-in-out","height":"auto"}'>
	    <img :style='{"width":"100%","padding":"4px","objectFit":"cover","height":"280px"}' style="box-sizing: border-box;object-fit: cover;width: 100%;height: 250px;" :src="baseUrl + item.picture">
	    <div :style='{"padding":"0 10px","whiteSpace":"nowrap","overflow":"hidden","color":"#3d96c5","textAlign":"center","fontSize":"18px","lineHeight":"40px","textOverflow":"ellipsis","fontWeight":"500"}' class="new7-list-item-title line1">{{ item.title }}</div>
	    <div :style='{"padding":"0 10px","margin":"0 0 30px","overflow":"hidden","color":"#666","textAlign":"left","width":"100%","fontSize":"14px","lineHeight":"24px","textIndent":"2em","height":"120px"}' class="new7-list-item-descript line1">{{ item.introduction }}</div>
	    <div :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"#3e97c6","bottom":"-16px","display":"inline-block","fontSize":"14px","lineHeight":"32px","position":"absolute","right":"20px"}' class="new7-list-item-time">{{ item.addtime.split(' ')[0] }}</div>
	    <div :style='{"width":"100%","padding":"0 10px","alignItems":"center","justifyContent":"space-between","display":"none","height":"auto"}'>
	      <div :style='{"color":"#666","fontSize":"14px","lineHeight":"24px"}'>新闻咨询</div>
	      <div :style='{"color":"#999","fontSize":"14px","lineHeight":"24px"}'>→</div>
	    </div>
	  </div>
	</div>
	
	
	
	
	<div @click="moreBtn('news')" :style='{"border":"0","padding":"0 20px","margin":"20px auto 50px","textAlign":"center","background":"none","display":"inline-block","width":"auto","lineHeight":"40px"}'>
		<span :style='{"color":"#3e97c6","fontSize":"18px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#3e97c6","fontSize":"18px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>




</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        systemIntroductionDetail: {},
        queryList:[
          {
              queryName:"商品名称",
          },
        ],
        queryIndex: 0,
        xuejushangpinshangpinmingcheng: '',
        newsList: [],
        xuejushangpinRecommend: [],

      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getNewsList();
      this.getSystemIntroduction();
      this.getList();
    },
    //方法集合
    methods: {
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
      search(tablename) {
        if (this.queryIndex == 0 && this.xuejushangpinshangpinmingcheng) {
          this.$router.push({path: '/index/' + tablename, query: {indexQueryCondition: this.xuejushangpinshangpinmingcheng}});
        }
      },
		getNewsList() {
			this.$http.get('news/list', {params: {
				page: 1,
				limit: 4,
			order: 'desc'}}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
          let autoSortUrl = "";
          autoSortUrl = "xuejushangpin/autoSort";
          if(localStorage.getItem('Token')) {
              autoSortUrl = "xuejushangpin/autoSort2";
          }
			this.$http.get(autoSortUrl, {params: {
				page: 1,
				limit: 4,
			}}).then(res => {
				if (res.data.code == 0) {
					this.xuejushangpinRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				opacity: 0.75;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				background: #fff;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				opacity: 0.75;
				transition: 0.3s;
			}
		}
	}
</style>
