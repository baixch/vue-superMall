<template>
  <div>
    <Test>
      <template slot="a" slot-scope="slot">
        {{slot.data}}
      </template>
      <template slot="b" slot-scope="slot">
        {{slot.data1[0]}}
      </template>
    </Test>
    <!-- <Test></Test> -->
  </div>

</template>



<script>
  import Test from "../components/test"
  export default {
    data() {
      return {}
    },
    components: {
      Test
    },
    compute: {

    }
  }
</script>