const user = { id: 305876,
  a: 386,
  p: 386,
  e: 3261,
  i4a: true,
  authorization: 'Bearer 1e8e0311-24a2-4a7c-8d4a-b945e8e1416b',
  sid: '3E420003C2694A80EA2D72C7C37C25D4',
  name: 'default',
  vid: 305876,
  staff: false,
  uniqueID: 'b0a096af-c3e9-4610-917c-b4bbad6acaa5',
  iat: 1470721370,
  exp: 1473140570 }

const currentSubs =  [
  {
    "order": {
      "@uri": "/api/web/order/294772",
      "autorenewStatus": "NOT_ELIGIBLE",
      "endDate": "2016-08-31T23:20:48Z",
      "accessEndDate": "2016-08-31T23:20:48Z",
      "id": 294772,
      "price": 0,
      "productName": "iflix malaysia 1 Month",
      "productId": 988,
      "productUri": {
        "@uri": "/api/web/productgroup/404/products/988"
      },
      "productGroupId": 404,
      "paymentProviderId": 100000000001,
      "productGroup": {
        "@uri": "/api/web/productgroup/404"
      },
      "startDate": "2016-08-10T13:20:34Z",
      "userId": 307833,
      "ip": "N/A",
      "isp": "N/A",
      "period": 2678400,
      "periodIso": "PT2678400S",
      "productPaymentId": 1009,
      "productPayment": {
        "@uri": "/api/web/productgroup/404/products/988/productPayments/1009"
      },
      "referrer": "TV 2",
      "orderRef": "Created manually via Admin",
      "status": "ACTIVE",
      "currency": "MYR",
      "userPaymentMethod": "",
      "statusText": "Purchase sucessfull",
      "registered": "2016-08-10T13:20:53Z"
    }
  },
  {
    "order": {
      "@uri": "/api/web/order/294740",
      "autorenewStatus": "NOT_ELIGIBLE",
      "earliestEndDate": "2016-09-08T14:44:08Z",
      "endDate": "2016-09-08T14:44:08Z",
      "accessEndDate": "2016-09-08T14:44:08Z",
      "id": 294740,
      "price": 0,
      "productName": "iflix 30 days",
      "productId": 691,
      "productUri": {
        "@uri": "/api/web/productgroup/3/products/691"
      },
      "productGroupId": 3,
      "paymentProviderId": 27,
      "productGroup": {
        "@uri": "/api/web/productgroup/3"
      },
      "startDate": "2016-08-09T14:44:08Z",
      "userId": 307833,
      "ip": "43.252.215.166",
      "period": 2592000,
      "periodIso": "PT2592000S",
      "platformId": 1,
      "productPaymentId": 689,
      "productPayment": {
        "@uri": "/api/web/productgroup/3/products/691/productPayments/689"
      },
      "status": "ACTIVE",
      "userPaymentMethod": ""
    }
  }
]

const sub = {
  "orders": {
    "active": {
      "order": {
        "@uri": "/api/web/order/292744",
          "autorenewStatus": "NOT_ELIGIBLE",
          "earliestEndDate": "2016-08-04T02:17:04Z",
          "endDate": "2116-08-04T02:17:04Z",
          "accessEndDate": "2116-08-04T02:17:04Z",
          "id": 292744,
          "price": 0,
          "productName": "frictionless Infinite validity product",
          "productId": 1030,
          "productUri": {
          "@uri": "/api/web/productgroup/522/products/1030"
        },
        "productGroupId": 522,
          "productGroup": {
          "@uri": "/api/web/productgroup/522"
        },
        "startDate": "2016-08-04T02:17:04Z",
          "userId": 305876,
          "ip": "52.76.200.1",
          "period": 3155673600,
          "periodIso": "P100Y",
          "platformId": 1,
          "productPaymentId": 1096,
          "productPayment": {
          "@uri": "/api/web/productgroup/522/products/1030/productPayments/1096"
        },
        "status": "ACTIVE",
          "userPaymentMethod": ""
      }
    },
    "future": ""
  }
}


