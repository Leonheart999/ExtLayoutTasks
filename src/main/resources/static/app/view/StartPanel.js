Ext.define("EL.view.StartPanel",{
    extend: 'Ext.panel.Panel',
    layout:'border',
    xtype:'startpanel',
    border:true,
    requires:["EL.view.Menu"],
    viewModel:{
        xclass:'EL.view.StarterPanelViewModel'
    },
    controller:{
      xclass:'EL.view.MainController'
    },
    items:[{
        xtype:'tabpanel',
        reference:'centerTabPanel',
        autoScroll:true,
        title:'main',
        region:'center',
        items: [{
            xclass:"EL.view.VBox",
            title:'VBox'
        },{
            xclass:"EL.view.HBox",
            title:'HBox'
        },{
            xclass:"EL.view.Fit",
            title:'Fit'
        }
        ]
    },{
        xtype:'menu',
        region:'west'
    }, {
        xtype:'panel',
        title: 'header',
        split: true,
        layout:'fit',
        items:[{
            xtype:'panel',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[{
                xtype:'panel',
                minHeight:50,
                text:'panel1',
                flex:1
            }, {
                xtype:'panel',
                text:'panel1',
                minHeight:50,
                flex:1
            }, {
                xtype:'panel',
                text:'panel1',
                minHeight:50,
                flex:1
            }]
        }],
        region: 'north'
    },{
        xtype:'panel',
        title: 'footer',
        region: 'south',
        minHeight:100
    }]
})