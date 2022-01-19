// hack reactor test question 

var itemData = [
    { category: 'fruit',  itemName: 'apple', onSale: false },
    { category: 'canned', itemName: 'beans', onSale: false },
    { category: 'canned', itemName: 'corn',  onSale: true  },
    { category: 'frozen', itemName: 'pizza', onSale: false },
    { category: 'fruit',  itemName: 'melon', onSale: true  },
    { category: 'canned', itemName: 'soup',  onSale: false },
  ];

  function organizeItems(items) {
	
    let obj = { fruit: [], canned: [], frozen: [] };
    // your code here
    items.forEach((item) => {
        let name = item.onSale ? `${item.itemName}($)`
            : item.itemName;
        let arr = obj[item.category];
        console.log(arr)
        arr.push(name);
        obj[item.category] = arr;
    })

return obj;
  }

  let i = organizeItems(itemData);
  console.log(`i`, i);