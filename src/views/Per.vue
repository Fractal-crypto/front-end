<template>
  <GridLayout
    class="h-100 w-100"
    :row-height="50"
    :layout.sync="gridLayout"
    :vertical-compact="false"
    :margin="[5, 5]"
    :responsive-layouts="responsiveGridLayouts"
    :is-resizable="!isLayoutLocked"
    :is-draggable="!isLayoutLocked"
    :responsive="true"
    :prevent-collision="true"
    :cols="{ lg: 12, md: 12, sm: 12, xs: 4, xxs: 2 }"
    @layout-updated="layoutUpdated"
    @breakpoint-changed="breakpointChanged"
  >
    <GridItem
      :i="gridLayoutDaily.i"
      :x="gridLayoutDaily.x"
      :y="gridLayoutDaily.y"
      :w="gridLayoutDaily.w"
      :h="gridLayoutDaily.h"
      :min-w="3"
      :min-h="4"
      drag-allow-from=".drag-header"
    >
      <DraggableContainer>
        <Balance
        />
      </DraggableContainer>
    </GridItem>
    <GridItem
      :i="gridLayoutDaily2.i"
      :x="gridLayoutDaily2.x"
      :y="gridLayoutDaily2.y"
      :w="gridLayoutDaily2.w"
      :h="gridLayoutDaily2.h"
      :min-w="3"
      :min-h="4"
      drag-allow-from=".drag-header"
    >
      <DraggableContainer>
        <BotStatus class="mt-1 mb-2" 
        />
      </DraggableContainer>
    </GridItem>
    <GridItem
      :i="gridLayoutBotComparison.i"
      :x="gridLayoutBotComparison.x"
      :y="gridLayoutBotComparison.y"
      :w="gridLayoutBotComparison.w"
      :h="gridLayoutBotComparison.h"
      :min-w="3"
      :min-h="4"
      drag-allow-from=".drag-header"
    >
      <DraggableContainer >
        <DailyStats />
      </DraggableContainer>
    </GridItem>
    <GridItem
      :i="gridLayoutBotComparison2.i"
      :x="gridLayoutBotComparison2.x"
      :y="gridLayoutBotComparison2.y"
      :w="gridLayoutBotComparison2.w"
      :h="gridLayoutBotComparison2.h"
      :min-w="3"
      :min-h="4"
      drag-allow-from=".drag-header"
    >
      <DraggableContainer >
        <PairLockList />
      </DraggableContainer>
    </GridItem>
    <GridItem
      :i="gridLayoutAllOpenTrades.i"
      :x="gridLayoutAllOpenTrades.x"
      :y="gridLayoutAllOpenTrades.y"
      :w="gridLayoutAllOpenTrades.w"
      :h="gridLayoutAllOpenTrades.h"
      :min-w="3"
      :min-h="4"
      drag-allow-from=".drag-header"
    >
      <DraggableContainer header="Pairs combined">
        <PairSummary :pairlist="whitelist" :current-locks="currentLocks" :trades="openTrades" />
      </DraggableContainer>
    </GridItem>
    <GridItem
      :i="gridLayoutCumChart.i"
      :x="gridLayoutCumChart.x"
      :y="gridLayoutCumChart.y"
      :w="gridLayoutCumChart.w"
      :h="gridLayoutCumChart.h"
      :min-w="3"
      :min-h="4"
      drag-allow-from=".drag-header"
    >
<!--      <DraggableContainer header="Cumulative Profit">-->
<!--        <CumProfitChart :trades="allTradesAllBots" :show-title="false" />-->
<!--      </DraggableContainer>-->
      <DraggableContainer>
        <Performance class="performance-view" />
      </DraggableContainer>
    </GridItem>
    <GridItem
      :i="gridLayoutTradesLogChart.i"
      :x="gridLayoutTradesLogChart.x"
      :y="gridLayoutTradesLogChart.y"
      :w="gridLayoutTradesLogChart.w"
      :h="gridLayoutTradesLogChart.h"
      :min-w="3"
      :min-h="4"
      drag-allow-from=".drag-header"
    >
<!--      <DraggableContainer header="Trades Log">-->
<!--        <TradesLogChart :trades="allTradesAllBots" :show-title="false" />-->
<!--      </DraggableContainer>-->
    </GridItem>
  </GridLayout>
</template>

<script lang="ts">
import { formatPrice } from '@/shared/formatters';

import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { GridLayout, GridItem, GridItemData } from 'vue-grid-layout';

import DailyChart from '@/components/charts/DailyChart.vue';
import DailyChart2 from '@/components/charts/DailyChart2.vue';
import CumProfitChart from '@/components/charts/CumProfitChart.vue';
import TradesLogChart from '@/components/charts/TradesLog.vue';
import BotComparisonList from '@/components/ftbot/BotComparisonList.vue';
import BotComparisonList2 from '@/components/ftbot/BotComparisonList2.vue';
import TradeList from '@/components/ftbot/TradeList.vue';
import DraggableContainer from '@/components/layout/DraggableContainer.vue';


import Balance from '@/components/ftbot/Balance.vue';
import BotControls from '@/components/ftbot/BotControls.vue';
import BotStatus from '@/components/ftbot/BotStatus.vue';
import CandleChartContainer from '@/components/charts/CandleChartContainer.vue';
import DailyStats from '@/components/ftbot/DailyStats.vue';
import FTBotAPIPairList from '@/components/ftbot/FTBotAPIPairList.vue';
import PairLockList from '@/components/ftbot/PairLockList.vue';
import PairSummary from '@/components/ftbot/PairSummary.vue';
import Performance from '@/components/ftbot/Performance.vue';
import TradeDetail from '@/components/ftbot/TradeDetail.vue';

