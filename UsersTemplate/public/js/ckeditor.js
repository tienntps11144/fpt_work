function createCkeditor(editorId, toolbarId){
    DecoupledEditor
        .create( document.querySelector(`#${editorId}`) )
        .then( editor => {
            const toolbarContainer = document.querySelector(`#${toolbarId}`);

            toolbarContainer.appendChild( editor.ui.view.toolbar.element );
        } )
        .catch( error => {
            console.error( error );
    } );
}
createCkeditor('editor', 'toolbar');