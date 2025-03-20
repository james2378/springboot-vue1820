<template>
<div>
	<div :style='{"padding":"0 7%","margin":"0 auto 0","borderRadius":"0","alignItems":"center","background":"linear-gradient(180deg, rgba(195,228,245,1) 0%, rgba(35,136,191,1) 100%),#c3e4f5","display":"flex","width":"100%","height":"50px"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'Ξ'" :style='{"fontSize":"14px","lineHeight":"1"}'>
			<el-breadcrumb-item>首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item, index) in breadcrumbItem" :key="index">{{item.name}}</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	
	<div class="list-preview" :style='{"margin":"10px auto","flexWrap":"wrap","background":"none","display":"flex","width":"100%","position":"relative","justifyContent":"space-between"}'>
		
		<div class="category-2" :style='{"padding":"30px 10px","margin":"20px 0 0 7%","left":"-90px","flexDirection":"column","background":"linear-gradient(0deg, rgba(195,228,245,1) 0%, rgba(35,136,191,1) 100%)","display":"flex","width":"220px","position":"absolute","height":"auto"}'>
			<div class="item" :class="swiperIndex == '-1' ? 'active' : ''" @click="getList(1, '全部')" :plain="isPlain">全部</div>
			<div class="item" :class="swiperIndex == index ? 'active' : ''" v-for="(item, index) in fenlei" :key="index" @click="getList(1, item, 'btn' + index)" :ref="'btn' + index" plain>{{item}}</div>
		</div>
	
    <el-form :inline="true" :model="formSearch" class="list-form-pv" :style='{"padding":"10px","margin":"20px 7% 20px 14%","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex","width":"100%","height":"auto"}'>
      <el-form-item :style='{"margin":"0 4px 0 0","alignItems":"center","display":"flex","height":"auto"}'>
	    <div class="lable" v-if="true" :style='{"width":"auto","padding":"0 10px","lineHeight":"42px","display":"inline-block"}'>商品名称</div>
        <el-input v-model="formSearch.shangpinmingcheng" placeholder="商品名称" clearable></el-input>
      </el-form-item>
      <el-form-item :style='{"margin":"0 4px 0 0","alignItems":"center","display":"flex","height":"auto"}'>
	    <div class="lable" v-if="true" :style='{"width":"auto","padding":"0 10px","lineHeight":"42px","display":"inline-block"}'>商品品牌</div>
        <el-input v-model="formSearch.shangpinpinpai" placeholder="商品品牌" clearable></el-input>
      </el-form-item>
      <el-form-item :style='{"margin":"0 4px 0 0","alignItems":"center","display":"flex","height":"auto"}'>
		<div class="lable" v-if="true" :style='{"width":"auto","padding":"0 10px","lineHeight":"42px","display":"inline-block"}'>优惠活动</div>
        <el-select v-model="formSearch.youhuihuodong" placeholder="请选择优惠活动" :clearable="true">
          <el-option v-for="(item, index) in youhuihuodongOptions" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :style='{"margin":"0 4px 0 0","alignItems":"center","display":"flex","height":"auto"}'>
	    <div class="lable" v-if="true" :style='{"width":"auto","padding":"0 10px","lineHeight":"42px","display":"inline-block"}'>价格</div>
        <el-input v-model="formSearch.pricestart" placeholder="最小价格" clearable></el-input>
      </el-form-item>
      <el-form-item :style='{"margin":"0 4px 0 0","alignItems":"center","display":"flex","height":"auto"}'>
        <el-input v-model="formSearch.priceend" placeholder="最大价格" clearable></el-input>
      </el-form-item>
	  <el-button v-if=" true " :style='{"cursor":"pointer","border":"0","padding":"0px 20px","margin":"0 8px 0 4px","outline":"none","color":"#fff","borderRadius":"30px","background":"#2186bd","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}' type="primary" @click="getList(1, curFenlei)"><i v-if="true" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-search"></i>查询</el-button>
	  <el-button v-if="isAuth('xuejushangpin','新增')" :style='{"cursor":"pointer","border":"0","padding":"0px 20px","margin":"0 4px 0 0","outline":"none","color":"#fff","borderRadius":"30px","background":"#f4740c","width":"auto","fontSize":"14px","lineHeight":"40px ","height":"40px"}' type="primary" @click="add('/index/xuejushangpinAdd')"><i v-if="true" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-circle-plus-outline"></i>添加</el-button>
    </el-form>

	<div class="list" :style='{"width":"100%","padding":"0 0 0 8%","margin":"20px 0 10px","minWidth":"1050px","background":"none","flex":"1"}'>
		<!-- 样式一 -->
		<div class="list1 index-pv1" :style='{"width":"100%","padding":"0 7%","background":"none","display":"block","height":"auto"}'>
			<div :style='{"margin":"0 0 40px 2%","flexWrap":"wrap","background":"none","display":"flex","width":"31%","position":"relative","float":"left","justifyContent":"space-between","height":"auto"}' v-for="(item, index) in dataList" :key="index" @click="toDetail(item)" class="list-item animation-box">
				<img :style='{"width":"100%","padding":"45px 30px","objectFit":"cover","background":"url(http://codegen.caihongy.cn/20230128/d927f93371f746899f81fd3ae78502d1.png) no-repeat center top / 100% 100%","display":"block","height":"275px"}' v-if="item.shangpintupian && item.shangpintupian.substr(0,4)=='http'" :src="item.shangpintupian" class="image" />
				<img :style='{"width":"100%","padding":"45px 30px","objectFit":"cover","background":"url(http://codegen.caihongy.cn/20230128/d927f93371f746899f81fd3ae78502d1.png) no-repeat center top / 100% 100%","display":"block","height":"275px"}' v-else :src="baseUrl + (item.shangpintupian?item.shangpintupian.split(',')[0]:'')" class="image" />
				<div v-if="item.price" :style='{"width":"100%","padding":"4px 10px","lineHeight":"24px","fontSize":"14px","color":"red","textAlign":"right"}' class="price"><span :style='{"fontSize":"12px"}'>￥</span>{{item.price}}</div>
				<div :style='{"padding":"4px 10px","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","display":"inline-block","width":"100%","lineHeight":"30px","fontSize":"16px","textOverflow":"ellipsis"}' class="name ">{{item.shangpinmingcheng}}</div>
			</div>
		</div>
		
		<!-- 样式二 -->
	</div>

	<!-- 热门信息 -->
	<div class="hot" :style='{"width":"86%","margin":"40px 7%","background":"none","height":"auto"}'>
	  <div :style='{"padding":"0 0 30px","color":"#333","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230127/9b960911d44148759e8047661d17347b.png) no-repeat center bottom","width":"100%","lineHeight":"44px","fontSize":"30px"}'>热门信息</div>
	  <div :style='{"width":"100%","padding":"30px 0 0","background":"none","justifyContent":"space-between","display":"flex","height":"auto"}'>
	    <div v-for="item in hotList" :key="item" :style='{"width":"23%","margin":"0 0 20px","background":"none","height":"auto"}' @click="toDetail(item)">
	      <img :style='{"width":"100%","padding":"45px 30px","objectFit":"cover","background":"url(http://codegen.caihongy.cn/20230128/d927f93371f746899f81fd3ae78502d1.png) no-repeat center top / 100% 100%","display":"block","height":"285px"}' :src="baseUrl + (item.shangpintupian?item.shangpintupian.split(',')[0]:'')" alt="">
	      <div :style='{"padding":"0","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","width":"100%","lineHeight":"40px","fontSize":"16px","textOverflow":"ellipsis","height":"40px"}'>{{item.shangpinmingcheng}}</div>
	      <!--<div :style='{"padding":"0 20px 6px 0","lineHeight":"24px","fontSize":"14px","color":"#f00","textAlign":"right"}'>2022-02-02</div>-->
	    </div>
	  </div>
	</div>
	
	<el-pagination
	  background
	  class="pagination"
	  :pager-count="7"
	  :page-size="pageSize"
	  :page-sizes="pageSizes"
	  prev-text="<"
	  next-text=">"
	  :hide-on-single-page="true"
	  :layout='["total","prev","pager","next","jumper"].join()'
	  :total="total"
	  :style='{"padding":"0","margin":"10px auto","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"1200px","fontWeight":"500"}'
	  @current-change="curChange"
	  @prev-click="prevClick"
	  @next-click="nextClick"
	></el-pagination>

  </div>
