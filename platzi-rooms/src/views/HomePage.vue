<template>
  <default-layout>
    <section class="container py-6">
      <h1 class="text-3xl font-light text-grey-darkest mb-3">Recommended</h1>
      <div class="section">
        <tiny-slidder>
          <div class="slidder-item">1</div>
          <div class="slidder-item">2</div>
          <div class="slidder-item">3</div>
          <div class="slidder-item">4</div>
          <div class="slidder-item">5</div>
          <div class="slidder-item">6</div>
        </tiny-slidder>
      </div>
    </section>
    <section class="container py-6">
      <h1 class="text-3xl font-light text-grey-darkest mb-3">Explore</h1>
      <div class="section__explore grid-container mb-8">
        <div class="house__card mb-3" v-for="room in rooms" :key="room.key">
          <div class="house__thumbnail relative overflow-hidden">
            <img class="house__image absolute w-full" width="250" :src="room.featured_image" />
          </div>
          <div class="house__content bg-white p-3 border rounded">
            <div
              class="house__type font-semibold text-xs uppercase text-teal-dark mb-1"
            >{{ room.type }}</div>
            <div class="house__title font-bold mb-2">{{room.title}}</div>
            <div class="house__price text-xs">
              <span class="font-bold">${{room.price}} USD</span> per night
            </div>
            <div class="house__title font-bold mb-2"></div>
            <div v-if="room.services">
              <ul v-for="idService in room.services" :key="idService['.key']">
                <li v-if="services[idService]">{{ services[idService].name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <router-link
          :to="{ name: 'SearchPage'}"
          class="py-3 px-12 bg-yellow-dark no-underline text-yellow-darker text-lg rounded"
        >Show all</router-link>
      </div>
    </section>
  </default-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import TinySlidder from '@/components/TinySlidder.vue';

export default {
  name: 'HomePage',
  beforeCreate() {
    this.$store.dispatch('FETCH_ROOMS', 12);
    this.$store.dispatch('FETCH_SERVICES');
  },
  computed: {
    ...mapGetters(['rooms', 'services']),
  },
  components: {
    DefaultLayout,
    TinySlidder,
  },
};
</script>

<style lang="css">
.section__explore {
  grid-template-columns: repeat(4, 1fr);
}

.house__card > .house__thumbnail {
  height: 170px;
}

.house__thumbnail > .house__image {
  width: 100%;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 992px) {
  .house__card > .house__thumbnail {
    height: 150px;
  }
  .section__explore {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 576px) {
  .section__explore {
    grid-template-columns: repeat(1, 1fr);
  }

  .house__card > .house__thumbnail {
    height: 120px;
  }
}
</style>
