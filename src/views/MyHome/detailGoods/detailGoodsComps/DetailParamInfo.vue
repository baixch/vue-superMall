<template>
  <div class="param-info">
    <div class="rule" v-if="itemParam.rule">
      <table v-for="(table, index1) in itemParam.rule.tables" :key="index1">
        <tr v-for="(th, index2) in table" :key="index2">
          <td v-for="(item, index3) in th" :key="index3">
            {{ item }}
          </td>
        </tr>
      </table>
    </div>
    <div class="info" v-if="itemParam.info">
      <div v-for="(item, index) in itemParam.info.set" :key="index">
        <span>{{ item.key }}</span>
        <span>{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailParamInfo",
  props: {
    itemParam: {}
  }
};
</script>
<style scoped>
.param-info {
  position: relative;
  padding: 20px 0;
  border-top: 8px solid var(--black-230-color);
}
.rule,
.info {
  margin: 0 10px;
  color: var(--black-100-color);
}
.rule table {
  width: 100%;
  border-collapse: collapse;
}
.rule table tr {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--black-230-color);
}
.rule table tr td {
  /* border-bottom: 1px solid var(--black-230-color); */
}
.info div {
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid var(--black-230-color);
}
.info div span:nth-child(1) {
  position: absolute;
}
.info div span:nth-child(2) {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 110px;
  color: palevioletred;
}
</style>