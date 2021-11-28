<script setup lang="ts">
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
// import exiftool from 'exiftool-vendored'
// import exiftool = require("exiftool-vendored")

const store = useStore()
let fileHandle;

const opendir = async () => {
  const dirHandle = await (<any>window).showDirectoryPicker();
  for await (const entry of dirHandle.values()) {
    console.log(entry)//.kind, entry.name);
    // console.log(exiftool);
    // exiftool
    //   .read(entry)
    //   .then((tags /*: Tags */) =>
    //     console.log(
    //       `Rating: ${tags}`
    //     )
    //   )
  }
}

// onMounted(() => {

//   // store a reference to our file handle
//   // store a reference to our file handle
//   let fs
//   const initFS = () => {
//     (window as any).requestFileSystem = (window as any).requestFileSystem || (window as any).webkitRequestFileSystem;
//     (window as any).requestFileSystem((window as any).TEMPORARY, 1024 * 1024, function (filesystem) {
//       fs = filesystem;
//       console.log(fs);
//     }, errorHandler);
//   }
//   function errorHandler(e) {
//     console.log(e); // it show everything that you want 
//   }
// })
</script>

<template>
  <h1>test</h1>
  <button @click="opendir">Open</button>
</template>

<style>
body {
  margin: 0;
}
h1 {
  width: 95%;
  border: 1px solid orange;
  display: block;
  border-radius: 20px;
  place-self: center;
  /* font-size: 205px; */
  color: purple;
  text-align: center;
  background-color: lightskyblue;
}

#app {
  height: 100vh;
  /* display: grid; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
