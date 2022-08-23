import React from 'react'
import { withRouter } from 'react-router-dom'

function My(props) {
    console.log(props);
  return (
    <div>My</div>
  )
}
export default withRouter(My)