const iflixSub = [
  {
    id: 1,
    name: "Monthly",
    type: "recurring",
    enabled: true,
    created_date: "2016-06-10T08:05:19.447Z",
    modified_date: "2016-06-10T08:05:19.447Z",
    period: 1,
    period_type: "M"
  },
  {
    id: 2,
    name: "Annual",
    type: "non-recurring",
    enabled: true,
    created_date: "2016-06-10T08:05:43.737Z",
    modified_date: "2016-06-10T08:05:43.737Z",
    period: 1,
    period_type: "y"
  },
  {
    id: 3,
    name: "1 Month",
    type: "non-recurring",
    enabled: true,
    created_date: "2016-06-21T06:48:33.410Z",
    modified_date: "2016-07-28T13:08:51.479Z",
    period: 1,
    period_type: "M"
  },
  {
    id: 4,
    name: "2 Months",
    type: "non-recurring",
    enabled: true,
    created_date: "2016-07-29T08:44:24.625Z",
    modified_date: "2016-07-29T08:44:24.625Z",
    period: 2,
    period_type: "M"
  },
  {
    id: 5,
    name: "3 Months",
    type: "non-recurring",
    enabled: true,
    created_date: "2016-07-29T08:44:46.355Z",
    modified_date: "2016-07-29T08:44:46.355Z",
    period: 3,
    period_type: "M"
  },
  {
    id: 6,
    name: "6 Months",
    type: "non-recurring",
    enabled: true,
    created_date: "2016-07-29T08:45:07.599Z",
    modified_date: "2016-07-29T08:45:07.599Z",
    period: 6,
    period_type: "M"
  },
  {
    id: 7,
    name: "2 Months Subscription",
    type: "recurring",
    enabled: true,
    created_date: "2016-08-03T11:24:27.046Z",
    modified_date: "2016-08-03T11:24:27.046Z",
    period: 2,
    period_type: "M"
  },
  {
    id: 8,
    name: "4 Months",
    type: "non-recurring",
    enabled: true,
    created_date: "2016-08-03T11:24:42.222Z",
    modified_date: "2016-08-03T11:24:42.222Z",
    period: 4,
    period_type: "M"
  },
  {
    id: 9,
    name: "7 Months",
    type: "non-recurring",
    enabled: true,
    created_date: "2016-08-08T02:08:05.317Z",
    modified_date: "2016-08-08T02:08:05.317Z",
    period: 7,
    period_type: "M"
  }
]


