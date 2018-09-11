<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import "./assets/css/style.css";
@import "https://use.fontawesome.com/releases/v5.3.1/css/all.css";
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";

#app {
  margin: 10px;
}
</style>
