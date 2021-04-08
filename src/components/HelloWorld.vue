<template>
  <div class="hello">
    <el-button @click="addNewGroup" size="mini" type="primary"
      >添加规格项目</el-button
    >
    <div v-for="(item, index) in group" :key="index">
      <el-row>
        规格项:
        <el-col :span="4">
          <el-input v-model="group[index].value"></el-input>
        </el-col>
      </el-row>
      <span v-for="(v, idx) in item" :key="idx">
        {{ v }}
      </span>
      <el-button @click="handleAddNewItem()" type="text">添加规格值</el-button>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <span>输入规格值</span>
        <el-input type="textarea" v-model="name"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button
            type="primary"
            @click="
              dialogVisible = false;
              addNewItem(index);
            "
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      group: [],
      name: "",
      dialogVisible: false,
    };
  },
  methods: {
    addNewGroup() {
      this.group.push({
        item: [],
      });
    },
    handleAddNewItem() {
      this.dialogVisible = true;
    },
    addNewItem(index) {
      this.group[index]["item"].push(this.name);
      this.name = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
