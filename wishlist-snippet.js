document.addEventListener('DOMContentLoaded', function() {
    const wishlistSection = `
      <div id="wishlist-app"></div>
      <script>
        fetch('/wishlist')
          .then(response => response.text())
          .then(html => {
            document.getElementById('wishlist-app').innerHTML = html;
          });
      </script>
    `;
  
    document.body.insertAdjacentHTML('beforeend', wishlistSection);
  });
  