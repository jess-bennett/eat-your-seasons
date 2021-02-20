let stripe = Stripe('pk_test_51ILqM9Eut4w6GzpC0WRatjByjDMPq5nBGC4sQHsq9JX0Kg6g3pkBsEg1CRmuPoYOrR9EKGVQBDNSs2Kn3aqHMoVH00yoZGH0xU');
let elements = stripe.elements();

let card = elements.create('card');
card.mount('#card-element');

card.on('change', function (event) {
  displayError(event);
});
function displayError(event) {
  changeLoadingStatePrices(false);
  let displayError = document.getElementById('card-element-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
}

const createCustomerUrl = "{% url 'membership:create_subscription' %}";
  function stripePaymentMethodHandler(result, email) {
    if (result.error) {
      // Show error in payment form
    } else {
      const paymentParams = {
          email: email,
          plan_id: getSelectedPlanId(),
          payment_method: result.paymentMethod.id,
      };
      fetch(createCustomerUrl, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken'),
        },
        credentials: 'same-origin',
        body: JSON.stringify(paymentParams),
      }).then(function(response) {
        return response.json(); 
      }).then(function(result) {
        // todo: check and process subscription status based on the response
      }).catch(function (error) {
        // more error handling
      });
    }
  };