import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router';


 type SearchParams = {
    id: string; 
  };

  type SearchProps = RouteComponentProps<SearchParams>;  




const Search: React.FC<SearchProps> = ({ match }) => {
    return (
        <div>
            search term: {match.params.id}
        </div>
    )
}

export default withRouter(Search);
