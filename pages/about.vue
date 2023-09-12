<template>
  <div>
    <h2>ABOUT</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga laborum ex
      ea saepe perspiciatis vero perferendis ipsa fugiat quisquam veritatis.
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim amet
      sapiente ullam molestias? Debitis exercitationem architecto ex hic soluta!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim amet
      sapiente ullam molestias? Debitis exercitationem architecto ex hic soluta!
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
// const { data } = await useFetch("/api/monu?name=Monu", {
//   method: "post",
//   body: { age: 30 },
// });

const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
