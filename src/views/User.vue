<template>
  <div id="user">
    <!-- 头部 start -->
    <header class="header" @click="login()">
      <div class="header_inner">
        <div class="left">
          <img data-v-172bb70c="" src="../assets/img/user.png">
        </div>
        <div class="right" v-text="data"></div>
      </div>
    </header>
    <!-- 头部 end -->

    <!-- 主体内容 start -->
    <main class="main">
      <!-- 我的订单 -->
      <div class="main1">
        <div class="my_cite">我的订单</div>
        <div class="all_cite">
          <a href="javascript:;" @click="jumpOrder()">全部订单</a>
        </div>
      </div>
      <div class="main2">
        <ul>
          <li>
            <a href="javascript:;" @click="pay()">
              <div class="icon"></div>
              <p class="txt">待付款</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" @click="reward()">
              <div class="icon"></div>
              <p class="txt">待收货</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" @click="tuihuanxiu()">
              <div class="icon"></div>
              <p class="txt">退换修</p>
            </a>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="main3 main_list">
        <ul class="list">
          <li class="list_items">
            <a href="javascript:;" @click="jumpMemberCentre()">
              <cite>会员中心</cite>
            </a>
          </li>
          <li class="list_items">
            <a href="javascript:;" @click="jumpMyOffer()">
              <cite>我的优惠</cite>
            </a>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="main4 main_list">
        <ul class="list">
          <li class="list_items">
            <a href="javascript:;" @click="jumpService()">
              <cite>服务中心</cite>
            </a>
          </li>
          <li class="list_items">
            <a href="javascript:;" @click="jumpXiaoMi()">
              <cite>小米之家</cite>
            </a>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="main5 main_list">
        <ul class="list">
          <li class="list_items">
            <a href="javascript:;" @click="jumpFCode()">
              <cite>F码通道</cite>
            </a>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="main6 main_list">
        <ul class="list">
          <li class="list_items">
            <a href="javascript:;" @click="jumpSetting()">
              <cite>设置</cite>
            </a>
          </li>
        </ul>
      </div>
    </main>
    <!-- 主体内容 end -->

  </div>
