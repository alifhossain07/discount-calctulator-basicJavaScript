document.getElementById("apply-btn1").addEventListener("click", function() 

{
    const initialJacketPrice = document.getElementById("jacket-price1");
    const jacketPriceString = initialJacketPrice.innerText;
    const jacketPrice = parseFloat(jacketPriceString);

    const discountedPrice = (30 / 100) * jacketPrice;

    const payment = document.getElementById("jacket-1");
    payment.innerText = discountedPrice;
});


document.getElementById("apply-btn2").addEventListener("click", function() 

{
    const initialJacketPrice = document.getElementById("jacket-price2");
    const jacketPriceString = initialJacketPrice.innerText;
    const jacketPrice = parseFloat(jacketPriceString);

    const inputCouponId = document.getElementById("coupon-id");
    const inputCouponIdString = inputCouponId.value;
    if(inputCouponIdString === "1234")
    {
        const discountedPrice = (30 / 100) * jacketPrice;

    const payment = document.getElementById("jacket-2");
    payment.innerText = discountedPrice;
    }
    else
    {
        alert("This Coupon Id is not valid")
    }
});