import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



// var component=React.createClass({
//  propTypes:{//name:React.PropTypes.string.isRequired,
//             middleName:React.PropTypes.string ,
//             lastName:React.PropTypes.string,
//             text:React.PropTypes.string
//   },
//   getDefaultProps:function(){
//     return{
//       text:" "
//     }
//   }
//   ,
// getInitialState:function(){
//   return{
//     text: this.props.text,
//   };
// },
// _textChange:function(ev){
//        this.setState({
//          text:ev.target.value
//        });
// },


//   render :function(){

//   return React.DOM.div(null,
//          React.DOM.textarea({
//                    onChange:this._textChange,
//                    value:this.state.text
//           },
//          ),
//          React.DOM.h1(null,this.state.text.length)
//   );
//   }
// });


 // _sortAscending: function(ev){
    //       var colunm=ev.target.cellIndex;
    //       var data1 = this.state.data.slice();
    //        data1.sort(function(a,b){
    //          return a[colunm]>b[colunm]
    //          console.log(data1)
    //        });
    //        this.setState ({
    //          data:data1
    //        })
          
    // },
    //_sortDescending:function(on){
     
      // value ^= true;
      //  var colunmd = on.target.cellIndex;
      //  var datad= this.state.data.slice();
      //  if(value==1){
      //  datad.sort(function(a,b){
      //    return a[colunmd]<b[colunmd]
      //  });
      //  this.setState({
      //    data:datad
      //  })}
    //    else if(value===0){
    //   datad.sort(function(a,b){
    //      return a[colunmd]>b[colunmd]
    //    });
    //    this.setState({
    //      data:datad
    //    })}
   // }
      



var data = [  ["The Lord of the Rings", "J. R. R. Tolkien",    "English", "1954–1955", "150 million"],
  ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",    "French", "1943", "140 million"],  ["Harry Potter and the Philosopher's Stone", "J. K. Rowling",    "English", "1997", "107 million"],  ["And Then There Were None", "Agatha Christie",    "English", "1939", "100 million"],  ["Dream of the Red Chamber", "Cao Xueqin",    "Chinese", "1754–1791", "100 million"], ["The Hobbit", "J. R. R. Tolkien",    "English", "1937", "100 million"],  ["She: A History of Adventure", "H. Rider Haggard",    "English", "1887", "100 million"], ]; 

var value;
var headers = [  "Book", "Author", "Language", "Published", "Sales" ];

var Excel=React.createClass({
  
     getInitialState:function(){
     return {data:this.props.data,
             edit:null 
      }
    },
   
    _sort: function(ev){
         value ^= true;
         console.log(value)
         
          var colunm=ev.target.cellIndex;
          var data1 = this.state.data.slice();
          if(value===1){
            
           data1.sort(function(a,b){
             return a[colunm]>b[colunm]
            
           });
           this.setState ({
             data:data1
          })}
          if(value===0){
           
           data1.sort(function(a,b){
             return a[colunm]<b[colunm]
             
           });
           this.setState ({
             data:data1
          })}
          
    },
   editdata:function(){
    
         
      
   },

    
    

  render:function(){
    return( 
       <div>
             <table style={{border:"5px solid black"}}>
               <thead onClick={this._sort} style={{background:"skyblue"}}
               title={"Sort colunm"}
                >
               <tr>{this.props.header.map(function(title,id){
               return <th key={id}>{title}</th>
               })}
               
               </tr>
               </thead>
               <tbody>

                 {this.state.data.map(function(row,id){
                        return <tr key={id}>
                       { row.map(function(cell,id){
                         return <td style={{border:"2px solid red"}}
                          key={id}
                          
                          >{cell}
                          
                          </td>
                       })}
                        </tr> 
                 })}
                 
               </tbody>
             </table>
    
            </div>
            
    )
    }
});

ReactDOM.render(
  <Excel header={headers} data={data} />
  ,
  document.getElementById('root')
);