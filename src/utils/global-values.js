module.exports = {
    getCarsUrl: 'http://localhost:8080/api/cars',
    makes: ['Acura', 'Audi', 'BMW'],
    models: ['IX1', 'IX2', 'IX3'],
    years: [2018, 2019, 2020, 2021],
    prices: [2000, 4000, 6000, 8000, 10000],
    totalVehiclesTableOptions: {
        data: [
            { text: 'Lowest Price', value: 0 },
            { text: 'Median Price', value: 0 },
            { text: 'Highest Price', value: 0 },
        ],
        headers: [
            { text: 'Total Vehicles Matched', value: 'text', sortable: false },
            { text: 0, value: 'value', sortable: false }
        ],
        hideFooter: true,
        loading: false,
    },
    makeAndModelVehiclesTableOptions: {
        data: [],
        headers: [
            { text: 'Matches by Make and Model', value: 'text', sortable: true },
            { text: '', value: 'value', sortable: true }
        ],
        hideFooter: false,
        loading: false,
    },
};