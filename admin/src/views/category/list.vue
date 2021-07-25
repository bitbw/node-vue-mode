<template>
  <el-table :data="tableData">
    <el-table-column prop="name" label="名称"></el-table-column>
    <el-table-column prop="_id" label="id"></el-table-column>
    <el-table-column prop="parent.name" label="父级分类"></el-table-column>
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="handleEdit(scope.row)">
          编辑
        </el-button>
        <el-button type="text" size="small" @click="handleDelete(scope.row)">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    handleEdit(row) {
      this.$router.push(`/category/edit/${row._id}`);
    },
    handleDelete(row) {
      this.$confirm(`确定删除${row.name}分类`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        let res = await this.$http.delete(`/rest/categories/${row._id}`);
        console.log(
          "Bowen ~ file: list.vue ~ line 38 ~ handleDelete ~ res",
          res
        );
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    },
    async fetch() {
      let res = await this.$http.get("/rest/categories");
      this.tableData = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style></style>
