function ckeditorSimple(id){
    if(document.getElementById(id)){
        new Quill(`#${id}`, {
            theme: 'snow',
            modules: {
                toolbar: [['bold', 'italic'],[{ 'list': 'ordered'}, { 'list': 'bullet' }]]
            }
          });
    }
}
ckeditorSimple("description");
ckeditorSimple("skill");
ckeditorSimple("description_work");
ckeditorSimple("request_work");
ckeditorSimple("description_work_edit");
ckeditorSimple("request_work_edit");


function ckeditorFull(id){
    if(document.getElementById(id)){
        new Quill(`#${id}`, {
            modules: { toolbar: '#toolbar' },
            theme: 'snow'
          });
    }
}
ckeditorFull('create_post');



