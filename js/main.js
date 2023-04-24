// To get Transaction Type
const transactType = document.querySelector("#transact-type");
// console.log('Test1');
// console.log(transactType);

// Get Transaction Forms:
const paymentCard = document.querySelector(".payment-card");
// console.log('Test2');
// console.log(paymentCard);
const transferCard = document.querySelector(".transfer-card");
// console.log('Test3');
// console.log(transferCard);
const depositCard = document.querySelector(".deposit-card");
// console.log('Test4');
// console.log(DepositCard);
const withdrawCard = document.querySelector(".withdraw-card");
// console.log('Test5');
// console.log(WithdrawCard);

// To make all the elements diplay as none
paymentCard.style.display = "none";
transferCard.style.display = "none";
depositCard.style.display = "none";
withdrawCard.style.display = "none";
//  End of Making Element display none

transactType.addEventListener("change", function() {
  // To check the transaction Type and Display form:
  switch (transactType.value) {
    case "null":
      console.log("Element not found");
      break;

    case "payment":
      // paymentCard.previousElementSibling.style.display = "none";
      paymentCard.style.display = "block";
      paymentCard.nextElementSibling.style.display = "none";
      withdrawCard.style.display = "none";
      depositCard.style.display = "none";
      transferCard.style.display = "none";
      break;

    case "transfer":
      transferCard.previousElementSibling.style.display = "none";
      transferCard.style.display = "block";
      transferCard.nextElementSibling.style.display = "none";
      withdrawCard.style.display = "none";
      depositCard.style.display = "none";
      paymentCard.style.display = "none";
      break;

    case "deposit":
      depositCard.previousElementSibling.style.display = "none";
      depositCard.style.display = "block";
      depositCard.nextElementSibling.style.display = "none";
      withdrawCard.style.display = "none";
      transferCard.style.display = "none";
      paymentCard.style.display = "none";
      break;

    case "withdraw":
      paymentCard.style.display = "none";
      transferCard.style.display = "none";
      withdrawCard.previousElementSibling.style.display = "none";
      withdrawCard.style.display = "block";
      withdrawCard.nextElementSibling.style.display = "none";
      depositCard.style.display = "none";
      break;

    default:
      paymentCard.style.display = "none";
      transferCard.style.display = "none";
      withdrawCard.style.display = "none";
      depositCard.style.display = "none";
      break;
  }
  // End Of Check for Transaction Type and Display Form.
});
// End Check For Transaction Type Event Listener.
