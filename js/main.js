// To get Transaction Type
    const transactType = document.querySelector("#transact-type");

    console.log('Test1');
    console.log(transactType);

    // Get Transaction Forms:
    const paymentCard = document.querySelector(".payment-card");
    console.log('Test2');
    console.log(paymentCard);

    const transferCard = document.querySelector(".transfer-card");
    const depositCard = document.querySelector(".deposit-card");
    console.log('Test3');
    console.log(transferCard);

    paymentCard.style.display = "none";
    transferCard.style.display = "none";


    transactType.addEventListener("change", function () {
      // To check the transaction Type and Display form:
      switch (transactType.value) {

        case "null":
          console.log('Element not found');
          break;

        case "payment":
          paymentCard.style.display = "block";
          paymentCard.nextElementSibling.style.display = "none";
          break;

        case "transfer":
          transferCard.previousElementSibling.style.display = "none";
          transferCard.style.display = "block";
          transferCard.nextElementSibling.style.display = "none";
          break;
        
        default:
          paymentCard.style.display = "none";
          transferCard.style.display = "none";
          break;
      }
    });