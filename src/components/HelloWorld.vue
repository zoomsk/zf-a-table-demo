<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <zf-a-table  
   :columns="columns"
    :data-source="data">
    <template v-slot:button>
       <a-button type="primary">hello2</a-button>
    </template>
     <template v-slot:leftTitle>
        <div class="table-title-info">
          <a-icon type="info-circle" class="primary-color" theme="filled" />
       111
        </div>
      </template>
      <template v-slot:button>
        <a-button type="primary"  >新增</a-button>
      </template>
   </zf-a-table>
  </div>
</template>

<script>
import ZfATable from 'zf-a-table'
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
export default {
  name: 'ZfATableDemo',
  components: {
    ZfATable
  },
  data () {
    const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
    check: false,
    disabled: true
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
return {
  columns,
  data
}
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  line-height: 1.8
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<style>

</style>
