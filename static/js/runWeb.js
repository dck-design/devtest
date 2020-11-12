/* eslint-disable */
$(window)
  .ready(function () {
    $('body').css({ visibility: 'visible' })
    $('.logo')
      .fadeOut(0)
      .css({
        background:
          'radial-gradient(circle at 50% 50%,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.3) 100%)'
      })
      .fadeIn(1000)
    $('#logo')
      .fadeOut(0)
      .delay(500)
      .fadeIn(500)
      .delay(1000)
      .fadeTo(500, 0.2)
      .animate({ backgroundPositionY: '25%' })
    $('.slides').fadeOut(0).delay(4000).fadeIn(500)
    setTimeout(function () {
      $('header').css('transform', 'translateY(0)')
    }, 4000)
    gotoslide('about')
  })
  .resize(function () {
    gotoslide(wid.attr('id'))
  })
var wid = ''
var frun = true
function gotoslide(what) {
  wid = $('#' + what)
  if (wid.length) {
    if (what == 'projects') {
      $('.project-thumbs-wrapper').css('overflow-y', 'hidden')
      $('.project-thumbs').each(function (i) {
        let which = $(this)
        setTimeout(function () {
          which.removeClass('hide-on')
          if (which.is(':last-child'))
            which.on(
              'transitionend webkitTransitionEnd oTransitionEnd',
              function () {
                $('.project-thumbs-wrapper').css('overflow-y', 'auto')
              }
            )
        }, i * 50)
      })
    } else {
      $('.project-thumbs-wrapper').css('overflow-y', 'hidden')
      $('.project-thumbs').each(function (i) {
        let which = $(this)
        setTimeout(function () {
          which.addClass('hide-on')
        }, i * 50)
      })
    }
    if (what == 'contact')
      $('#webForm > input,#webForm > textarea').prop('disabled', false)
    else $('#webForm > input,#webForm > textarea').prop('disabled', true)
    const targetY = wid.offset().top - wid.parent().offset().top
    const bg_targetY = targetY / 20
    $('html,body').animate({ scrollTop: targetY }, 'slow')
    if (!frun) {
      if ($(window).width() <= 640) {
        $('#logo').css(
          'background-position-y',
          'calc(35% - ' + bg_targetY + 'px)'
        )
      } else {
        $('#logo').css(
          'background-position-y',
          'calc(25% - ' + bg_targetY + 'px)'
        )
      }
    }
    frun = false
  } else alert('Slide not found')
}
