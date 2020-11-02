Ext.define("EL.model.Post",{
    extend:'Ext.data.Model',
    fields: ['id', 'userId', 'title', 'body', {
        name: 'publishDate',
        convert: function() {
            return new Date()
        }
    }]
})