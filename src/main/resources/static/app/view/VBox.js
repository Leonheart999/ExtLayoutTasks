Ext.define("EL.view.VBox",{
    extend: 'Ext.panel.Panel',

    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    items:[{
        xtype:'panel',
        title:'panel1',
        flex:1
    },{
        xtype:'panel',
        title:'pane2',
        flex:1
    },{
        xtype:'panel',
        title:'panel3',
        flex:1
    }]
})