import {
  PerLayout,
  findGridLayout,
  LayoutActions,
  LayoutGetters,
} from '@/store/modules/layout';
import { Trade, DailyReturnValue, DailyPayload, ClosedTrade } from '@/types';
import { BotStoreGetters } from '@/store/modules/ftbot';
import { MultiBotStoreGetters } from '@/store/modules/botStoreWrapper';
import StoreModules from '@/store/storeSubModules';

const ftbot = namespace(StoreModules.ftbot);
const layoutNs = namespace(StoreModules.layout);

@Component({
  components: {
    GridLayout,
    GridItem,
    DailyChart,
    DailyChart2,
    CumProfitChart,
    TradesLogChart,
    BotComparisonList,
    BotComparisonList2,
    TradeList,
    DraggableContainer,
    Balance,
    BotControls,
    BotStatus,
    CandleChartContainer,
    DailyStats,
    FTBotAPIPairList,
    PairLockList,
    PairSummary,
    Performance,
    TradeDetail,
  },
})
export default class Per extends Vue {

  @ftbot.Getter [BotStoreGetters.detailTradeId]!: number;

  @ftbot.Getter [BotStoreGetters.openTrades]!: Trade[];

  @ftbot.Getter [BotStoreGetters.closedTrades]!: Trade[];

  @ftbot.Getter [BotStoreGetters.allTrades]!: Trade[];

  @ftbot.Getter [BotStoreGetters.tradeDetail]!: Trade;

  @ftbot.Getter [BotStoreGetters.timeframe]!: string;

  @ftbot.Getter [BotStoreGetters.whitelist]!: string[];

  @ftbot.Getter [BotStoreGetters.stakeCurrency]!: string;
  
  @ftbot.Getter [MultiBotStoreGetters.botCount]!: number;

  @ftbot.Getter [MultiBotStoreGetters.allOpenTradesAllBots]!: Trade[];

  @ftbot.Getter [MultiBotStoreGetters.allTradesAllBots]!: ClosedTrade[];

  @ftbot.Getter [MultiBotStoreGetters.allDailyStatsAllBots]!: Record<string, DailyReturnValue>;

  @ftbot.Getter [BotStoreGetters.performanceStats]!: PerformanceEntry[];

  @ftbot.Action getPerformance;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ftbot.Action allGetDaily!: (payload?: DailyPayload) => void;

  @ftbot.Action getTrades;

  @ftbot.Action getOpenTrades;

  @ftbot.Action getProfit;

  @layoutNs.Getter [LayoutGetters.getPerLayoutSm]!: GridItemData[];

  @layoutNs.Getter [LayoutGetters.getPerLayout]!: GridItemData[];

  @layoutNs.Action [LayoutActions.setPerLayout];

  @layoutNs.Getter [LayoutGetters.getLayoutLocked]: boolean;

  formatPrice = formatPrice;

  localGridLayout: GridItemData[] = [];

  currentBreakpoint = '';

  get isLayoutLocked() {
    return this.getLayoutLocked || !this.isResizableLayout;
  }

  get isResizableLayout() {
    return ['', 'sm', 'md', 'lg', 'xl'].includes(this.currentBreakpoint);
  }

  get gridLayout() {
    if (this.isResizableLayout) {
      return this.getPerLayout;
    }
    return this.localGridLayout;
  }

  set gridLayout(newLayout) {
    // Dummy setter to make gridLayout happy. Updates happen through layoutUpdated.
  }

  layoutUpdated(newLayout) {
    // Frozen layouts for small screen sizes.
    if (this.isResizableLayout) {
      console.log('newlayout', newLayout);
      console.log('saving dashboard');
      this.setPerLayout(newLayout);
    }
  }

  get gridLayoutDaily(): GridItemData {
    return findGridLayout(this.gridLayout, PerLayout.dailyChart);
  }
  get gridLayoutDaily2(): GridItemData {
    return findGridLayout(this.gridLayout, PerLayout.dailyChart2);
  }
  get gridLayoutBotComparison(): GridItemData {
    return findGridLayout(this.gridLayout, PerLayout.botComparison);
  }
  get gridLayoutBotComparison2(): GridItemData {
    return findGridLayout(this.gridLayout, PerLayout.botComparison2);
  }
  get gridLayoutAllOpenTrades(): GridItemData {
    return findGridLayout(this.gridLayout, PerLayout.allOpenTrades);
  }

  get gridLayoutCumChart(): GridItemData {
    return findGridLayout(this.gridLayout, PerLayout.cumChartChart);
  }

  get gridLayoutTradesLogChart(): GridItemData {
    return findGridLayout(this.gridLayout, PerLayout.tradesLogChart);
  }

  get responsiveGridLayouts() {
    return {
      sm: this.getPerLayoutSm,
    };
  }

  mounted() {
    this.allGetDaily({ timescale: 30 });
    this.getTrades();
    this.getOpenTrades();
    this.getPerformance();
    this.getProfit();
    this.localGridLayout = [...this.getPerLayoutSm];
  }

  breakpointChanged(newBreakpoint) {
    // console.log('breakpoint:', newBreakpoint);
    this.currentBreakpoint = newBreakpoint;
  }
}
</script>

<style scoped></style>