const productGroup = {
  "productGroups": {
    "productgroup": [
      {
        "@id": "404",
        "@uri": "/api/web/productgroup/404",
        "name": "iflix malaysia",
        "sortIndex": 0,
        "categories": {
          "@uri": "/api/web/productgroup/404/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/404",
          "payment-structure": {
            "@xml:lang": "*",
            "$": "\"products\":[\n    {\"productName\":\"Annual\", \"paymentOptions\":\"4,5,6\"},\n    {\"productName\":\"Monthly\", \"paymentOptions\":\"1,2,3\"}\n]"
          }
        },
        "geoRegions": "my, 172.24.1.0/24, 62.97.210.170, 193.160.157.234, 1.32.20.98, 127.0.0.1, 82.134.26.130",
        "products": {
          "@uri": "/api/web/productgroup/404/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/404/accesses"
        },
        "saleStatus": "ENABLED",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "1",
        "@uri": "/api/web/productgroup/1",
        "description": "Free without login",
        "name": "Free without login",
        "sortIndex": 1,
        "categories": {
          "@uri": "/api/web/productgroup/1/categories"
        },
        "accessType": "FREE_NOLOGIN",
        "metadata": {
          "@uri": "/api/metadata/productgroup/1"
        },
        "products": {
          "@uri": "/api/web/productgroup/1/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/1/accesses"
        },
        "saleStatus": "NOT_FOR_SALE",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "2",
        "@uri": "/api/web/productgroup/2",
        "description": "Free with login",
        "name": "Free with login",
        "sortIndex": 1,
        "categories": {
          "@uri": "/api/web/productgroup/2/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/2"
        },
        "products": {
          "@uri": "/api/web/productgroup/2/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/2/accesses"
        },
        "saleStatus": "NOT_FOR_SALE",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "462",
        "@uri": "/api/web/productgroup/462",
        "name": "iflix thailand",
        "sortIndex": 0,
        "categories": {
          "@uri": "/api/web/productgroup/462/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/462"
        },
        "geoRegions": "th, 82.134.26.130",
        "products": {
          "@uri": "/api/web/productgroup/462/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/462/accesses"
        },
        "saleStatus": "ENABLED",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "522",
        "@uri": "/api/web/productgroup/522",
        "name": "frictionless",
        "sortIndex": 0,
        "categories": {
          "@uri": "/api/web/productgroup/522/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/522"
        },
        "geoRegions": "my, 172.24.1.0/24, 62.97.210.170, 193.160.157.234, 1.32.20.98, 127.0.0.1, 82.134.26.130",
        "products": {
          "@uri": "/api/web/productgroup/522/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/522/accesses"
        },
        "saleStatus": "ENABLED",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "562",
        "@uri": "/api/web/productgroup/562",
        "name": "iflix indonesia",
        "sortIndex": 0,
        "categories": {
          "@uri": "/api/web/productgroup/562/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/562"
        },
        "geoRegions": "id",
        "products": {
          "@uri": "/api/web/productgroup/562/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/562/accesses"
        },
        "saleStatus": "ENABLED",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "582",
        "@uri": "/api/web/productgroup/582",
        "name": "iflix srilanka",
        "sortIndex": 0,
        "categories": {
          "@uri": "/api/web/productgroup/582/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/582"
        },
        "products": {
          "@uri": "/api/web/productgroup/582/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/582/accesses"
        },
        "saleStatus": "ENABLED",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "3",
        "@uri": "/api/web/productgroup/3",
        "name": "iflix",
        "sortIndex": 1,
        "categories": {
          "@uri": "/api/web/productgroup/3/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/3"
        },
        "products": {
          "@uri": "/api/web/productgroup/3/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/3/accesses"
        },
        "saleStatus": "ENABLED",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "422",
        "@uri": "/api/web/productgroup/422",
        "name": "smart",
        "sortIndex": 2,
        "categories": {
          "@uri": "/api/web/productgroup/422/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/422"
        },
        "geoRegions": "ph, 82.134.26.130, 127.0.0.1, 82.134.28.101",
        "products": {
          "@uri": "/api/web/productgroup/422/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/422/accesses"
        },
        "saleStatus": "ENABLED",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "423",
        "@uri": "/api/web/productgroup/423",
        "name": "pldt",
        "sortIndex": 2,
        "categories": {
          "@uri": "/api/web/productgroup/423/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/423"
        },
        "geoRegions": "ph, 82.134.26.130, 127.0.0.1",
        "products": {
          "@uri": "/api/web/productgroup/423/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/423/accesses"
        },
        "saleStatus": "ENABLED",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "424",
        "@uri": "/api/web/productgroup/424",
        "name": "sun",
        "sortIndex": 2,
        "categories": {
          "@uri": "/api/web/productgroup/424/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/424"
        },
        "geoRegions": "ph, 82.134.26.130, 127.0.0.1",
        "products": {
          "@uri": "/api/web/productgroup/424/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/424/accesses"
        },
        "saleStatus": "ENABLED",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "442",
        "@uri": "/api/web/productgroup/442",
        "name": "iflix internal",
        "sortIndex": 0,
        "categories": {
          "@uri": "/api/web/productgroup/442/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/442"
        },
        "products": {
          "@uri": "/api/web/productgroup/442/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/442/accesses"
        },
        "saleStatus": "NOT_FOR_SALE",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "482",
        "@uri": "/api/web/productgroup/482",
        "name": "digi",
        "sortIndex": 0,
        "categories": {
          "@uri": "/api/web/productgroup/482/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/482"
        },
        "geoRegions": "my, 172.24.1.0/24, 62.97.210.170, 193.160.157.234, 1.32.20.98, 127.0.0.1, 82.134.26.130",
        "products": {
          "@uri": "/api/web/productgroup/482/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/482/accesses"
        },
        "saleStatus": "ENABLED",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "542",
        "@uri": "/api/web/productgroup/542",
        "description": "Iflix vietnam",
        "name": "Iflix vietnam",
        "sortIndex": 0,
        "categories": {
          "@uri": "/api/web/productgroup/542/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/542"
        },
        "geoRegions": "vn",
        "products": {
          "@uri": "/api/web/productgroup/542/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/542/accesses"
        },
        "saleStatus": "ENABLED",
        "checkAccessForProgramRelations": false
      },
      {
        "@id": "405",
        "@uri": "/api/web/productgroup/405",
        "name": "iflix philippines",
        "sortIndex": 0,
        "categories": {
          "@uri": "/api/web/productgroup/405/categories"
        },
        "accessType": "PAID",
        "metadata": {
          "@uri": "/api/metadata/productgroup/405"
        },
        "geoRegions": "ph, 127.0.0.1",
        "products": {
          "@uri": "/api/web/productgroup/405/products"
        },
        "productGroupAccesses": {
          "@uri": "/api/web/productgroup/405/accesses"
        },
        "saleStatus": "ENABLED",
        "checkAccessForProgramRelations": false
      }
    ]
  }
}
