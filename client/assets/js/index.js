var app = new Vue({
  el: '#app',
  data: {
    items: [],
    cart: [],
    total : 0,
    itemCounter : 0,
    username : '',
    password : '',
    userToken : localStorage.getItem('userToken'),
    history : []
  },
  created: function () {
    axios.get('http://api.tokopakhaji.tk/item')
    .then(({data}) => {
      console.log(data)
      this.items = data
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  mounted () {
    if(this.userToken != undefined){
      let userId = localStorage.getItem('userId')
      axios.get(`http://api.tokopakhaji.tk/transaction/${userId}`)
      .then((response) => {
        console.log(response)
        this.history = response.data
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  computed: {
    maleProducts () {
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
    addCart (iditem) {
      if(this.cart.length === 0){
        this.cart.push({
          _id : iditem,
          itemqty : 1,
          subtotal : parseInt(this.getProductById(iditem).item_price)
        })
        this.total += parseInt(this.getProductById(iditem).item_price) 
        this.itemCounter++
      }else{
        var findItemIndex = function(element) {
            return element._id === iditem;
        }

        let idChecker = this.cart.findIndex(findItemIndex)

        if(idChecker === -1){
          this.cart.push({
            _id : iditem,
            itemqty : 1,
            subtotal : parseInt(this.getProductById(iditem).item_price)
          })
          this.itemCounter++
          this.total += parseInt(this.getProductById(iditem).item_price)
        }else{
          this.cart[idChecker].itemqty++
          this.cart[idChecker].subtotal+=parseInt(this.getProductById(iditem).item_price)
          this.itemCounter++
          this.total += parseInt(this.getProductById(iditem).item_price)
        }
      }
    },
    getProductById (iditem) {
      return this.items.find(item => {
        return item._id === iditem
      })
    },
    checkoutItem () {
      axios.post('http://api.tokopakhaji.tk/transaction', {
        userId : localStorage.getItem('userId'),
        list : this.cart,
        total : this.total
      })
      .then(function (response) {
        this.getUserHistory
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    userRegister () {
      console.log('masuk sini')
      axios.post('http://api.tokopakhaji.tk/customer', {
        username : this.username,
        password : this.password
      })
      .then(response => {
        console.log(response)
        this.username = ''
        this.password = ''
        alert('Registration Successful')
      })
      .catch(error => {
        console.log(error)
      })
    },
    userLogin () {
      axios.post('http://api.tokopakhaji.tk/customer/login', {
        username : this.username,
        password : this.password
      })
      .then(response => {
        if(response.data.resp!=1){
          this.username = ''
          this.password = ''
          alert('Invalid Username or Password')
        }else{
          localStorage.setItem("userToken", response.data.token)
          localStorage.setItem("userId", response.data.idUser)
          this.username = ''
          this.password = ''
          location.reload()
        }
      })
      .catch(error => {
        console.log(error)
      })
    },
    userLogout () {
      localStorage.removeItem('userId')
      localStorage.removeItem('userToken')
      location.reload()
    }
  }
})

