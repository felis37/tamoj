import Vue from 'vue'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VTabs,
  VToolbar,
  VMenu,
  VDivider,
  VOverflowBtn,
  VBottomSheet,
  VAvatar,
  VSubheader,
  transitions
} from 'vuetify'
import { Touch } from 'vuetify/es5/directives'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VTabs,
    VToolbar,
    VMenu,
    VDivider,
    VOverflowBtn,
    VBottomSheet,
    VAvatar,
    VSubheader,
    transitions
  },
  directives: {
    Touch
  }
})