const btn = $('#addTodoBtn');
const taskNameInput = $('form input');
const formBtn = $('form button');
let checkboxes;
let taskName;
let newTask;

btn.on('click', ()=>{
    if($('form').is(':visible')){
        $('form').slideUp();
    } else{
        $('form').slideDown();
    }
    
    
    if($(btn).text() == '+'){
        $(btn).text('-');
        $(btn).css('padding', '20px 29px 20px 30px')
    } else{
        $(btn).text('+');
        $(btn).css('padding', '20px 25px')
    }
});

$('form').on('submit', (e)=>{ 
    e.preventDefault();
    if($('.waiting').is(':visible')){
        $('.waiting').fadeOut(200)
    }
    taskName = $(taskNameInput).val();
    newTask = `<li><input type="checkbox"> <label>${taskName}</label></li>`;
    $(newTask).appendTo('#list');
    taskNameInput.val('');
});


$('#list').on('change', 'input[type="checkbox"]', function() {
    const label = $(this).next('label');
    if ($(this).is(':checked')) {
        label.css('text-decoration', 'line-through');
    } else {
        label.css('text-decoration', 'none');
    }
});