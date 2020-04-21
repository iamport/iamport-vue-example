<template>
  <div class="imp-container imp-result">
    <a-icon
      v-if="success"
      type="check-circle"
      :style="{ fontSize: '200px', color: '#52c41a' }"
    />
    <a-icon
      v-else
      type="exclamation-circle"
      :style="{ fontSize: '200px', color: '#f5222d' }"
    />
    <h1>{{ type === 'payment' ? '결제' : '본인인증' }}에 {{ success ? '성공' : '실패'}}하였습니다</h1>
    <ul>
      <li>
        <span>아임포트 번호</span>
        <span>{{ impUid }}</span>
      </li>
      <li>
        <span>주문번호</span>
        <span>{{ merchantUid }}</span>
      </li>
      <li v-if="!success">
        <span>에러 메시지</span>
        <span>{{ errorMessage }}</span>
      </li>
    </ul>
    <a-button size="large" @click="handleGoBack">
      뒤로가기
    </a-button>
  </div>
</template>

<script>
export default {
  data() {
    const { query } = this.$router.history.current;
    const { type } = query;
    return {
      type,
      success: this.getSuccess(query),
      impUid: query.imp_uid,
      merchantUid: query.merchant_uid,
      errorMessage: `[${query.error_code}] ${query.error_msg}`,
    };
  },
  methods: {
    getSuccess(query) {
      const { success } = query;
      const impSuccess = query.imp_success;
      if (impSuccess === undefined) {
        if (typeof success === 'string') {
          return success === 'true';
        }
        return success;
      }
      if (typeof impSuccess === 'string') {
        return impSuccess === 'true';
      }
      return impSuccess;
    },
    handleGoBack() {
      this.$router.push(`/${this.type}`);
    },
  },
};
</script>

<style lang="less">
.imp-container.imp-result {
  .anticon {
    margin-bottom: 20px;
  }
  ul {
    padding: 0;
    margin: 0 auto;
    width: 50%;
    li {
      text-align: left;
      list-style: none;
      font-size: 16px;
      display: flex;
      margin: 10px 0;
      span {
        display: inline-block;
      }
      span:first-child {
        width: 40%;
        color: #888;
      }
      span:last-child {
        width: 60%;
      }
    }
  }
  .ant-btn {
    margin-top: 30px;
  }
}
</style>
