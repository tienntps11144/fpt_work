//Hiện form login
function showLogin(e){
    if(e.value!=='default'){
        e.parentNode.parentNode.parentNode.parentNode.style.left='100vw';
        document.getElementById('form-login').style.right='0vw';
        document.getElementById('area').value=e.value;
        setTimeout(()=>{
            e.parentNode.parentNode.parentNode.parentNode.remove()
        },300);
    }
}
//preview img
function preview(e, boxId){
    var src= window.URL.createObjectURL(e.files[0]);
    document.getElementById(`${boxId}`).style.display='block';
    document.getElementById(`${boxId}`).src=src;
}