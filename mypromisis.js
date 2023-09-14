const cart = ['kurta','pajama','paint']
 
        const promise = createOrder(cart)
        
        promise.then(function(orderid){
            console.log(orderid)
        });
 
        function createOrder(cart){
            const pr = new Promise(function(resolve,reject){
                if(!validateCart){
                    const err = new Error("not valid")
                    reject(err)
                }
                const orderid = "123"
                if(orderid)
                {
                    resolve(orderid)
                }
            })
            return pr
        }

        function validateCart()
        {
            // orderid = "1234"
            return true;
        }