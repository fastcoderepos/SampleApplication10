cube(`Country`, {
  sql: `SELECT * FROM public.country`,
  
  joins: {
    
  },
  
  measures: {
		count_country: {
			sql: 'country',
			type: 'count'
		},
		countDistinct_country: {
			sql: 'country',
			type: 'countDistinct'
		},
		countDistinctApprox_country: {
			sql: 'country',
			type: 'countDistinctApprox'
		},
		sum_country_id: {
			sql: 'country_id',
			type: 'sum'
		},
		avg_country_id: {
			sql: 'country_id',
			type: 'avg'
		},
		min_country_id: {
			sql: 'country_id',
			type: 'min'
		},
		max_country_id: {
			sql: 'country_id',
			type: 'max'
		},
		runningTotal_country_id: {
			sql: 'country_id',
			type: 'runningTotal'
		},
		count_country_id: {
			sql: 'country_id',
			type: 'count'
		},
		countDistinct_country_id: {
			sql: 'country_id',
			type: 'countDistinct'
		},
		countDistinctApprox_country_id: {
			sql: 'country_id',
			type: 'countDistinctApprox'
		}
  },
  
  dimensions: {
    country: {
      sql: `country`,
      type: `string`
    },

    country_id: {
      sql: `country_id`,
      type: `number`,
      primaryKey: true
    }
  }
});
