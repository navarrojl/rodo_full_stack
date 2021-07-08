import GlobalValues from '@/utils/global-values';
import CustomHeader from '@/components/header';
import CustomSelect from '@/components/select';
import * as APIHandler from '@/utils/APIHandler';

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
      getCarsUrl: GlobalValues.getCarsUrl,
      filters: [],
      loading: false,
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
    async search() {
      try {
        this.loading = true;
        let params = this.createGetRequestParams();
        let res = await this.getCars(params);
        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
    },
    createGetRequestParams(){
      let params = {};
      this.filters.forEach(filter => {
        params[filter.type] = filter.value;
      });
      return params;
    },
    async getCars(params) {
      return await APIHandler.get(this.getCarsUrl, params);
    },
  }
}


