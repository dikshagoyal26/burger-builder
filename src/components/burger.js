import React from 'react'

class Burger extends React.Component{
      state={
          bottom:[1,2],
          meat:[0,2],
          bacon:[0,3],
          cheese:[0,5],
          salad:[0,4],
          tomato:[0,1],
          total:4
      }
  constructor(props){
    super(props)
  }
    render(){
        return(
            <div >
                <div className="bread_top">
                    <div className="seeds"></div>
                </div>
                <div className="bread_bottom"></div>
            </div>
        )
    }
}

export default Burger