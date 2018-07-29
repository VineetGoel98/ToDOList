$(()=>{
    let newtask=$('#newtask');
    let addtask=$('#addtask')
    let clear=$('#clear')
    let todolist=$('#todolist')

    addtask.click(function(){
        todolist.append(
         $('<li>').append(
             $('<span>').text(newtask.value).click(function(){
                 $(this).toggleclass('done')
             })
             
         )
         .append(
             $('<button>').text('X').click(function(){
                 $(this).parent().remove()
             })
         )
         .append(
             $('<button>').text('^').click(function(){
                 $(this).parent().insertAfter(
                     $(this).parent().next()
                 )
             })
         )
         .append(
            $('<button>').text('v').click(function(){
                $(this).parent().insertBefore(
                    $(this).parent().prev()
                )
            })
        )

        )
    })
})