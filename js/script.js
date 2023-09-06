// init Isotope
let $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  let filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

let filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}

let bot = document.querySelector("#suggest");
bot.addEventListener("click", () => {console.log("Call API!");})
