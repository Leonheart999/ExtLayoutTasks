Ext.define('EL.store.Posts',{
    extend:'Ext.data.Store',
    requires:['EL.model.Post','Ext.data.proxy.Rest'],
    model:'EL.model.Post',
    autoLoad:true,
    pageSize: null,
    validators: {
        userId: 'present'
    },
    proxy:{
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'rest',
        reader: {
            type: 'json',
            rootProperty: 'data',
            implicitIncludes: false
        },
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }

});