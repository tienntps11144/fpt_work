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
//zoom in
function zoomIn(e, boxId){
    document.getElementById(boxId).src=e.src;
}
//process Tag
var arrTag=[];
function appendTag(value, boxId){
    if(value!=-1 && arrTag.indexOf(value)==-1){
        arrTag.push(value);
        var element=
        `  <div class="px-5 h-30 float-left text-sm bg-gray-200 text-gray-500 relative mr-2 b-radi-4 flex items-center">
                <span class="text-gray-600">${value}</span>
                <i class="material-icons text-sm absolute top-0 right-0 cursor-pointer opacity-0 hover:opacity-100" onclick="removeTag(this.parentNode, '${value}', '${boxId}')">close</i>
            </div>
        `;
        document.getElementById(`${boxId}`).insertAdjacentHTML('afterbegin', element);
        document.getElementById(`${boxId}`).style.display="flex";
    }
}
function removeTag(e, value, boxId){
    var position=arrTag.indexOf(value);
    arrTag.splice(position, 1);
    e.remove();
    if(arrTag.length==0){
        document.getElementById(`${boxId}`).style.display="";
    }
}
//slideshow
var SlideCount=0;
function slide(boxId, direct){
    var boxSlide=document.getElementById(`${boxId}`);
    var count=boxSlide.children.length;
    var everX=100;
    if(direct=='left'){
        if(SlideCount>0){
            SlideCount--;
            boxSlide.style.left=`-${SlideCount*everX}%`;
        }
    }
    else if(direct=='right'){
        if( SlideCount<count-1){
            SlideCount++;
            boxSlide.style.left=`-${SlideCount*everX}%`;
        }
    }
}