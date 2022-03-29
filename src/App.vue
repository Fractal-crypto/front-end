<template>
  <div>
    <div id="app" class="d-flex flex-column vh-100">
      <NavBar v-if="!isChecked"></NavBar>
        <Body class="flex-fill overflow-auto" />
        <NavFooter v-if="!isChecked"></NavFooter>
      </div>
  </div>
</template>

  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import NavBar from '@/components/layout/NavBar.vue';
  import NavFooter from '@/components/layout/NavFooter.vue';
  import Body from '@/components/layout/Body.vue';
  import { namespace } from 'vuex-class';
  import { SettingsGetters } from './store/modules/settings';
  import { setTimezone } from './shared/formatters';
  import StoreModules from './store/storeSubModules';

  const uiSettingsNs = namespace(StoreModules.uiSettings);

  @Component({
    components: { NavBar, Body, NavFooter },
  })
  export default class App extends Vue {
    @uiSettingsNs.Getter [SettingsGetters.timezone]: string;
    isChecked:boolean = false;
    mounted() {
      setTimezone(this.timezone);
    }
    created() {
      console.log("sdasd"+this.isChecked)
      console.log(this.isChecked)
      if(document.location.pathname==='/login2')
      {
        this.isChecked = true;
      }

    }
  }
  </script>

  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  /* * {
    outline: 1px solid #f00 !important;
  } */
  </style>