</template>
<script>
export default {
  data() {
    return {
      data: "",
      isLogin: false
    };
  },
  computed: {},
  methods: {
    judgeLogin() {
      if (localStorage.getItem("username")) {
        //已登录
        this.isLogin = true;
        this.data = localStorage.getItem("username");
      } else {
        //未登录
        this.isLogin = false;
        this.data = "登录/注册";
      }
    },
    
    /*******登录******/
    login() {
      if (!this.isLogin) {
        this.$router.push({
          path: "/loginRegister"
        });
      }
      return;
    },
    // 我的订单
    jumpOrder() {
      // 判断是否已经登录
      if (this.isLogin) {
        this.$router.push({
          path: "/order"
        });
      } else {
        this.$router.push({
          path: "/loginRegister"
        });
      }
    },
    // 待付款
    pay() {
      if (this.isLogin) {
        //已登录  跳转到订单页
        this.$router.push({
          path: "/order"
        });
      } else {
        //未登录 跳转到登录注册页
        this.$router.push({
          path: "/loginRegister"
        });
      }
    },
    // 待收货
    reward() {
      if (this.isLogin) {
        //已登录  跳转到订单页
        this.$router.push({
          path: "/order"
        });
      } else {
        //未登录 跳转到登录注册页
        this.$router.push({
          path: "/loginRegister"
        });
      }
    },
    // 退换修
    tuihuanxiu() {
      if (this.isLogin) {
        //已登录  跳转到订单页
        this.$router.push({
          path: "/order"
        });
      } else {
        //未登录 跳转到登录注册页
        this.$router.push({
          path: "/loginRegister"
        });
      }
    },
    // 会员中心
    jumpMemberCentre() {
      this.$router.push({
        path:"/mpointsmall"
      });
    },
    // 我的优惠
    jumpMyOffer() {
      if(this.isLogin){
        this.$router.push({
          path:"/offer"
        });
      }else{
        this.$router.push({
          path:"/loginRegister"
        });
      }
    },
    // 服务中心
    jumpService() {
      this.$router.push({
        path:"/services"
      });
    },
    // 小米之家
    jumpXiaoMi() {
      this.$router.push({
        path:"/maplocation"
      });
    },
    //F码通道
    jumpFCode() {
      if(this.isLogin){
        this.$router.push({
          path:"/fcode"
        });
      }else{
        this.$router.push({
          path:"/login/Register"
        });
      }
    },
    // 设置
    jumpSetting() {
      if (this.isLogin) {
        //已登录  跳转到订单页
        this.$router.push({
          path: "/user/set"
        });
      } else {
        //未登录 跳转到登录注册页
        this.$router.push({
          path: "/loginRegister"
        });
      }
    }
  },
  created() {
    this.$store.state.footShow =true;
    // this.judgeLogin();
  },
  beforeMount() {
    this.judgeLogin();
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
#user {
  padding-bottom: 1.893333rem;
  background: #f3f3f3;
  /* 头部 */
  .header {
    height: 2.226667rem;
    background: url(/static/img/bg.63c8e19851.png) center 0 #f37d0f;
    background-size: auto 100%;
    padding: 0.0044rem 0;
    .header_inner {
      height: 100%;
      display: flex;
      align-items: center;
      .left {
        margin: 0 0.226667rem 0 0.44rem;
        width: 1.333333rem;
        height: 1.333333rem;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 100%;
        border: 3px solid hsla(0, 0%, 100%, 0.4);
        text-align: center;
        img {
          width: auto;
          height: 100%;
          margin: 0 auto;
        }
      }
      .right {
        color: #fff;
        font-size: 0.24rem;
        text-align: left;
      }
    }
  }
  /* 主体 */
  .main {
    // background: #f3f3f3;
    .main1 {
      position: relative;
      padding-right: 0.773333rem;
      background-color: #fff;
      height: 1.106667rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      color: rgba(0, 0, 0, 0.54);
      justify-content: space-between;
      align-items: center;
      display: flex;
      .my_cite {
        font-size: 0.373333rem;
        padding: 0 0 0 0.493333rem;
        color: rgba(0, 0, 0, 0.87);
      }
      .all_cite {
        font-size: 0.373333rem;
        color: rgba(0, 0, 0, 0.87);
        align-items: center;
        display: flex;
        a {
          font-size: 0.373333rem;
          color: rgba(0, 0, 0, 0.87);
        }
        a::after {
          content: "";
          position: absolute;
          right: 5.12px;
          right: 0.32rem;
          top: 50%;
          width: 3.2px;
          width: 0.2rem;
          height: 3.2px;
          height: 0.2rem;
          border-left: 1px solid currentColor;
          border-top: 1px solid currentColor;
          transform: translate3d(0, -50%, 0) rotate(135deg);
          -webkit-transform: translate3d(0, -50%, 0) rotate(135deg);
        }
      }
    }
    .main2 {
      padding: 0 1.106667rem;
      height: 2.346667rem;
      background: #fff;
      margin-bottom: 0.28rem;
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        li {
          align-content: space-between;
          position: relative;
          padding: 0.573333rem 0;
          a {
            display: block;
            height: 100%;
            width: 100%;
            .icon {
              width: 0.6rem;
              height: 0.6rem;
              margin: 0 auto 0.333333rem;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMUQ5NDYxMThGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMUQ5NDYxMjhGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYxRDk0NjBGOEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYxRDk0NjEwOEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0LK+9gAAAXNJREFUeNrsnLEOgjAURcUYd/k/Rhh1My7+gJsrYeP7xNHEpXZoIjYIpQnwaM9N3qBLw8nr7ePWmCilNui/tiAAEIAABCAAAQhAkWrX/lCWZXQAiqIY3UF7XXddD10qwGrM8+1Hd5DRTdcx4KY5mOd76br4eFAWye7KfU06jQRQ6rvFbCUBQRkdXXDMAwhAAAIQgAAEIAAh70k6aNkRjx1/SOugqaOWrleP3vhDWgctEbX0xh/SOmjJqCVfg0mn0taWbtJTRy2D8QfHPIAABKCBeWnUNU4sk7Q9Lzlf48TSQZnrHIMH4UGdqju+q/Cgr85miMxawK4A+uqt62SKLYYHAWi9ku5Big76VSNtbWmA6gXXrtawxdrzzWGmNZ99c5Q0QFPPN7anDSaW0d+L+fwMGAEIQAACEIAABCAAIadJWtFBDq/9AarxBVRHAqjy3WJLRA5zqjfecAE025XKGpTw9zgc8wACEIAABCAAAQh16SPAAD22hrFVOZLnAAAAAElFTkSuQmCC);
              background-size: 100% auto;
            }
            .txt {
              font-size: 0.293333rem;
              line-height: 0.293333rem;
              color: #000;
              text-align: center;
            }
          }
        }
      }
    }

    .list {
      .list_items {
        height: 1.48rem;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAEqklEQVR4nO2aTYhWVRjHf6PJNItEEAKZnSEVZCtrNN1oM9mMizKhVdOiXEpbk0CnFuEyCdpGbSYIrc2oTRMhxBRUtJjIeYmWWcxCtIRw8WaL5xw7c9/7nq/7cc4L9wcvjOeej+f5ez6e89wLHR0dHR3ZMgbQ/3pvajv2AOeBafXvFeBN4NdkFgFbD6/xQEoDFI8C3wE7jLKXgCPAfqCXwijNlpSDK95lsziaHepZUnIQaNry7LnWrBhCDgJlTQ4CrVieLbdmxRByEOgt4FZJ+S31LCk5CLSOnFaXgHvqd0mVrSe0C8hDIJCj/D0kLhsDLpD4eNfkIhDAgvH3uVRGFMlFoENIYKg5osqSk4tAZTNmoW0jyshBoEOUB4vPksEsykGgs5HPWiG1QM8AM5bnM8DBlmwpxRRoD3ARuK1+F1VZk/icVk3PIqvfOh9UlnIAiWabSjkcAFY96x4MqBuC1e+th9d6egalSDmExDpNzSKn31qgtlMO+4GjAfWPqjZ14/Q71SYdMyOSnGhaoDZTDlPAbES7WdW2Tpx+a4HaTDlUmQl1zyKn31ogM+Xwt/r9BYwDx6G25P7TwFyF9nOqjzrYhvg2jviq/d6UajH3oB5wAtiufh8AE8hu/iP1TO86ZkAdfUwBPyC+TSC+ar9PYIQ1tk16yfj7SSQOeV91EsNTwLHItibHgH2RbbcjPqwiPmmWyqvbBfoWuFmoewr4BXghwrg6czwLEW1eRGw/xWa/byK+lmITqA9cLSmfBD5H1uqkp3H7qLb3FJnDfxZNIrZ+Rrm9VxFfS3HFQUOnHrLBlf2PlHEOda2piTHce5E5449b6tl8dDpmVZf/1/Q3wLAX/A8DzzvGiWFW9V3GXvz2zGGr5D4ugazr0+AActLpU8FkA3gVu9Ch9FWfG4Xy0FO3uM8O4HPVsCpssA04A6wxeMdZBOapR6S+6muxUD6txj6jbPHhsquCj0BXPAfTPIKE6R8Bu4zyOkQqE2eXGutLNXYIX7gq+Aj0E3AjcOAxZAn0gDeMcaqIVBRni+q7p8YK5QbimxUfge7hMRWH8BDyEtAMzGJEKoqjA9cLaowYLiO+WfFNd1iPQg+mkI3zPLKRLgKv4CeSKc6E6qOOq4+XT74CrQB3420B5MJ7GvgZScZ/glskU5wZ1fY01S/Pd7GnOu7jK9Ad4Fq0OZvZjWziHwNfMVwkLc6Kqrus2tbBNcQnJyEZxarLrMg8cB14kME9Scc546rOfM1je/uSUiCAncCHwEngbUSYPvAO8Jp6trOBcb19Cf0M+DrwWIRBPvwD/KZs2s1gRF4X68DjPhVjPgNeojmBJoAnGurbJGglhL7VaGKZtU3QzSBUoFU8d/9MuYNkHrwJFcg7fsiU4Hgu5sXhKC+zYNtjBPK6w2RI1J0yRiCvW3CGxGQlot/Nj+Iyi7K5E8hBrEDfM5gPzpkNxOZgYgX6l/BUbEquIDYHU+X7oFFaZtG2Vkk8LQOfVmjfJtHBbRWBbgMvV2g/EqT+Tjp7OoEcVE1+j8qVI/rDiW4GOegEctAJ5KCqQH/UYkWz/FmlcVWBTlY1oGF+B15PbURHR0dHR0P8B16Z/23Ljv1mAAAAAElFTkSuQmCC);
        position: relative;
        color: rgba(0, 0, 0, 0.54);
        background: url(/static/img/i-setting.fb9625b3f2.png) no-repeat 0.32rem;
        background-size: 0.48rem auto;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        line-height: 0;
        list-style: none;
        a {
          display: block;
          padding-right: 0.666667rem;
          padding-left: 1.6rem;
          height: 100%;
          display: box;
          display: -webkit-box;
          box-align: center;
          -webkit-box-align: center;
          box-pack: justify;
          -webkit-box-pack: justify;
          color: currentColor;
          cite {
            font-size: 0.373333rem;
            font-style: normal;
            color: rgba(0, 0, 0, 0.87);
          }
        }
      }
      .list_items::after {
        content: "";
        position: absolute;
        right: 5.12px;
        right: 0.32rem;
        top: 50%;
        width: 3.2px;
        width: 0.2rem;
        height: 3.2px;
        height: 0.2rem;
        border-left: 1px solid currentColor;
        border-top: 1px solid currentColor;
        transform: translate3d(0, -50%, 0) rotate(135deg);
        -webkit-transform: translate3d(0, -50%, 0) rotate(135deg);
      }
      .list_items:nth-last-child(1) {
        border-bottom: none;
      }
    }
    //
    .main_list {
      background: #fff;
      margin-bottom: 0.28rem;
    }
  }
}
</style>

