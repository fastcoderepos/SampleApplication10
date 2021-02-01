cube(`Category`, {
  sql: `SELECT * FROM public.category`,
  
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
		sum_category_id: {
			sql: 'category_id',
			type: 'sum'
		},
		avg_category_id: {
			sql: 'category_id',
			type: 'avg'
		},
		min_category_id: {
			sql: 'category_id',
			type: 'min'
		},
		max_category_id: {
			sql: 'category_id',
			type: 'max'
		},
		runningTotal_category_id: {
			sql: 'category_id',
			type: 'runningTotal'
		},
		count_category_id: {
			sql: 'category_id',
			type: 'count'
		},
		countDistinct_category_id: {
			sql: 'category_id',
			type: 'countDistinct'
		},
		countDistinctApprox_category_id: {
			sql: 'category_id',
			type: 'countDistinctApprox'
		}
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    },

    category_id: {
      sql: `category_id`,
      type: `number`,
      primaryKey: true
    }
  }
});
