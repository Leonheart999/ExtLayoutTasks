Ext.define("EL.view.HBox",{
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'hbox',
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