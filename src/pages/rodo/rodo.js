import GlobalValues from '@/utils/global-values';
import CustomHeader from '@/components/header';
import CustomSelect from '@/components/select';
import SimpleTable from '@/components/simple-table';
import * as APIHandler from '@/utils/APIHandler';

export default {
  name: 'rodo',
  components: {
    CustomHeader,
    CustomSelect,
    SimpleTable
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
      totalVehiclesTableOptions: GlobalValues.totalVehiclesTableOptions,
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
        if (res) {
          this.uptadateTotalVehicleTable(res);
        }
        console.log(res)
        this.loading = false;
      } catch (e) {
        console.log(e)
        this.loading = false;
      }
    },
    createGetRequestParams() {
      let params = {};
      this.filters.forEach(filter => {
        params[filter.type] = filter.value;
      });
      return params;
    },
    async getCars(params) {
      return await APIHandler.get(this.getCarsUrl, params);
    },
    uptadateTotalVehicleTable(data) {
      let total_vehicles = data.count != null && data.count != undefined ? data.count : 'N/A';
      let min_price = data.min_price != null && data.min_price != undefined ? '$' + data.min_price: 'N/A';
      let max_price = data.max_price != null && data.max_price != undefined ? '$' + data.max_price : 'N/A';
      let median_price = data.median_price != null && data.median_price != undefined ? '$' + data.median_price : 'N/A';
      this.totalVehiclesTableOptions.headers = [
        { text: 'Total Vehicles Matched', value: 'text', sortable: false },
        { text: total_vehicles, value: 'value', sortable: false }
      ];
      this.totalVehiclesTableOptions.data = [
        { text: 'Lowest Price', value: min_price },
        { text: 'Median Price', value: median_price },
        { text: 'Highest Price', value: max_price },
      ]
    }
  }
}


