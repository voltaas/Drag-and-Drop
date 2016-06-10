$(function () {
  var data = { "user_info": [{"name": "SWAMI", "role": "INTERN", "experience": "1MONTH", "level": "LEVEL3"}, {"name": "SIMON", "role": "EMPLOYEE", "experience": "3 years", "level": "LEVEL4"}, {"name": "BABU", "role": "MANAGER", "experience": "5 years", "level": "LEVEL4"}, {"name": "GHANA", "role": "EMPLOYEE", "experience": "3 years", "level": "LEVEL4"}]}
  var data1 = { "project_info": [{"project": "HTML", "name": "SWAMI", "duration": "1MONTH", "level": "LEVEL3"}, {"project": "DJANGO", "name": "SIMON", "duration": "3 WEEKS", "level": "LEVEL4"}, {"project": "PYTHON", "name": "BABU", "duration": "5 WEEKS", "level": "LEVEL4"}, {"project": "LINUX", "name": "GHANA", "duration": "10 DAYS", "level": "LEVEL4"}]}
  var data2 = { "personal_info": [{"s.no": "1", "first_name": "SWAMI", "last_name": "NATHAN", "short_name": "SWAMI", "department": "AUDIO", "reporting manager": "BABU", "skills": "HTML", "date of join": "20th JUNE 2016", "total experience": "1 MONTH"}, {"s.no": "2", "first_name": "SIMON", "last_name": "RAJA", "short_name": "SINGH", "department": "AUDIO", "reporting manager": "BABU", "skills": "FLASK", "date of join": "20th JUNE 2015", "total experience": "3YEARS"}]}

  // INTIAL HIDES
  $('#people').hide();
  $('.btn-people').on('click', function() {
    $('#people').toggle('hide');
  })
  $('#project').hide();
  $('.btn-project').on('click', function() {
    $('#project').toggle('hide');
  })
  $('#user').hide();
  $('.table-3').hide();
  $('.btn-update').on('click', function() {
    $('#user').toggle('hide');
    $('.table-3').toggle('hide');
  })
  $('.table-1').hide();
  $('.table-2').hide();
  $('.btn-resource').on('click', function() {
    $('.table-1').toggle('hide');
    $('.table-2').toggle('hide')
  })
   $("#peopleDrop li").draggable(
    {
      appendTo: "body",
      cursor: "move",
      helper: "clone",
      revert: "valid",
  });
  $("#projectDrop li").draggable(
    {
      appendTo: "body",
      cursor: "move",
      helper: "clone",
      revert: "valid",
  });
  $("#update li").draggable(
    {
      appendTo: "body",
      cursor: "move",
      helper: "clone",
      revert: "valid",
  });
  initDroppable($("#dropdiv .table-1 td#name"));
  function initDroppable($elements) {
    $elements.droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-drop-hover",
        accept: ":not(.ui-sortable-helper)",

        over: function (event, ui) {
            var $this = $(this);
        },
        drop: function (event, ui) {
            // console.dir(ui.draggable)
            var $this = $(this);
            event.dropEffect = "move";
            $("<span></span>").text(ui.draggable.text()).appendTo(this);
            $("#people").find(":contains('" + ui.draggable.text() + "')")[0];
            var draggable = ui.draggable;
            var detected_id = draggable.attr("id");
            $.each(data.user_info, function(i) {
              // console.log(data.user_info[i]);
              if(detected_id == data.user_info[i]["name"]) {
                console.log(data.user_info[i]["name"])
                $this.closest("tr").html('<td>'+ data.user_info[i]['name'] + '</td><td>'+data.user_info[i]['role']+'</td>' + '<td>' + data.user_info[i]['experience'] + '</td><td>' + data.user_info[i]['level']);
              }
            });
         }
    });
    initDroppable1($("#dropdiv .table-2 td#name"));
    function initDroppable1($elements) {
      $elements.droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-drop-hover",
        accept: ":not(.ui-sortable-helper)",

        over: function (event, ui) {
            var $this = $(this);
        },
        drop: function (event, ui) {
            // console.dir(ui.draggable)
            var $this = $(this);
            event.dropEffect = "move";
            $("<span></span>").text(ui.draggable.text()).appendTo(this);
            $("#project").find(":contains('" + ui.draggable.text() + "')")[0];
            var draggable = ui.draggable;
            var detected_id = draggable.attr("id");
            $.each(data1.project_info, function(j) {
              // console.log(data.user_info[i]);
              if(detected_id == data1.project_info[j]["project"]) {
                console.log(data1.project_info[j]["project"])
                $this.closest("tr").html('<td>'+ data1.project_info[j]['project'] + '</td><td>'+data1.project_info[j]['name']+'</td>' + '<td>' + data1.project_info[j]['duration'] + '</td><td>' + data1.project_info[j]['level']);
              }
            });
          }
      });
    }

    initDroppable2($("#dropdiv .table-3 td#name"));
    function initDroppable2($elements) {
      $elements.droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-drop-hover",
        accept: ":not(.ui-sortable-helper)",
        over: function (event, ui) {
          var $this = $(this);
        },
        drop: function (event, ui) {
          // console.dir(ui.draggable)
          var $this = $(this);
          event.dropEffect = "move";
          $("<span></span>").text(ui.draggable.text()).appendTo(this);
          $("#user").find(":contains('" + ui.draggable.text() + "')")[0];
          var draggable = ui.draggable;
          var detected_id = draggable.attr("id");
          $.each(data2.personal_info, function(k) {
            // console.log(data.user_info[i]);
            if(detected_id == data2.personal_info[k]["s.no"]) {
              console.log(data2.personal_info[k]["s.no"])
              $this.closest("tr").html('<td>'+ data2.personal_info[k]['s.no'] + '</td><td>'+data2.personal_info[k]['first_name']+'</td>' + '<td>' + data2.personal_info[k]['last_name'] + '</td><td>' + data2.personal_info[k]['short_name'] + '</td><td>' + data2.personal_info[k]['department'] + '</td><td>' + data2.personal_info[k]['reporting manager'] + '</td><td>' + data2.personal_info[k]['skills'] + '</td><td>' + data2.personal_info[k]['date of join'] + '</td><td>' + data2.personal_info[k]['total experience']);
            }
          });
        }   
      });
    }
  }
});

