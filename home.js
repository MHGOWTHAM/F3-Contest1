// Function to fetch and display the menu
function getMenu() {
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        const menuDiv = document.getElementById('menu');
        let menuHTML = '';
        data.forEach(item => {
          menuHTML += `<div>${item.name} - ${item.price}</div>`;
        });
        menuDiv.innerHTML = menuHTML;
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
      });
  

  }
  
  // Function to take the order
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = ['Cheeseburger', 'Chicken Burger', 'Veggie Burger'];
        const order = {
          burgers: [
            burgers[Math.floor(Math.random() * burgers.length)],
            burgers[Math.floor(Math.random() * burgers.length)],
            burgers[Math.floor(Math.random() * burgers.length)]
          ]
        };
        resolve(order);
        orderPrep();
      }, 2500);
    });
  }
  
  // Function for order preparation
  function orderPrep() {
    setTimeout(() => {
      const orderStatus = { order_status: true, paid: false };
      payOrder(orderStatus);
    }, 1500);
  }
  
  // Function for payment
  function payOrder(orderStatus) {
    setTimeout(() => {
      orderStatus.paid = true;
      thankyouFnc();
    }, 1000);
  }
  
  // Function to display thank you message
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  // On page load, show the home page
  window.onload = getMenu() ;

  