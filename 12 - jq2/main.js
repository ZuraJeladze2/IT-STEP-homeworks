$(document).ready(function () {
  let currentStep = 1;
  const totalSteps = $(".step").length;

  $('.back').hide()
  $(".next").click(function () {
    currentStep++;
    if (currentStep > totalSteps) {
      currentStep = totalSteps;
    }
    updateWizard();
    road();
  });
  
  $(".back").click(function () {
    currentStep--;
    if (currentStep < 1) {
      currentStep = 1;
    }
    updateWizard();
    road();
  });

  function updateWizard() {
    $(".icon").removeClass("active");
    $(`.step${currentStep}`).children(".icon").addClass("active");
    $(`.step${currentStep}`).children('step-text').css('color', 'var(--bg)')
    // $(".p-wrapper").text(`You are on step ${currentStep} of ${totalSteps}`);
  }
  function road() {
    switch (currentStep) {
      case 1:
        $('.road').css(
          'width', '10%'
        );


        $('.back').hide()
        $('.p-wrapper').text(`Click next to continue`)
        $('.next').text('Next')
        break;
      case 2:
        $('.road').css(
          'width', '50%'
          );
          
          
          $('.back').show()
          $('.p-wrapper').text(`Almost there!`)
          $('.next').text('Next')
          break;
          case 3:
            $('.road').css(
              'width', '90%'
              );
              
              
              $('.back').show()
        $('.p-wrapper').text(`Last step!`);
        $('.next').text('Finish')
      default:
        break;
    }
  }
});
