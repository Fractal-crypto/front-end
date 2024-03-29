<template>
  <!-- TODO We could move the list into a component since we are reusing the same code for both lists. -->
  <div>
    <div>
      <h3>Whitelist Methods</h3>

      <div v-if="pairlistMethods.length" class="list">
        <b-list-group v-for="(method, key) in pairlistMethods" :key="key">
          <b-list-group-item href="#" class="pair white">{{ method }}</b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <!-- Show Whitelist -->
    <h3>Whitelist</h3>
    <div v-if="whitelist.length" class="list">
      <b-list-group v-for="(pair, key) in whitelist" :key="key">
        <b-list-group-item class="pair white">{{ pair }}</b-list-group-item>
      </b-list-group>
    </div>
    <p v-else>List Unavailable. Please Login and make sure server is running.</p>
    <hr />

    <!-- Blacklsit -->
    <div>
      <label
        class="mr-auto h3"
        title="Blacklist - Select (followed by a click on '-') to remove pairs"
        >Blacklist</label
      >
      <div class="float-right d-flex d-flex-columns pr-1">
        <b-button
          id="blacklist-add-btn"
          class="mr-1"
          :class="botApiVersion >= 1.12 ? 'col-6' : ''"
          size="sm"
          >+</b-button
        >
        <b-button
          v-if="botApiVersion >= 1.12"
          size="sm"
          class="col-6"
          title="Select pairs to delete pairs from your blacklist."
          :disabled="blacklistSelect.length === 0"
          @click="deletePairs"
        >
          <DeleteIcon :size="16" title="Delete Bot" />
        </b-button>
      </div>
      <b-popover
        title="Add to blacklist"
        target="blacklist-add-btn"
        triggers="click blur"
        :show.sync="blackListShow"
      >
        <form ref="form" @submit.prevent>
          <div>
            <b-form-group label-cols="2" label="Pair" label-for="pair-input">
              <b-form-input
                id="pair-input"
                v-model="newblacklistpair"
                required
                autofocus
              ></b-form-input>
            </b-form-group>
            <b-button
              id="blacklist-submit"
              class="float-right mb-2"
              size="sm"
              type="submit"
              @click="addBlacklistPair"
              >Add</b-button
            >
          </div>
        </form>
      </b-popover>
    </div>
    <div v-if="blacklist.length" class="list">
      <b-list-group v-for="(pair, key) in blacklist" :key="key">
        <b-list-group-item
          class="pair black"
          :active="blacklistSelect.indexOf(key) > -1"
          @click="blacklistSelectClick(key)"
          ><span class="check">&#x2714;</span>{{ pair }}</b-list-group-item
        >
      </b-list-group>
    </div>
    <p v-else>BlackList Unavailable. Please Login and make sure server is running.</p>
    <!-- Pagination -->
    <!-- TODO Add pagination support -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { BlacklistPayload, BlacklistResponse } from '@/types';
import { BotStoreGetters } from '@/store/modules/ftbot';
import DeleteIcon from 'vue-material-design-icons/Delete.vue';
import StoreModules from '@/store/storeSubModules';

const ftbot = namespace(StoreModules.ftbot);

@Component({ components: { DeleteIcon } })
export default class FTBotAPIPairList extends Vue {
  newblacklistpair = '';

  blackListShow = false;

  blacklistSelect: number[] = [];

  @ftbot.Action getWhitelist;

  @ftbot.Action getBlacklist;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ftbot.Action addBlacklist!: (payload: BlacklistPayload) => Promise<BlacklistResponse>;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ftbot.Action deleteBlacklist!: (payload: string[]) => Promise<BlacklistResponse>;

  @ftbot.Getter [BotStoreGetters.whitelist]!: string[];

  @ftbot.Getter [BotStoreGetters.blacklist]!: string[];

  @ftbot.Getter [BotStoreGetters.pairlistMethods]!: string[];

  @ftbot.Getter [BotStoreGetters.botApiVersion]: number;

  created() {
    this.initBlacklist();
  }

  initBlacklist() {
    if (this.whitelist.length === 0) {
      this.getWhitelist();
    }
    if (this.blacklist.length === 0) {
      this.getBlacklist();
    }
  }

  addBlacklistPair() {
    if (this.newblacklistpair) {
      this.blackListShow = false;

      this.addBlacklist({ blacklist: [this.newblacklistpair] });
      this.newblacklistpair = '';
    }
  }

  blacklistSelectClick(key) {
    console.log(key);
    const index = this.blacklistSelect.indexOf(key);
    if (index > -1) {
      this.blacklistSelect.splice(index, 1);
    } else {
      this.blacklistSelect.push(key);
    }
  }

  deletePairs() {
    if (this.blacklistSelect.length === 0) {
      console.log('nothing to delete');
      return;
    }
    // const pairlist = this.blacklistSelect;
    const pairlist = this.blacklist.filter(
      (value, index) => this.blacklistSelect.indexOf(index) > -1,
    );
    console.log('Deleting pairs: ', pairlist);
    this.deleteBlacklist(pairlist);
    this.blacklistSelect = [];
  }
}
</script>

<style scoped lang="scss">
.check {
  // Hidden checkbox on blacklist selection
  background: #41b883;
  opacity: 0;
  border-radius: 50%;
  z-index: 5;
  width: 1.3em;
  height: 1.3em;
  top: -0.2em;
  left: -0.2em;
  position: absolute;
  transition: opacity 0.2s;
}
.list-group-item.active .check {
  opacity: 1;
}
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  grid-gap: 0.5rem;
  padding-bottom: 1rem;
}
.pair {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 0.5rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.white {
  background: white;
  color: black;
}

.black {
  background: black;
  color: white;
}
</style>
