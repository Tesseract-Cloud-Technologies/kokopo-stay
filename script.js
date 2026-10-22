// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Full booking form (book.html)
  var bookForm = document.getElementById('bookingForm');
  if (bookForm) {
    bookForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('bf-name').value || 'Guest';
      var room = document.getElementById('bf-room');
      var roomLabel = room.options[room.selectedIndex].text;
      var checkin = document.getElementById('bf-checkin').value;
      var checkout = document.getElementById('bf-checkout').value;
      var guests = document.getElementById('bf-guests').value;

      var box = document.getElementById('confirmBox');
      document.getElementById('confirm-name').textContent = name;
      document.getElementById('confirm-room').textContent = roomLabel;
      document.getElementById('confirm-dates').textContent = (checkin || '—') + ' to ' + (checkout || '—');
      document.getElementById('confirm-guests').textContent = guests || '1';
      box.classList.add('show');
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // Mini booking widget on homepage -> sends details to book.html via query string
  var miniForm = document.getElementById('miniBookForm');
  if (miniForm) {
    miniForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var checkin = document.getElementById('mb-checkin').value;
      var checkout = document.getElementById('mb-checkout').value;
      var guests = document.getElementById('mb-guests').value;
      var params = new URLSearchParams({ checkin: checkin, checkout: checkout, guests: guests });
      window.location.href = 'book.html?' + params.toString();
    });
  }

  // Pre-fill book.html fields from query string if present
  var params = new URLSearchParams(window.location.search);
  if (params.get('checkin') && document.getElementById('bf-checkin')) {
    document.getElementById('bf-checkin').value = params.get('checkin');
  }
  if (params.get('checkout') && document.getElementById('bf-checkout')) {
    document.getElementById('bf-checkout').value = params.get('checkout');
  }
  if (params.get('guests') && document.getElementById('bf-guests')) {
    document.getElementById('bf-guests').value = params.get('guests');
  }
  if (params.get('room') && document.getElementById('bf-room')) {
    document.getElementById('bf-room').value = params.get('room');
  }
});
