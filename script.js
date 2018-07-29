$(() => {
    let newtask = $('#newtask')
    let addtask = $('#addtask')
    let todolist = $('#todolist')

    addtask.click(() => {
        let task = newtask.val()
        newtask.val('')
        todolist.prepend(
            $('<li>').text(task).append($('<button>').text('^')).click(function(){
                $(this).remove()
            })
            .append($('<button>').text('v'))
            .append($('<button>').text('x')).click(function () {
                $(this).toggleClass('done')

                
            })
         ) 
            
            
            
            
            
            
            
    })

})
$(()=>{
    let clear=$('clear')
    clear.click(()=>{

    })
})
