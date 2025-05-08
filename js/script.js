

  $(document).ready(function() {
    var $gallery = $('#gallery');
  
    // Isotope इनिशियलाइज करें
    $gallery.isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });
  
    // फिल्टर बटन पर क्लिक इवेंट
    $('ul li').click(function() {
      var filterValue = $(this).attr('data-filter');
      $gallery.isotope({ filter: filterValue });
      return false;
    });
  });
  
  