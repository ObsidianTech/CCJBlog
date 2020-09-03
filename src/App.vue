<template>
  <div>
    <prismic-rich-text v-if="fields.title" :field="fields.title" wrapper="div"/>
    <prismic-image :field="fields.logo"/>
    <prismic-rich-text v-if="fields.desc" wrapper="div" :field="fields.desc"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: {
        title: null,
        logo: null,
        desc: null,
      },
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.getSingle('blog_home')
        .then((document) => {
          this.fields.title = document.data.blog_title;
          this.fields.logo = document.data.home_image;
          this.fields.desc = document.data.description;
        });
    },
  },
  created() {
    this.getContent();
  },
};
</script>
