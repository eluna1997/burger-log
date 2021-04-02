$(function() {
    console.log("Test")
        $(".change-eaten").on("click", function(event) {
            var id = $(this).data("id");
            var newAte = $(this).data("noteate");
          
            var newAteState = {
            eaten: newAte
            };
          
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newAteState
              }).then(
                function() {
                  console.log("changed eaten to", newAte);
                  location.reload();
            }
            );
        });
    
        $(".create-form").on("submit", function(event) {
          event.preventDefault();
          var newBurg = {
            name: $("#burg").val().trim(),
          };
       
          $.ajax("/api/burger", {
            type: "POST",
            data: newBurg
          }).then(
            function() {
              console.log("New burger created.");
              location.reload();
            }
          );
        });
    })