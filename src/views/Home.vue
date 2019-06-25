<template>
  <div class="home">
    <van-nav-bar title="充值记录" left-arrow @click-left="onClickLeft"/>

    <van-cell size="large" class="home-tab">
      <div slot="title" class="home-tab__title">全部</div>
      <div slot="default" class="home-tab__time" @click="show = !show">
        <span>2019.06</span>
        <van-icon name="arrow-down"/>
      </div>
    </van-cell>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell title="充值" v-for="(item,index) in list" :key="index">
        <div slot="title" :class="index%2 == 0 ? '' : 'c-red'">{{index%2 == 0 ? '支付成功' : '支付失败' }}</div>
        <div slot="label">
          <div>2019-6-25 19:12:40</div>
        </div>
        <div slot="default" :class="index%2 == 0 ? 'c-main' : 'c-red'">
          <div>105.00</div>
          <div>{{index%2 == 0 ? '支付成功' : '支付失败' }}</div>
        </div>
      </van-cell>
    </van-list>

    <!-- 时间选择组件 -->
    <van-action-sheet v-model="show">
      <van-datetime-picker
        title="选择时间"
        v-model="currentDate"
        type="year-month"
        :min-date="minDate"
        :formatter="formatter"
        @cancel="show = !show"
        @confirm="confirmTime"
      />
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      show: false,
      minDate: new Date(2000, 10, 1),
      maxDate: new Date(2029, 10, 1),
      currentDate: new Date()
    };
  },
  mounted() {},
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    confirmTime(value) {
      console.log(value);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 50) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  &-tab {
    &__title {

    }
    &__time{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span{
        padding-right: 10px;
      }
    }
  }
}
</style>
