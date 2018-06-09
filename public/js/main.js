        $(function(){

        if($('textarea#ta').length){
            CKEDITOR.replace('ta');
        }
        $('a.confirmDeletion').on('click',function(){
        if(!confirm('Are you Sure You want to Delete This Page'))
        {
        return false;
        }
        });
        });