function getElementBycarpricetId (cartitem){
   const cartinfo = document.getElementById(cartitem);
   const innertextprice =cartinfo.innerText;
   const intigettonumbr = parseFloat(innertextprice);
   return intigettonumbr;
}
function prevalueElementBycarpricetId (prevalue){
    const precartinfo = document.getElementById(prevalue);
    // const preinner = precartinfo.innerText;
    // const preintigettonumbr = parseFloat(precartinfo);
    return precartinfo;
 }

// function setElementBycarTiteltId (cartitemtitel){
//     const showtitel = cartitemtitel.innerText;
//    const cartinfotitel = document.getElementById('cart-titel');
//    const count = cartinfotitel.childElementCount;
//    const p = document.createElement('p');
//    cartinfotitel.appendChild(p);
//    p.innerHTML = `${count+1}.${showtitel}`;
   
function setElementBycarTiteltId (textid){
    const ttextid = textid.innerText;
    const cartinfotitel = document.getElementById('cart-titel');
    const count = cartinfotitel.childElementCount;
    const p = document.createElement('p');
    p.innerText = `${count+1}.${ttextid}`;
    cartinfotitel.appendChild(p);
}
function setProducttitelId(titeletext){
    const producttitele = document.getElementById(titeletext);
    producttitele.innerHTML;
}


function setvalue(cartitem, newvalue){
    const priceelement = document.getElementById(cartitem);
    priceelement.innerHTML = newvalue;
}