</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
	    layouts: '',
		swiperIndex: -1,
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '雪具商品'
          }
        ],
        formSearch: {
          shangpinmingcheng: '',
          shangpinpinpai: '',
          youhuihuodong: '',
          price: '',
        },
        fenlei: [],
        hotList: [],
        dataList: [],
        total: 1,
        pageSize: 12,
		pageSizes: [10,20,30,50],
        totalPage: 1,
        curFenlei: '全部',
        isPlain: false,
        indexQueryCondition: '',
	      youhuihuodongOptions: [],
        timeRange: []
      }
    },
    created() {
      this.indexQueryCondition = this.$route.query.indexQueryCondition ? this.$route.query.indexQueryCondition : '';
      this.baseUrl = this.$config.baseUrl;
	    this.youhuihuodongOptions = '是,否'.split(',');
      this.getFenlei();
      this.getList(1, '全部');
      this.getHotList();
    },
    //方法集合
    methods: {
      add(path) {
        this.$router.push({path: path});
      },
      getHotList() {
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
                  this.hotList = res.data.data.list;
              }
          })
      },
      getFenlei() {
        this.$http.get('option/xuejufenlei/xuejufenlei').then(res => {
          if (res.data.code == 0) {
            this.fenlei = res.data.data;
          }
        });
      },
      getList(page, fenlei, ref = '') {
		if(fenlei == '全部') this.swiperIndex = -1;
		for(let i=0;i<this.fenlei.length;i++) {
			if(fenlei == this.fenlei[i]) {
				this.swiperIndex = i;
				break;
			}
		}
        this.curFenlei = fenlei;
        if (this.curFenlei == '全部') {
          this.isPlain = false;
        } else {
          this.isPlain = true;
        }
        let params = {page, limit: this.pageSize};
        let searchWhere = {};
        if (this.indexQueryCondition) {
          searchWhere.shangpinmingcheng = '%' + this.indexQueryCondition + '%';
          this.indexQueryCondition = '';
        }
        if (this.formSearch.shangpinmingcheng != '') searchWhere.shangpinmingcheng = '%' + this.formSearch.shangpinmingcheng + '%';
        if (this.formSearch.shangpinpinpai != '') searchWhere.shangpinpinpai = '%' + this.formSearch.shangpinpinpai + '%';
        if (this.formSearch.youhuihuodong != '') searchWhere.youhuihuodong = this.formSearch.youhuihuodong;
        if(this.formSearch.pricestart!='' && this.formSearch.pricestart!=undefined ){
          searchWhere.pricestart = this.formSearch.pricestart
        }
        if(this.formSearch.priceend!='' && this.formSearch.priceend!=undefined){
          searchWhere.priceend = this.formSearch.priceend
        }
        if (this.curFenlei != '全部') searchWhere.xuejufenlei = this.curFenlei;
        this.$http.get('xuejushangpin/list', {params: Object.assign(params, searchWhere)}).then(res => {
          if (res.data.code == 0) {
            this.dataList = res.data.data.list;
            this.total = res.data.data.total;
            this.pageSize = res.data.data.pageSize;
            this.totalPage = res.data.data.totalPage;
			
			this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
          }
        });
      },
      curChange(page) {
        this.getList(page,this.curFenlei);
      },
      prevClick(page) {
        this.getList(page,this.curFenlei);
      },
      nextClick(page) {
        this.getList(page,this.curFenlei);
      },
      toDetail(item) {
        this.$router.push({path: '/index/xuejushangpinDetail', query: {detailObj: JSON.stringify(item)}});
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.list-preview .list-form-pv .el-input {
		width: auto;
	}

	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__separator {
		margin: 0 9px;
		color: #333;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__inner a {
		color: #666;
		display: inline-block;
	}
	
	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__inner {
		color: #333;
		display: inline-block;
	}
	
	.category-1 .item {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 10px 0 0;
		color: #999;
		background: #efefef;
		width: 72px;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-1 .item:hover {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 10px 0 0;
		color: #999;
		background: #000;
		width: 72px;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-1 .item.active {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 10px 0 0;
		color: #999;
		background: #000;
		width: 72px;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item {
		cursor: pointer;
		border-radius: 30px;
		margin: 0 auto 12px;
		color: #333;
		background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(236,244,249,1) 40%, rgba(255,255,255,1) 100%);
		width: 96%;
		font-size: 14px;
		line-height: 44px;
		transition: width 1s ease 0s;
		text-align: center;
		height: 44px;
	}
	
	.category-2 .item:hover {
		cursor: pointer;
		border-radius: 30px;
		box-shadow: 0 2px 4px #92b5c8;
		margin: 0 auto 12px;
		color: #111;
		background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(236,244,249,1) 40%, rgba(255,255,255,1) 100%);
		width: 100%;
		font-size: 15px;
		line-height: 44px;
		text-align: center;
	}
	
	.category-2 .item.active {
		cursor: pointer;
		border-radius: 30px;
		box-shadow: 0 2px 4px #92b5c8;
		margin: o auto 12px;
		color: #111;
		background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(236,244,249,1) 40%, rgba(255,255,255,1) 100%);
		font-weight: 500;
		width: 100%;
		font-size: 15px;
		line-height: 44px;
		text-align: center;
	}
	
	.list-form-pv .el-input /deep/ .el-input__inner {
		border: 1px solid #ddd;
		border-radius: 0;
		padding: 0 10px;
		margin: 0;
		outline: none;
		color: #666;
		width: 140px;
		font-size: 14px;
		line-height: 42px;
		height: 42px;
	}
	
	.list-form-pv .el-select /deep/ .el-input__inner {
		border: 1px solid #ddd;
		border-radius: 0;
		padding: 0 10px;
		margin: 0;
		outline: none;
		color: #666;
		width: 140px;
		font-size: 14px;
		line-height: 42px;
		height: 42px;
	}
	
	.list-form-pv .el-date-editor /deep/ .el-input__inner {
		border: 1px solid #ddd;
		border-radius: 0;
		padding: 0 30px;
		margin: 0;
		outline: none;
		color: #666;
		width: 140px;
		font-size: 14px;
		line-height: 42px;
		height: 42px;
	}
	
	.list .index-pv1 .animation-box {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		z-index: initial;
	}
	
	.list .index-pv1 .animation-box:hover {
		transform: scale(0.96);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
		z-index: 1;
	}
	
	.list .index-pv1 .animation-box img {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
	}
	
	.list .index-pv1 .animation-box img:hover {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
	}
	
	.el-pagination /deep/ .el-pagination__total {
		margin: 0 10px 0 0;
		color: #666;
		font-weight: 400;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination /deep/ .btn-prev {
		border: none;
		border-radius: 0;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	.el-pagination /deep/ .btn-next {
		border: none;
		border-radius: 0;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	.el-pagination /deep/ .btn-prev:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination /deep/ .btn-next:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pager {
		padding: 0;
		margin: 0;
		display: inline-block;
		vertical-align: top;
	}
	
	.el-pagination /deep/ .el-pager .number {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #666;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 0;
		background: #f4f4f5;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pager .number:hover {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #409EFF;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 0;
		background: #288bbf;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pager .number.active {
		cursor: default;
		padding: 0 4px;
		margin: 0 5px;
		color: #FFF;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 0;
		background: #288bbf;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pagination__sizes .el-input {
		margin: 0 5px;
		width: 100px;
		position: relative;
	}
	
	.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 25px 0 8px;
		color: #606266;
		display: inline-block;
		font-size: 13px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}
	
	.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 28px;
		text-align: center;
	}
	
	.el-pagination /deep/ .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pagination__jump .el-input {
		border-radius: 3px;
		padding: 0 2px;
		margin: 0 2px;
		display: inline-block;
		width: 50px;
		font-size: 14px;
		line-height: 18px;
		position: relative;
		text-align: center;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 3px;
		color: #606266;
		display: inline-block;
		font-size: 14px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
</style>
