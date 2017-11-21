var app = new Vue({
  el: '#app',
  data: {
    items: [],
    cart: [],
    total : 0,
    itemCounter : 0
  },
  created: function () {
    axios.get('http://localhost:3000/api/item')
    .then((response) => {
      this.items = response.data
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  computed: {
    maleProducts () {
      console.log(this.items)
      return this.items.filter(item => {
        return item.category === 'male'
      })
    },
    femaleProducts () {
      return this.items.filter(item => {
        return item.category === 'female'
      })
    },
    kidProducts () {
      return this.items.filter(item => {
        return item.category === 'kid'
      })
    }
  },
  methods : {
    addCart (itemId) {
      if(this.cart.length === 0){
        this.cart.push({
          id : itemId,
          quantity : 1,
          subtotal : parseInt(this.getProductById(itemId).item_price)
        })
        this.total += parseInt(this.getProductById(itemId).item_price) 
        this.itemCounter++
      }else{
        var findItemIndex = function(element) {
            return element.id === itemId;
        }

        let idChecker = this.cart.findIndex(findItemIndex)

        if(idChecker === -1){
          this.cart.push({
            id : itemId,
            quantity : 1,
            subtotal : parseInt(this.getProductById(itemId).item_price)
          })
          this.itemCounter++
          this.total += parseInt(this.getProductById(itemId).item_price)
        }else{
          
          this.cart[idChecker].quantity++
          this.cart[idChecker].subtotal+=parseInt(this.getProductById(itemId).item_price)
          this.itemCounter++
          this.total += parseInt(this.getProductById(itemId).item_price)
        }
      }
    },
    getProductById (itemId) {
      return this.items.find(item => {
        return item._id === itemId
      })
    }
  }
})

