<template lang="pug">
div.root
  h1 iamaleks.dev Nexus
  ul
    li(v-for="website of websites")
      div
        a(:href="website.root")
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

$text-default = #515A5A
$background-default = darken(white, 2%)

.root
  color: darken($text-default, 30%)
  background-color: $background-default

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

    li
      list-style-type: none

      margin: 10px
      width: 175px

      &:hover
        animation: moving-gradient 2s normal infinite

        @keyframes moving-gradient
          for value in (0..10)
            { percentage((value / 10)) }
              background-image: linear-gradient(unit((360 / 10) * value, "deg"), #e66465, #9198e5)

      div
        background-color: $background-default

        box-sizing: border-box
        margin: 5px
        padding: 10px
        height: "calc(100% - %s)" % (2 * @margin)
        width: "calc(100% - %s)" % (2 * @margin)

        a
          color: inherit
          text-decoration: none

          h2
            font-size: 16px
            text-transform: uppercase

          p
            color: darken($text-default, 10%)

            margin: 0

            font-family: "Muli"
            font-size: 14px
</style>