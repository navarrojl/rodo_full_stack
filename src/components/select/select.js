export default {
  name: 'select',
  components: {},
  props: {
    items: {
      type: Array
    },
    label: {
      type: String
    },
    current_value: {
      type: String
    }
  },
  data() {
    return {
      value: null,
    }
  },
  watch: {
    value(new_value) {
      let filter = {
        type: this.label.toLowerCase(),
        value: new_value
      }
      this.$emit('update-current-value', filter);
    },
    mounted() {

    },
    methods: {

    }
  }
}


