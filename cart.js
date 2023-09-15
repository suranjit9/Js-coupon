document.getElementById('cartbtn-1').addEventListener('click', function(){
    const findbtn = getElementBycarpricetId('price-1st');
    const totalpricw = getElementBycarpricetId('Pricelist');
    const calcu = findbtn + totalpricw;
    setvalue('Pricelist',calcu);
    // setElementBycarTiteltId ('cart-title-1');
    
})

