<template lang="pug">
div.root
  h1 iamaleks.dev Nexus
  ul
    a(v-for="website of websites" :href="website.root")
      li
        img(:src="website.image" :alt="`${website.name} logo`" width="50" height="50")
        h2 {{ website.name }}
        p {{ website.description }}
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Website, websites } from "@/websites";

@Component
export default class Root extends Vue {
  private readonly websites: Website[] = websites;
};
</script>

<style lang="stylus" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Muli&display=swap")

$background-default = white
$text-default = #515A5A

.root
  color: darken($text-default, 30%)
  background-color: darken($background-default, 2%)

  height: 100vh

  display: flex
  flex-direction: column
  justify-content: center

  font-family: "Open Sans"
  text-align: center

  ul
    margin: 0
    padding: 0

    display: flex
    flex-wrap: wrap
    justify-content: space-evenly

    a
      color: inherit
      text-decoration: none

      padding: 5px
      margin: 10px
      width: 150px

      border-width: 2px
      border-color: transparent
      border-style: solid

      &:hover
        animation: moving-gradient 2s normal infinite

      @keyframes moving-gradient
        for value in (0..10)
          { percentage((value / 10)) }
            border-image: linear-gradient(unit((360 / 10) * value, "deg"), #e66465, #9198e5) 10

      li
        list-style-type: none

        h2
          font-size: 16px
          text-transform: uppercase

        p
          margin: 0

          color: darken($text-default, 10%)

          font-family: "Muli"
          font-size: 14px
</style>