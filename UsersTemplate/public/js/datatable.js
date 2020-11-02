//table
function createDataTable(tableId, optionSetting){
    $(document).ready(function() {
        $(`#${tableId}`).DataTable( {
            columnDefs: optionSetting
        } );
    } );
}
createDataTable('student-table', [{ targets: [ 0 ], searchable: false }, { targets: [ 4 ], orderData: false }]);
createDataTable('post-table', [{ targets: [ 0 ], searchable: false }, { targets: [ 5 ], orderData: false }]);
createDataTable('company-table', [{ targets: [ 0 ], searchable: false }, { targets: [ 5 ], orderData: false }]);
createDataTable('tag-table', [{ targets: [ 0 ], searchable: false }, { targets: [ 3 ], orderData: false }]);
createDataTable('cate-table', [{ targets: [ 0 ], searchable: false }, { targets: [ 2 ], orderData: false }]);