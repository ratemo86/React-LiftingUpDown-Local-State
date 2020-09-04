import React from 'react';
import Search from './search.component'
import List from './list.component'
import boolklist from '../database/booklist.json'

class SearchableListUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            query: '',
            archivedItems: []
        };
        this.onChange = this.onChange.bind(this);
        this.onArchive = this.onArchive.bind(this);
    }

    componentDidMount()
    {
       /*  this.setState({list: boolklist})
        console.log(boolklist);
    fetch('../database/booklist.json')
        .then(resp =>
      
          resp.json()
      
        ).then((response) => {
            console.log(response);
            //this.setState({list: response})
           //this.setState((prevState) => prevState.list = [...prevState.list, ...response])
         }) */

     /*   fetch('http://numbersapi.com')
        .then(resp =>
      
          resp.json()
      
        ).then((response) => {
            console.log(response);
            //this.setState({list: response})
           //this.setState((prevState) => prevState.list = [...prevState.list, ...response])
         })
 */
    }

    onArchive(id) {
        const { archivedItems } = this.state;
       
        this.setState({
            archivedItems: [...archivedItems, id]
        });
    }

    onChange(event) {
        const { value } = event.target;
        this.setState({
            query: value
        });
    }
    render() {
       
        const { query, archivedItems, list } = this.state;


        const filteredList = list
            .filter(byQuery(query))
            .filter(byArchived(archivedItems));
        return (
            <div>
                <Search
                    query={query}
                    onChange={this.onChange}
                    list={filteredList}
                    
                >
                    Search List:
                </Search>
                <List list={(list || []).filter(byQuery(query))} onArchive={this.onArchive}/>
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

function byArchived(archivedItems) {
    return function (item) {
        return !archivedItems.includes(item.id);
    }
}


export default SearchableListUp