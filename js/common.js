$(function () {
  // 모바일 전체메뉴
  var menu = $('.menu_list > li > a')
  menu.click(function () {
    var subMenu = $(this).next('ul')
    if (subMenu.is(':visible')) {
      subMenu.slideUp()
    } else {
      subMenu.slideDown()
    }
  })

  // 전체메뉴
  var hamburger = $('.hamburger')
  var close = $('.menu .close')
  var menu = $('.menu')
  hamburger.click(function () {
    menu.show()
  })
  close.click(function () {
    menu.hide()
  })
})
