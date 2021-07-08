import GlobalValues from './../../utils/global-values';
import CustomHeader from '@/components/header';
import CustomSelect from '@/components/select';

export default {
  name: 'rodo',
  components: {
    CustomHeader,
    CustomSelect
  },
  data: function () {
    return {
      makes: GlobalValues.makes,
      models: GlobalValues.models,
      years: GlobalValues.years,
      prices: GlobalValues.prices,
      filters: [],
    }
  },
  mounted() {

  },
  methods: {
    updateFilters(new_filter) {
      // Remove filter if exists and add new one
      this.filters = this.filters.filter(filter => filter.type != new_filter.type);
      this.filters.push(new_filter);
    },
    search() {
      console.log(this.filters)
    }
  }
}


