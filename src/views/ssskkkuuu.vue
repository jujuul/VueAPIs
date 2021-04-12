<template>
  <div>
    <el-button size="small" @click="onSubmit()">提交</el-button>
    <el-popover placement="top" width="240" v-model="add_attr_popover_bool">
      <div style="display: flex; grid-gap: 10px;">
        <el-input
          ref="addValueInput"
          v-model.trim="add_attr"
          @keyup.enter.native="addAttr()"
        />
        <el-button type="primary" @click="addAttr()">确定</el-button>
      </div>
      <el-button
        slot="reference"
        size="small"
        type="primary"
        icon="el-icon-plus"
        :disabled="attrBtnDisabled"
        style="margin-left: 40px;"
        >添加值</el-button
      >
    </el-popover>
    <!-- sku_arr区 -->
    <div v-for="(item, index) in this.form.sku_arr" :key="index">
      <div style="margin-top:20px">
        {{ item.attr
        }}<el-popover
          placement="top"
          width="240"
        >
          <div style="display: flex; grid-gap: 10px;">
            <el-input
              ref="addValueInput"
              v-model.trim="add_item"
              @keyup.enter.native="addItem(index)"
            />
            <el-button type="primary" @click="addItem(index)">确定</el-button>
          </div>
          <el-button
            slot="reference"
            size="small"
            icon="el-icon-plus"
            :disabled="itemBtnDisabled"
            style="margin-left: 40px;"
            >添加值</el-button
          >
        </el-popover>
        <div v-for="(ktem, kndex) in item.valueList" :key="kndex">
          {{ ktem.name }}
        </div>
      </div>
    </div>
    <!-- <div v-for="(item, index) in this.form.sku_arr" :key="index">

    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      add_attr_popover_bool: false,
      add_item_popover_bool: false,
      add_attr: "",
      attrBtnDisabled: false,
      form: {
        sku_arr: [],
        table_data: [], // 表格中的数据
      },
      maxGroupId: 0,
      add_item: "",
      itemBtnDisabled: false,
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    addAttr() {
      this.form.sku_arr.push({
        attr: this.add_attr,
        valueList: [],
        groupId: this.maxGroupId,
      });
      this.add_attr_popover_bool = false;
      this.add_attr = "";
    },
    addItem(kndex) {
      console.log(kndex);
      console.log(this.form.sku_arr);
      console.log(this.form.sku_arr[kndex]);
      this.form.sku_arr[kndex]["valueList"].push({
        name: this.add_item,
        id: kndex,
      });
      this.add_item_popover_bool = false;
      this.add_item = "";
    },
  },
};
</script>

<style></style>
