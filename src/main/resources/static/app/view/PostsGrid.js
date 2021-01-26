Ext.define("EL.view.PostsGrid",{
    extend: 'Ext.grid.Panel',
    xtype: 'array-grid',
    collapsible: true,
    multiSelect: true,
    viewConfig: {
        enableTextSelection: true
    },
    bind:'{posts}',
    tbar:[{
        xtype:'button',
        text:'button1'
    }, {
            text: 'button2'
    }],
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