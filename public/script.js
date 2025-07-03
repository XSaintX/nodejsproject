function getUuid() {
  $.ajax({
    url: "http://localhost:3000/api/get-uuid",
    type: 'GET',
    success: function (res) {
      console.log(res);
      $('#result').html(res)
    },
    error: function (xhr, ajaxOptions, thrownError) {
      $('#result').html(`Error: ${xhr.status} ${thrownError}`)
    }
  });
}

$('#generate-btn').on('click', ()  => {
  getUuid();
});
