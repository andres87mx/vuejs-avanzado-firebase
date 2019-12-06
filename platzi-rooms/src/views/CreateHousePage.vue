<template>
  <page-layout>
    <section class="py-4 bg-teal-dark">
      <div class="container">
        <form class="form">
          <div class="form__field relative">
            <i class="input-icon material-icons absolute text-grey-darker">search</i>
            <input class="input__search" id="where" type="text" placeholder="Mexico City, Mexico" />
          </div>
        </form>
      </div>
    </section>
    <section class="section__create py-6">
      <div class="container">
          <h1 class="text-3x1">Publish a new room</h1>
      <form>
        <div class="mb-4">
          <label class="input__label">Title</label>
          <input v-model="publication.title"
          class="input__field" type="text" placeholder="Bruce Wayne" />
        </div>
        <div class="mb-4">
          <label class="input__label">Description</label>
          <textarea v-model="publication.description"
          class="input__field" rows="10" placeholder="Bruce Wayne" />
        </div>
        <div class="mb-4">
          <label class="input__label">Featured Image</label>
          <input v-model="publication.featuredImage" class="input__field" type="text" placeholder="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        </div>
        <div class="mb-4">
          <label class="input__label">Servicios:</label>
          <div v-for="service in services" :key="service['.key']">
            <input type="checkbox" :name="service.name" :value="service['.key']"
            v-model="checkedServices">
            <label for="cbox2">{{service.name}}</label>
          </div>
        </div>
        <div class="mb-4 text-right">
          <button @click.prevent="save"
          class="w-full bg-yellow-dark font-semibold py-3 px-6 rounded">
              Publish</button>
        </div>
      </form>
      </div>
    </section>
  </page-layout>
</template>
<script>
import { mapGetters } from 'vuex';
import PageLayout from '@/layouts/PageLayout.vue';

export default {
  name: 'CreateHousePage',
  beforeCreate() {
    this.$store.dispatch('FETCH_ROOMS', 12);
    this.$store.dispatch('FETCH_SERVICES');
  },
  data() {
    return {
      checkedServices: [],
      publication: {
        title: '',
        description: '',
        featuredImage: '',
      },
    };
  },
  methods: {
    save() {
      const { title, description, featuredImage } = this.publication;
      const room = {
        title,
        description,
        featured_image: featuredImage,
        publishedAt: Date.now(),
        services: this.checkedServices,
      };
      this.$store.dispatch('CREATE_ROOM', room).then(() => {
        this.$router.push({ name: 'SearchPage' });
      });
    },
  },
  components: {
    PageLayout,
  },
  computed: {
    ...mapGetters(['services']),
  },
};
</script>
