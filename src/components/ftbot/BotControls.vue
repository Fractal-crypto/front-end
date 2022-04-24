<template>
  <div>

  
    <ForceBuyForm :modal-show="forcebuyShow" @close="$bvModal.hide('forcebuy-modal')" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { BotState, ForceSellPayload } from '@/types';
import { BotStoreActions, BotStoreGetters } from '@/store/modules/ftbot';
import PlayIcon from 'vue-material-design-icons/Play.vue';
import StopIcon from 'vue-material-design-icons/Stop.vue';
import PauseIcon from 'vue-material-design-icons/Pause.vue';
import ReloadIcon from 'vue-material-design-icons/Reload.vue';
import ForceSellIcon from 'vue-material-design-icons/CloseBoxMultiple.vue';
import ForceBuyIcon from 'vue-material-design-icons/PlusBoxMultipleOutline.vue';
import StoreModules from '@/store/storeSubModules';
import ForceBuyForm from './ForceBuyForm.vue';

const ftbot = namespace(StoreModules.ftbot);

@Component({
  components: {
    ForceBuyForm,
    PlayIcon,
    StopIcon,
    PauseIcon,
    ReloadIcon,
    ForceSellIcon,
    ForceBuyIcon,
  },
})
export default class BotControls extends Vue {
  forcebuyShow = false;

  @ftbot.Getter [BotStoreGetters.botState]?: BotState;

  @ftbot.Action startBot;

  @ftbot.Action stopBot;

  @ftbot.Action stopBuy;

  @ftbot.Action reloadConfig;

  @ftbot.Action startTrade;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ftbot.Action [BotStoreActions.forcesell]!: (payload: ForceSellPayload) => void;

  @ftbot.Getter [BotStoreGetters.isTrading]!: boolean;

  @ftbot.Getter [BotStoreGetters.isWebserverMode]!: boolean;

  get isRunning(): boolean {
    return this.botState?.state === 'running';
  }

  initiateForceenter() {
    this.$bvModal.show('forcebuy-modal');
  }

  handleStopBot() {
    this.$bvModal.msgBoxConfirm('Stop Bot?').then((value: boolean) => {
      if (value) {
        this.stopBot();
      }
    });
  }

  handleStopBuy() {
    this.$bvModal
      .msgBoxConfirm('Stop buying? Freqtrade will continue to handle open trades.')
      .then((value: boolean) => {
        if (value) {
          this.stopBuy();
        }
      });
  }

  handleReloadConfig() {
    this.$bvModal.msgBoxConfirm('Reload configuration?').then((value: boolean) => {
      if (value) {
        this.reloadConfig();
      }
    });
  }

  handleForceSell() {
    this.$bvModal.msgBoxConfirm(`Really forcesell ALL trades?`).then((value: boolean) => {
      if (value) {
        const payload: ForceSellPayload = {
          tradeid: 'all',
          // TODO: support ordertype (?)
        };
        this.forcesell(payload);
      }
    });
  }
}
</script>
