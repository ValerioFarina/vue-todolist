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

        // this function checks if the user input is valid
        // in this case, the input is valid if it is not already included in the todo-list and it is not an empty string
        isInputValid(input) {
            return !this.todos.includes(input) && input != '';
        },

        // this function adds a new item to the todo-list (the new item will be a user input)
        addNewItem() {
            if (this.isInputValid(this.newItem)) {
                // if the user input is valid, we add the user input to the todo-list
                this.todos.push(this.newItem);
            } else if (this.todos.includes(this.newItem)) {
                // if the user input already occurs in the todo-list, we notify the user about this fact
                alert('This item already occurs in the list');
            }
            // in any case, we reset the value of the input
            this.newItem = '';
        },

        // this function deletes an item from the todo-list
        deleteItem(index) {
            this.todos.splice(index, 1);
        }

    }

});
