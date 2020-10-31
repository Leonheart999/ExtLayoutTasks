Ext.define("EL.view.Menu",{
    extend: 'Ext.panel.Panel',
    collapsible: true,
    title:'menu',
    minWidth:100,
    xtype:'menu',
    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    items:[{
        xtype:'treelist',
        flex:1,
        bind:'{menuNav}',
        listeners:{
            selectionchange:'onSelect'
        }
    }]
})