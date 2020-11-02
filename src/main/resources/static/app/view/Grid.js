Ext.define("EL.view.Grid",{
    extend: 'Ext.grid.Panel',
    xtype: 'array-grid',
    collapsible: true,
    height: 500,
    multiSelect: true,
    viewConfig: {
        enableTextSelection: true
    },
    bind:'{posts}',
    columns:[{
        text:'ID',
        width:50,
        dataIndex:'id',
    },{
        text:'User ID',
        dataIndex:'userId',
        flex:1
    }, {
        text:'Title',
        dataIndex: 'title',
        flex:1
    }, {
        text:'Body',
        dataIndex: 'body',
        flex:2
    }]
})