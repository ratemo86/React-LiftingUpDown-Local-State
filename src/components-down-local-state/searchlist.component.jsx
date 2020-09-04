import React from 'react';
import Search from './search.component'
import List from './list.component'

class SearchableListDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            list: []
        };
        this.onChange = this.onChange.bind(this);
     //   this.onArchive = this.onArchive.bind(this);
    }

    /*  onArchive(id) {
         const { archivedItems } = this.state;
         this.setState({
             archivedItems: [...archivedItems, id]
         });
     } */

    onChange(event) {
        const { value } = event.target;
        this.setState({
            query: value
        });
    }
    render() {
        
        
        /* const { query, archivedItems } = this.state;
        const filteredList = list
            .filter(byQuery(query))
            .filter(byArchived(archivedItems)); */

        const { query, list } = this.state;
        const filteredList = list
            .filter(byQuery(query));
        return (
            <div>
                <Search
                    query={query}
                    onChange={this.onChange}
                  
                >
                    Search List:
                </Search>
             
                <List list={filteredList} />
            </div>
        );
    }
}
function byQuery(query) {
    return function (item) {
        return !query ||
            item.name.toLowerCase().includes(query.toLowerCase());
    }
}

/* function byArchived(archivedItems) {
    return function (item) {
        return !archivedItems.includes(item.id);
    }
}
 */

export default SearchableListDown