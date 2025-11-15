document.addEventListener('DOMContentLoaded', () => {

    const homeOrderButton = document.querySelector('.cta-button');
    if (homeOrderButton) {
        homeOrderButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            window.location.href = 'order.html';
        });
    }
    
    const headerOrderButton = document.querySelector('.order-now-button');
    if (headerOrderButton) {
        headerOrderButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'order.html';
        });
    }

   
    const menuSelect = document.getElementById('menu-item');
    const quantityInput = document.getElementById('quantity');
    const priceDisplay = document.getElementById('display-price');
    const menuImage = document.getElementById('menu-image');

    
    if (menuSelect && quantityInput && priceDisplay && menuImage) { 
        
    
        const prices = {
            'nasi-anje-kahwin': 15.90,
            'nasi-anje-scandal': 18.90,
            'nasi-anje-double': 15.90,
            'nasi-anje-single': 9.90,
            'Chicken-Chop-Set': 16.90,
            'ayam-ketul-delima-set': 13.90,
            'nasi-paha-ayam-tiruan': 4.80,
            'madu-4-set': 67.63,
            'anjemie-selingkuh': 18.90,
            'anjamie-pacaran': 15.90,
            'anjamie-jomblo': 9.90,
        };

        
        const images = {
            'nasi-anje-kahwin': 'images/Nasikahwin.jpg', 
            'nasi-anje-scandal': 'images/NasiScandal.jpg', 
            'nasi-anje-double': 'images/NasiAnjeSet.jpg', 
            'nasi-anje-single': 'images/NasiAnjeSet.jpg', 
            'Chicken-Chop-Set': 'images/IstimewaSet.webp', 
            'ayam-ketul-delima-set': 'images/AyamKetulDelima.jpeg', 
            'nasi-paha-ayam-tiruan': 'images/MainKayuTigaSet', 
            'madu-4-set': 'images/2SetMadu4.jpg', 
            'anjemie-selingkuh': 'images/AnjeMieSet.webp', 
            'anjamie-pacaran': 'images/Anjemie.jpg', 
            'anjamie-jomblo': 'images/AnjeMieSet.webp', 
        };

        
        function updateOrderDetails() { 
            const selectedItem = menuSelect.value;
            
            
            const itemPrice = prices[selectedItem] || 0; 
            const quantity = parseInt(quantityInput.value) || 0; 
            const total = itemPrice * quantity;
            priceDisplay.textContent = 'RM ' + total.toFixed(2);
            
            
            const newImage = images[selectedItem];
            if (newImage) {
                menuImage.src = newImage;
                menuImage.alt = selectedItem; 
            }
        }

        
        menuSelect.addEventListener('change', updateOrderDetails);
        quantityInput.addEventListener('input', updateOrderDetails);

        
        updateOrderDetails();
    }
});