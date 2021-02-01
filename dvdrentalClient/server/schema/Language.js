cube(`Language`, {
  sql: `SELECT * FROM public.language`,
  
  joins: {
    
  },
  
  measures: {
		count_name: {
			sql: 'name',
			type: 'count'
		},
		countDistinct_name: {
			sql: 'name',
			type: 'countDistinct'
		},
		countDistinctApprox_name: {
			sql: 'name',
			type: 'countDistinctApprox'
		},
		sum_language_id: {
			sql: 'language_id',
			type: 'sum'
		},
		avg_language_id: {
			sql: 'language_id',
			type: 'avg'
		},
		min_language_id: {
			sql: 'language_id',
			type: 'min'
		},
		max_language_id: {
			sql: 'language_id',
			type: 'max'
		},
		runningTotal_language_id: {
			sql: 'language_id',
			type: 'runningTotal'
		},
		count_language_id: {
			sql: 'language_id',
			type: 'count'
		},
		countDistinct_language_id: {
			sql: 'language_id',
			type: 'countDistinct'
		},
		countDistinctApprox_language_id: {
			sql: 'language_id',
			type: 'countDistinctApprox'
		}
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    },

    language_id: {
      sql: `language_id`,
      type: `number`,
      primaryKey: true
    }
  }
});
