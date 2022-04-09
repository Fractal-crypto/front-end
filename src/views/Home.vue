<template>
  <div class="home">
    <div class="container col-12 col-sm-6 col-lg-4">
      <bot-list />
    </div>
    <hr />
    <img alt="Freqtrade logo" src="../assets/Robot.png" width="450px" class="my-5" />
    <!--    <div alt="Freqtrade logo" class="logo-svg my-5 mx-auto" />-->
    <div>
      <h1 style="color: red;">TuKorea Crypto currency trading bot</h1>
    </div>
    <div style="color: red;">This page allows you to control your trading bot.</div>
    <br />
    <p style="color: red;">
      If you need any help, please visit our github.
      <a href="https://github.com/Fractal-crypto">Github</a>.
    </p>

    <p style="color: red;">Have fun - <i>wishes you the Tukorea</i></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BotList from '@/components/BotList.vue';

@Component({
  components: { BotList },
}) 
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  margin-top: 1.5em;
}
.logo-svg {
  -webkit-mask: url(../assets/freqtrade-logo-mask.png) no-repeat center;
  -webkit-mask-size: 240px 240px;
  mask: url(../assets/freqtrade-logo-mask.png) no-repeat center;
  mask-size: contain;
  width: 250px;
  height: 250px;
}
</style>
