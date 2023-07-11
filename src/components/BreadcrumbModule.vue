<template>
  <v-breadcrumbs :items="myIsi" :key="breadcrumbKey" class="myBreadCrumb mb-3">
    <template v-slot:title="{ item }">
        <v-breadcrumbs-item
        :to="item.to">
        {{ item.text }}
        </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>

import { VBreadcrumbs, VBreadcrumbsItem  } from "vuetify/lib/components/VBreadcrumbs";
import Cookies from 'js-cookie';

  export default {
    name: "BreadcrumbModule",

    data(){
        return{
          myIsi : [],
          breadcrumbKey: 0
        }
    },
    components: {
        VBreadcrumbs,VBreadcrumbsItem
    },
    created () {
      //ketika di reload, cek jika storeCrumbs kosong atau tidak 
      const isBreadCrumbEmpty = this.getterStoreCrumbs()

      //cek jika BreadCrumb kosong
      if(isBreadCrumbEmpty[0].text == this.$route.text ){
        //update (isi) data breadcrumb dari cookies 
          this.updateBreadCrumbsFromCookies();
      }else{
        this.saveBreaCrumbsToCookies();

        this.updateBreadcrumbs();
        this.$store.commit('updateStoreBreadCrumbs',this.myIsi);
      }
    },
    methods: {
      updateBreadcrumbs() {
          this.myIsi = this.getterStoreCrumbs();
      },
      getterStoreCrumbs(){
          this.updateRouterBreadCrumbs()
          return this.$store.getters.getStoreBreadCrumbs ;
      },
      updateRouterBreadCrumbs() {
          if (typeof this.$route.meta.breadCrumb === "function") {
            this.$route.meta.breadCrumb.call(this, this.$route);
          }
      },
      //=== Local storage ===
      saveBreadCrumbsToLocalStorage(){
        localStorage.setItem('localBreadCrumbs', JSON.stringify(this.getterStoreCrumbs()));
      },
      updateBreadCrumbsFromLocalStorage(){
        const savedData = localStorage.getItem('localBreadCrumbs');
        if (savedData) {
          const localDataCrumbs = JSON.parse(savedData);
          this.myIsi = localDataCrumbs;
          this.$store.commit('updateStoreBreadCrumbs',localDataCrumbs);
        }
      },
      // === Cookies ==
      saveBreaCrumbsToCookies(){
        Cookies.set('listKey', JSON.stringify(this.getterStoreCrumbs()));
      },
      updateBreadCrumbsFromCookies(){
        const savedData = Cookies.get('listKey');
        if (savedData) {
          this.myIsi = JSON.parse(savedData);
          this.$store.commit('updateStoreBreadCrumbs',JSON.parse(savedData));
        }
      },
    }
  };
</script>

<style>

.myBreadCrumb{
  font-size: 1rem !important;
}

</style>
