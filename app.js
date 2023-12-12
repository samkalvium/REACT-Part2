
class ReactContainerOne extends React.Component{
      render(){
          return (
          <div>Hello! Welcome to Kalvium   
             <div>This is babel</div>
         </div> )
      };  
  }

const containerOne = document.getElementById('react-container');
// Direclty pass the component to render
ReactDOM.render(<ReactContainerOne/>,containerOne);    