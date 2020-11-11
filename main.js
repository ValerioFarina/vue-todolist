var app = new Vue({

    el : '#root',

    data : {

        todos : [
            'item 1',
            'item 2',
            'item 3',
            'item 4',
            'item 5',
            'item 6',
            'item 7'
        ],

        newItem : ''

    },

    methods : {

        addNewItem() {
            this.todos.push(this.newItem);
            this.newItem = '';
        }

    }

});
