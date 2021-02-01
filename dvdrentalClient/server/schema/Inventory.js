cube(`Inventory`, {
  sql: `SELECT * FROM public.inventory`,
  
  joins: {
    Film: {
      sql: `${CUBE}.film_id = ${Film}.film_id`,
      relationship: `belongsTo`
    },
    
    Store: {
      sql: `${CUBE}.store_id = ${Store}.store_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
		sum_inventory_id: {
			sql: 'inventory_id',
			type: 'sum'
		},
		avg_inventory_id: {
			sql: 'inventory_id',
			type: 'avg'
		},
		min_inventory_id: {
			sql: 'inventory_id',
			type: 'min'
		},
		max_inventory_id: {
			sql: 'inventory_id',
			type: 'max'
		},
		runningTotal_inventory_id: {
			sql: 'inventory_id',
			type: 'runningTotal'
		},
		count_inventory_id: {
			sql: 'inventory_id',
			type: 'count'
		},
		countDistinct_inventory_id: {
			sql: 'inventory_id',
			type: 'countDistinct'
		},
		countDistinctApprox_inventory_id: {
			sql: 'inventory_id',
			type: 'countDistinctApprox'
		}
  },
  
  dimensions: {

	
    inventory_id: {
      sql: `inventory_id`,
      type: `number`,
      primaryKey: true
    }
  }
});
