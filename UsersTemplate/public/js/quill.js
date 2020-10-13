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
