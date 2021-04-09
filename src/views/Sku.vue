<template>
  <div class="hello">
    <el-popover placement="top" width="240" v-model="add_popover_bool">
      <div style="display: flex; gap: 10px;">
        <el-input
          ref="addValueInput"
          v-model.trim="add_value"
          @keyup.enter.native="confirm()"
        />
        <el-button type="primary" @click="confirm()">确定</el-button>
      </div>
      <el-button
        slot="reference"
        size="small"
        type="primary"
        :disabled="attrBtnDisabled"
        style="margin-left: 40px;"
        >自定义</el-button
      >
    </el-popover>
    <div v-for="(v, idx) in form.sku_arr" :key="idx">
      <div>
        <el-input style="width: 100px;" v-model.trim="v.attr"></el-input>
        <el-button
          type="danger"
          size="mini"
          icon="el-icon-delete"
          circle
          @click="deleteAttr(index)"
        >
        </el-button>
      </div>
      <div v-for="(r, kdx) in v.valueList" :key="kdx">
        <el-input v-model="v[kdx]"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      group: [],
      attrName: "",
      dialogVisible: false,
      add_popover_bool: false, // 添加属性的小弹窗
      add_value: "",
      // 表单
      form: {
        sku_arr: [],
        table_data: [], // 表格中的数据
      },
    };
  },
  computed: {
    attrBtnDisabled() {
      return false;
      // return this.form.sku_arr.length >= 2;
    },
  },
  methods: {
    confirm() {
      if (!this.add_value) return;
      this.form.sku_arr.push({
        attr: this.add_value,
        valueList: [""],
      });
      this.add_popover_bool = false;
      this.add_value = "";
    },
    deleteAttr(idx) {
      this.group.attr.splice(idx, 1);
    },
    handleAddNewItem() {
      this.dialogVisible = true;
    },
    addNewItem(index) {
      this.group[index]["attr"].push(this.attrName);
      this.attrName = "";
    },
  },
};
</script>
