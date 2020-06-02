$(document).ready(function() {
  $("form#infoinput").submit(function(event) {
    const age = $("input#age").val();
    const gender = $("select#gender").val();
    const genre = $("select#genre").val();
    const personality = $("select#personality").val();
    $("#result").show();
    console.log(age, gender, genre, personality)

    if ((parseInt(age) >= 20) && (gender === 'male') && (genre === 'action') && (personality === 'aggressive')) {
      $('#darthvader').show();
    }

    else if ((parseInt(age) >= 20) && (gender === 'female') && (genre === 'adventure') && (personality === 'heroic')) {
      $('#xena').show();
    }

    else if ((parseInt(age) >= 20) && (gender === 'female') && (genre === 'comedy') && (personality === 'sauve')) {
      $('#hansolo').show();
    }

    else if ((parseInt(age) >= 20) && (gender === 'female') && (genre === 'adventure') && (personality === 'diplomatic')) {
      $('#princessleia').show();
    }

    else if ((parseInt(age) >= 20) && (gender === 'male') && (genre === 'adventure') && (personality === 'diplomatic')) {
      $('#admiralackbar').show();
    }

    else if (parseInt(age) >= 20 && (gender === 'male') && (genre === 'adventure') && (personality === 'sauve')) {
      $('#lando').show();
    }

    if (parseInt(age) < 20) {
      $('#sorry').show();
    }

    event.preventDefault();
  });
});
