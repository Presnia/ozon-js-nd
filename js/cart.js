const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const modalCross = cartModal.querySelector('.cart-close');

  const openCart = () => {
    cartModal.style.display = 'flex';
  };

  const closeCart = () => {
    cartModal.style.display = '';
  };

  cartBtn.addEventListener('click', openCart);
  modalCross.addEventListener('click', closeCart);
};

cart();
