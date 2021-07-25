<template>
  <el-form
    ref="form"
    :model="form"
    label-width="80px"
    @submit.prevent="() => {}"
  >
    <h1>{{ id ? "修改" : "创建" }}分类</h1>
    <el-form-item label="分类名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="父级分类">
      <el-select v-model="form.parent" placeholder="请选择父级分类">
        <el-option
          v-for="category in categoryList"
          :key="category._id"
          :label="category.name"
          :value="category._id"
        ></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">
        {{ id ? "修改" : "创建" }}
      </el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "CategoryEdit",
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      form: {
        name: "",
        parent:null
      },
      categoryList: []
    };
  },
  methods: {
    async onSubmit() {
      let res;
      if (this.id) {
        res = await this.$http.put(`/rest/categories/${this.id}`, this.form);
      } else {
        res = await this.$http.post("/rest/categories", this.form);
      }
      console.log("Bowen ~ file: edit.vue ~ line 34 ~ onSubmit ~ res", res);
      this.$router.push({
        name: "CategoryList"
      });
    },
    async fetch() {
      let res = await this.$http.get(`/rest/categories/${this.id}`);
      this.form = res.data;
    },
    async fetchAll() {
      let res = await this.$http.get(`/rest/categories`);
      this.categoryList = res.data;
    }
  },
  async created() {
    this.fetchAll();
    if (this.id) {
      this.fetch();
    }
  }
};
</script>

<style></style>
