let obj = []
let editObj = []

$(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        data: "json",
        success: function(data){
            $.each(data,function(ind,val){
                $("#main-data").append(`<tr>
                <td>${val.id}</td>
                <td>${val.title}</td>
                <td>${val.body}</td>
                <td><button class="edit-btn" data-index="${ind}">EDIT</button></td>
                </tr>`)
            // console.log(val);
            obj.push(val)

            })

        }
    })
})

// console.log(obj);




$(document).on("click", ".edit-btn", function(e) {
    var dataIndex = $(this).data("index");
    $(".modal").show();

    $(".modal").html(`<form>
        <h3>${obj[dataIndex].id}</h3><br><br><h2 id="close">X</h2>
        <h2>Title : </h2> <input type="text" name="title" id="title-one" value="${obj[dataIndex].title}"><br><br><br>
        <h2>Description : </h2> <input type="text" name="desc" id="desc-one" value="${obj[dataIndex].body}">
        <button id="btn-submit">Submit</button>
    </form>`) 
    $("#btn-submit").click(function(e){
        e.preventDefault();
        let title = $("#title-one").val();
        let desc = $("#desc-one").val();
        let mainData = {
            idData: obj[dataIndex].id,
            titleData : title,
            descData  : desc
        };
        
        editObj.push(mainData);
        console.log(editObj);
    
      $("#edit-main-data").html(`<tr>
      <td>${editObj.idData}</td>
      <td>${editObj.titleData}</td>
      <td>${editObj.descData}</td>
      </tr>`)
    });
    $("#close").click(function() {
        $(".modal").fadeOut();
        
    });
    
    
       
});


