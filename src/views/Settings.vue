<template>
  <div class="container mt-3">
    <b-card header="FreqUI Settings">
      <div class="text-left">
        <p>UI Version: {{ getUiVersion }}</p>
        <b-form-group
          description="Lock dynamic layouts, so they cannot move anymore. Can also be set from the navbar at the top."
        >
          <b-checkbox v-model="layoutLockedLocal">Lock layout</b-checkbox>
        </b-form-group>
        <b-form-group description="Reset dynamic layouts to how they were.">
          <b-button size="sm" @click="resetDynamicLayout">Reset layout</b-button>
        </b-form-group>
        <b-form-group
          label="Show open trades in header"
          description="Decide if open trades should be visualized"
        >
          <b-form-select
            v-model="openTradesVisualization"
            :options="openTradesOptions"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          label="UTC Timezone"
          description="Select timezone (we recommend UTC is recommended as exchanges usually work in UTC)"
        >
          <b-form-select v-model="timezoneLoc" :options="timezoneOptions"></b-form-select>
        </b-form-group>
        <b-form-group description="Keep background sync running while other bots are selected.">
          <b-checkbox v-model="backgroundSyncLocal">Background sync</b-checkbox>
        </b-form-group>
      </div>
    </b-card>
  </div>
</template>

<script lang="ts">
import { AlertActions } from '@/store/modules/alerts';
import { LayoutActions, LayoutGetters } from '@/store/modules/layout';
import { OpenTradeVizOptions, SettingsActions, SettingsGetters } from '@/store/modules/settings';
import StoreModules from '@/store/storeSubModules';
import { Component, Vue } from 'vue-property-decorator';
import { namespace, Getter } from 'vuex-class';

const layoutNs = namespace(StoreModules.layout);
const uiSettingsNs = namespace(StoreModules.uiSettings);
const alerts = namespace(StoreModules.alerts);

@Component({})
export default class Settings extends Vue {
  @Getter getUiVersion!: string;

  @layoutNs.Getter [LayoutGetters.getLayoutLocked]: boolean;

  @layoutNs.Action [LayoutActions.setLayoutLocked];

  @layoutNs.Action [LayoutActions.resetTradingLayout];

  @layoutNs.Action [LayoutActions.resetDashboardLayout];

  @alerts.Action [AlertActions.addAlert];

  @uiSettingsNs.Getter [SettingsGetters.openTradesInTitle]: string;

  @uiSettingsNs.Getter [SettingsGetters.timezone]: string;

  @uiSettingsNs.Getter [SettingsGetters.backgroundSync]: boolean;

  @uiSettingsNs.Action [SettingsActions.setOpenTradesInTitle];

  @uiSettingsNs.Action [SettingsActions.setTimeZone];

  @uiSettingsNs.Action [SettingsActions.setBackgroundSync];

  openTradesOptions = [
    { value: OpenTradeVizOptions.showPill, text: 'Show pill in icon' },
    { value: OpenTradeVizOptions.asTitle, text: 'Show in title' },
    { value: OpenTradeVizOptions.noOpenTrades, text: "Don't show open trades in header" },
  ];

  // Careful when adding new timezones here - eCharts only supports UTC or user timezone
  timezoneOptions = ['UTC', Intl.DateTimeFormat().resolvedOptions().timeZone];

  get timezoneLoc() {
    return this.timezone;
  }

  set timezoneLoc(value: string) {
    this[SettingsActions.setTimeZone](value);
  }

  get openTradesVisualization() {
    return this.openTradesInTitle;
  }

  set openTradesVisualization(value: string) {
    this.setOpenTradesInTitle(value);
  }

  get layoutLockedLocal() {
    return this.getLayoutLocked;
  }

  set layoutLockedLocal(value: boolean) {
    this.setLayoutLocked(value);
  }

  get backgroundSyncLocal(): boolean {
    return this.backgroundSync;
  }

  set backgroundSyncLocal(value: boolean) {
    this.setBackgroundSync(value);
  }

  resetDynamicLayout(): void {
    this.resetTradingLayout();
    this.resetDashboardLayout();
    this.addAlert({ message: 'Layouts have been reset.' });
  }
}
</script>

<style scoped></style>
