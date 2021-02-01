cube(`City`, {
  sql: `SELECT * FROM public.city`,
  
  joins: {
    Country: {
      sql: `${CUBE}.country_id = ${Country}.country_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
		count_city: {
			sql: 'city',
			type: 'count'
		},
		countDistinct_city: {
			sql: 'city',
			type: 'countDistinct'
		},
		countDistinctApprox_city: {
			sql: 'city',
			type: 'countDistinctApprox'
		},
		sum_city_id: {
			sql: 'city_id',
			type: 'sum'
		},
		avg_city_id: {
			sql: 'city_id',
			type: 'avg'
		},
		min_city_id: {
			sql: 'city_id',
			type: 'min'
		},
		max_city_id: {
			sql: 'city_id',
			type: 'max'
		},
		runningTotal_city_id: {
			sql: 'city_id',
			type: 'runningTotal'
		},
		count_city_id: {
			sql: 'city_id',
			type: 'count'
		},
		countDistinct_city_id: {
			sql: 'city_id',
			type: 'countDistinct'
		},
		countDistinctApprox_city_id: {
			sql: 'city_id',
			type: 'countDistinctApprox'
		}
  },
  
  dimensions: {
    city: {
      sql: `city`,
      type: `string`
    },

    city_id: {
      sql: `city_id`,
      type: `number`,
      primaryKey: true
    }
  }
});
