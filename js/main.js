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
    const withdrawCard = document.querySelector(".withdraw-card");

    paymentCard.style.display = "none";
    transferCard.style.display = "none";
    depositCard.style.display = "none";
    withdrawCard.style.display = "none";

    transactType.addEventListener("change", () => {
      // To check the transaction Type and Display form:
      switch (transactType.value) {

        case "null":
          console.log('Element not found');
          break;

        case "payment":
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
          break;

        case "deposit":
          depositCard.previousElementSibling.style.display = "none";
          depositCard.style.display = "block";
          depositCard.nextElementSibling.style.display = "none";
          withdrawCard.style.display = "none";
          transferCard.style.display = "none";
          break;

          case "withdraw":
            withdrawCard.previousElementSibling.style.display = "none";
            withdrawCard.style.display = "block";
            withdrawCard.nextElementSibling.style.display = "none";
            depositCard.style.display = "none";
            paymentCard.style.display = "none";
            transferCard.style.display = "none";
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