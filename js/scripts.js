$(document).ready(function() {
  $("form#infoinput").submit(function(event) {
    const age = $("input#age").val();
    const gender = $("select#gender").val();
    const genre = $("select#genre").val();
    const personality = $("select#personality").val();
    $("#result").show();
    console.log(age, gender, genre, personality)

    if ((parseInt(age) >= 20) && (gender === 'male') && (genre === 'adventure') && (personality === 'aggressive')) {
      $('#darthvader').show();
    }

    if ((parseInt(age) >= 20) && (gender === 'female') && (genre === 'adventure') && (personality === 'aggressive')) {
      $('#maleficent').show();
    }

    if ((parseInt(age) >= 20) && (gender === 'male') && (genre === 'action') && (personality === 'herotic')) {
      $('#lukeskywalker').show();
    }

    else if ((parseInt(age) >= 20) && (gender === 'female') && (genre === 'adventure') && (personality === 'heroic')) {
      $('#xena').show();
    }

    else if ((parseInt(age) >= 20) && (gender === 'male') && (genre === 'comedy') && (personality === 'sauve')) {
      $('#hansolo').show();
    }

    else if ((parseInt(age) >= 20) && (gender === 'female') && (genre === 'comedy') && (personality === 'sauve')) {
      $('#carmensandiego').show();
    }

    else if ((parseInt(age) >= 20) && (gender === 'male') && (genre === 'adventure') && (personality === 'diplomatic')) {
      $('#captainpicard').show();
    }

    else if ((parseInt(age) >= 20) && (gender === 'female') && (genre === 'adventure') && (personality === 'diplomatic')) {
      $('#princessleia').show();
    }

    else if ((parseInt(age) >= 20) && (gender === 'male') && (genre === 'adventure') && (personality === 'diplomatic')) {
      $('#admiralackbar').show();
    }

    else if ((parseInt(age) >= 20) && (gender === 'female') && (genre === 'adventure') && (personality === 'diplomatic')) {
      $('#admiralackbar').show();
    }

    else if (parseInt(age) >= 20 && (gender === 'male') && (genre === 'adventure') && (personality === 'sauve')) {
      $('#lando').show();
    }

    else if (parseInt(age) >= 20 && (gender === 'male') && (genre === 'comedy') && (personality === 'heroic')) {
      $('#jackiechan').show();
    }

    else if (parseInt(age) < 20) {
      $('#sorry').show();
    }

    else {
      $('#sorry').show();
    }

    event.preventDefault();
  });
});
