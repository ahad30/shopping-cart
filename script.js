
     function  handleProductChange(product, isIncrease){
      const productInput = document.getElementById(product +'-count');
      const productCount = parseInt(productInput.value);
         if(isIncrease == true){
            productNewCount = productCount + 1;
         }
         if(isIncrease == false && productCount >0){
            productNewCount = productCount - 1;
         }
         productInput.value = productNewCount;
         let productTotal =0;
         if(product == 'case'){
            productTotal = productNewCount*59; 
         }
         if(product == 'phone'){
            productTotal = productNewCount*1200; 
         }
        document.getElementById(product + '-total').innerText = '$'+ productTotal;
      calculateTotal();
     }
      
    function calculateTotal() {
      //  const phoneInput = document.getElementById('phone-count');
      //  const phoneCount = parseInt(phoneInput.value);

      // const caseInput = document.getElementById('case-count');
      // const caseCount = parseInt(caseInput.value);

      const phoneCount = getInputValue('phone');
      const caseCount = getInputValue('case')

      const totalPrice = caseCount*59 + phoneCount*1200;
      document.getElementById('total-price').innerText = '$' + totalPrice;

      const tax = Math.round(totalPrice*0.1);
      document.getElementById('count-tax').innerText = '$' + tax;

      const grandTotal = totalPrice + tax;
      document.getElementById('grand-total').innerText = '$' + grandTotal;
     }


     function getInputValue(product){
      const productInput = document.getElementById(product +'-count');
      const productCount = parseInt(productInput.value);
      return productCount;
     }

   //   function handlePhoneChange(isHigh){
   //       phoneInput = document.getElementById('phone-count');
   //       const phoneCount = parseInt(phoneInput.value);
   //       let phoneNewCount = phoneCount;
   //       if(isHigh == true){
   //          phoneNewCount = phoneCount + 1;
   //       }
   //       if(isHigh == false && phoneCount >0){
   //          phoneNewCount = phoneCount - 1;
   //       }
   //       phoneInput.value = phoneNewCount;
   //       const phoneTotal = phoneNewCount*1200;
   //       document.getElementById('phone-total').innerText = '$' + phoneTotal;
   //   }