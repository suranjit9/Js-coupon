const mainPrice = 'total-price';
const productHistory = 'product-history';


// Wbesite Purches BTN Activeti
 
function getProductprice2(price2){
    const productpriceInput2 = document.getElementById(price2);
    const productpriceinterger3 = productpriceInput2.innerText;
    const productpricrNumber = parseFloat(productpriceinterger3);
    const makePurchase = document.getElementById("make-Purchase");
    const applybtn = document.getElementById('btn-apply');
    //Make Purchase BTN Disabled / Eabled
    if(productpricrNumber > 0){
        makePurchase.removeAttribute('disabled');
    }
    //Make Purchase BTN Disabled / Eabled 
    if(productpricrNumber >= 200){
        applybtn.removeAttribute('disabled');
    }
    
}
function PurnoNumbar (Id){
    const prepriceInput1 = document.getElementById(Id);
    const prepriceInputinterjer1 = prepriceInput1.innerText;
    const pricrNumber1 = parseFloat(prepriceInputinterjer1);
    return pricrNumber1;
}
// Promo Code Apply Code
document.getElementById('btn-apply').addEventListener('click', function () {
    const inputCoupon = document.getElementById('coupon-input');
    const inputCouponValue = inputCoupon.value;
// BTN CALL START
    const prepriceInput12 = document.getElementById('total-price');
    const prepriceInputinterjer12 = prepriceInput12.innerText;
    const pricrNumber14 = parseFloat(prepriceInputinterjer12);

    const prepriceInput13 = document.getElementById('discount-price');
    const prepriceInput133 = document.getElementById('dis-after-price');
// BTN CALL END
    //    calculeat Offer Price 20%
    const discountprice = pricrNumber14/100*20;
    const disPrice = discountprice.toFixed(2);

    const intotalPrice =pricrNumber14-disPrice;

    if(inputCouponValue === 'SELL200'){
        // Call All ID 
        prepriceInput13.innerText = disPrice;
        prepriceInput133.innerText =intotalPrice;
    }else{
        const addtitle1 = document.getElementById('popup');
        const h1 = document.createElement('h1');
        h1.classList.add('mb-3','text-rose-600');
        addtitle1.appendChild(h1);
        h1.innerText = 'Please Entry Valited Code';
    }

})
// At List Total Price


function getProductprice(price, preprice, totalPrice ){
    const productpriceInput = document.getElementById(price);
    const productpriceinterger = productpriceInput.innerText;
    const productpricrNumber = parseFloat(productpriceinterger);
    // Total Price Call 
    const prepriceInput = document.getElementById(preprice);
    const prepriceInputinterjer = prepriceInput.innerText;
    const pricrNumber = parseFloat(prepriceInputinterjer);
    // InTotal Price
    const prepriceInputw = document.getElementById(totalPrice);

    // Product Calculetion
    const calcultproductPrice = pricrNumber+productpricrNumber;
    // set Price
    prepriceInput.innerText = calcultproductPrice;
    prepriceInputw.innerText = calcultproductPrice;
    
}


function getProductTitel(gettitel, addtitle){
    const getprotitle = document.getElementById(gettitel);
    const titleinterger = getprotitle.innerText;

    // Add to Product Title 

    const addtitle1 = document.getElementById(addtitle);
    const h1 = document.createElement('h1');
    h1.classList.add('mb-3');
    const count = addtitle1.childElementCount;
    addtitle1.appendChild(h1);
    h1.innerText = `${count+1}. ${titleinterger}`;
}