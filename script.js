// settings 

// timer


// puzzle


//dis & undis 

if ($('.checkG').disabled = true){
    $('.checkG').css({
        background: 'rgb(114, 16, 16)',
        cursor: 'no-drop',
    }) 
}




$('.startG').click(function(){    
    $('.checkG').disabled = false
    $('.timer-text').text('started')
    $('.checkG').css({
        background: 'rgb(189, 5, 5)',
        cursor: 'grab',
    })  

    $('.startG').disabled = true
    $('.startG').css({
        background: 'rgb(114, 16, 16)',
        cursor: 'no-drop',
    }) 


    $('.number-box').sortable({
        connectWith: '#start, #end',
    })
    
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    let check = true;
    
    // // debugger

    $('.checkG').on('click', function(){
        for(let i=0; i<$('.number').length; i++){
            if($('.number').eq(i).text() != numbers[i]){
                check = false;
                break;
            }
        }
        if(check){
            $('.black-theme').css({
                display: 'block',
            })
            $('.modal-check-win').css({
                display: 'block',
            })
        }
        else{
            $('.black-theme').css({
                display: 'block',
            })
            $('.modal-check-lost').css({
                display: 'block',
            })
        }
        check = true;
})



$('.close-modal').click(function(event){
    $('.checkG').disabled = true
    $('.checkG').css({
        background: 'rgb(114, 16, 16)',
        cursor: 'no-drop',
    })  

    // reset
    $('.timer-text').text('restarted')

    // $('#end').text('reset')
    document.location.reload();
    // /reset

    $('.startG').disabled = false
    $('.startG').css({
        background: 'rgb(189, 5, 5)',
        cursor: 'grab',
    }) 

    // $('.close-modal').disabled = true
    $('.black-theme').css({
        display: 'none',
    })
    $('.modal-check-win').css({
        display: 'none',
    })
    $('.modal-check-lost').css({
        display: 'none',
    })
    $('.modal-check-time').css({
        display: 'none',
    })
})
})
