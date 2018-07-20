$(document).ready(function () {
    
    
    moveTaskOnSize();
    var task={idOfCol:"",name:"",description:""};
    var previusColEdit="-1";
    var viewTask={idOfCol:"",name:"",description:""};

    function  moveTaskOnSize() {
        var windowSize = document.body.clientWidth;
        if (windowSize < 500) {
            $('.test').addClass('margin-left: 100px');
        } else if (windowSize >= 501) {
            $('.test').removeClass('margin-left: 100px');
        }
    };
    
    $(window).resize(function () {
        moveTaskOnSize();
    });
    
    $("#taskClose").click(function(){
        
    });

    $("#contactClose").click(function(){
        $("#contactName").val("");
        $("#contactEmail").val("");
        $("#contactMessage").val("");
    });
    
    $("#saveTask").click(function(){
       if($("#taskName").val() != "" || $("#taskDescription").val() != ""){ 
            
            task.name = $("#taskName").val();
            task.description = $('#taskDescription').val(); 
            
            
            var colNoumber = task.idOfCol.substring(3,4);

            $("#col"+colNoumber+"_name").text(task.name);
            $("#col"+colNoumber+"_infos").text(task.description);
           
           
            if(previusColEdit != task.idOfCol){
               if($("#col"+colNoumber+"_name").text() != ""){
                  
                  $("#taskName").val("");
                  $('#taskDescription').val(""); 

               }
            }
        }
    
    });
    
    $(".endBtn").click(function(){
            task.idOfCol = $(this).attr("id");
            var colNoumber = task.idOfCol.substring(3,4);
            $("#col"+colNoumber+"_name").text("Task Name");
            $("#col"+colNoumber+"_infos").text("Infos");
    });
    
    $(".taskBtn").click(function(){
        task.idOfCol = $(this).prop("id");
    });
    
    $(".viewTask").click(function(){
        viewTask.idOfCol = $(this).prop("id");
        var colNoumber = viewTask.idOfCol.substring(3,4);
        
        var taskName = $("#col"+colNoumber+"_name").text();
        $("#headerTask").text(taskName);
        
        var taskDetails = $("#col"+colNoumber+"_infos").text();
        $("#paragraph").text(taskDetails);
    });
    
    $("#taskDetailsEdit").click(function(){
        $("#paragraph").addClass("hidden");
        
        
        var paragraphContext = $("#paragraph").text();
        $("#editTaskTextArea").val(paragraphContext);
        
        var colNoumber = viewTask.idOfCol.substring(3,4);
        $("#col"+colNoumber+"_infos").val(paragraphContext);
        
        $("#editTaskTextArea").removeClass("hidden");
       
    });
    
    $("#taskDetailsDone").click(function(){
        var textAreaContext = $("#editTaskTextArea").val();
        
        if(textAreaContext.length > 0){
            var colNoumber = viewTask.idOfCol.substring(3,4);
            $("#col"+colNoumber+"_infos").text(textAreaContext);

            $("#editTaskTextArea").addClass("hidden");
            $("#paragraph").removeClass("hidden");
        }
    });

    $("#taskDetailsClose").click(function(){ 
        $("#editTaskTextArea").addClass("hidden");
        $("#paragraph").removeClass("hidden");
        
    });
    
    
});
