import mock from '@/fake-db/mock.js'

const data = {
  products: [
    {
      'id': 1,
      'pieces': 5,
      'length': 7
    }
  ],
  reqs: [
    {
      'id': 1,
      'pieces': 10,
      'length': 4
    },
    {
      'id': 2,
      'pieces': 4,
      'length': 7
    },
    {
      'id': 3,
      'pieces': 15,
      'length': 8
    }
  ]
}


mock.onGet('/api/data-list/material').reply(() => {
  return [200, JSON.parse(JSON.stringify(data.products)).reverse()]
})

// POST : Add new Item
mock.onPost('/api/data-list/material/').reply((request) => {

  // Get event from post data
  const item = JSON.parse(request.data).item

  const length = data.products.length
  let lastIndex = 0
  if (length) {
    lastIndex = data.products[length - 1].id
  }
  item.id = lastIndex + 1

  data.products.push(item)

  return [201, {id: item.id}]
})

// Update Product
mock.onPost(/\/api\/data-list\/material\/\d+/).reply((request) => {

  const itemId = request.url.substring(request.url.lastIndexOf('/') + 1)

  const item = data.products.find((item) => item.id == itemId)
  Object.assign(item, JSON.parse(request.data).item)

  return [200, item]
})

// DELETE: Remove Item
mock.onDelete(/\/api\/data-list\/material\/\d+/).reply((request) => {

  const itemId = request.url.substring(request.url.lastIndexOf('/') + 1)

  const itemIndex = data.products.findIndex((p) => p.id == itemId)
  data.products.splice(itemIndex, 1)
  return [200]
})

////////

mock.onGet('/api/data-list/requirement').reply(() => {
  return [200, JSON.parse(JSON.stringify(data.reqs)).reverse()]
})

// POST : Add new Item
mock.onPost('/api/data-list/requirement/').reply((request) => {

  // Get event from post data
  const item = JSON.parse(request.data).item

  const length = data.reqs.length
  let lastIndex = 0
  if (length) {
    lastIndex = data.reqs[length - 1].id
  }
  item.id = lastIndex + 1

  data.reqs.push(item)

  return [201, {id: item.id}]
})

// Update Product
mock.onPost(/\/api\/data-list\/requirement\/\d+/).reply((request) => {

  const itemId = request.url.substring(request.url.lastIndexOf('/') + 1)

  const item = data.reqs.find((item) => item.id == itemId)
  Object.assign(item, JSON.parse(request.data).item)

  return [200, item]
})

// DELETE: Remove Item
mock.onDelete(/\/api\/data-list\/requirement\/\d+/).reply((request) => {

  const itemId = request.url.substring(request.url.lastIndexOf('/') + 1)

  const itemIndex = data.reqs.findIndex((p) => p.id == itemId)
  data.reqs.splice(itemIndex, 1)
  return [200]
})
