<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: #344e81;
}

.imp-container {
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 3px;
  padding: 2rem 5rem;

  h1 {
    margin-bottom: 50px;
  }

  .imp-payment-escrow .ant-form-item-control {
    text-align: left;
  }
  .ant-btn {
    margin: 20px 5px 0 5px;
  }
}

.ant-row.ant-form-item {
  margin-bottom: 10px;
}
</style>
