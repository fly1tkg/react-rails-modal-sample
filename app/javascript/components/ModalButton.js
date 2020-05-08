import React from "react"
import PropTypes from "prop-types"

// 追加のコンポーネントはFunctional Componentにする
const Modal = (props) => {
  if (!props.show) {
    return null
  }

  return(
    <div>
      <h4>{props.title}</h4>
      <div>modal body</div>
      <button onClick={props.modalClose}>閉じる</button>
    </div>
  )
}

// 最上位のコンポーネントはReact.Componentで作成する (FunctionalComponent 動かなそう)
// 
class ModalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state={
        show: false,
    };
  }

  open = () => {
    this.setState({show: true})
  }

  modalClose = () => {
    this.setState({show: false})
  }

  render () {
    return (
      <React.Fragment>
        <button onClick={this.open}>表示</button>
        <Modal { ...{
          ...this.props, 
          ...this.state, 
          modalClose: this.modalClose 
        } }/>
      </React.Fragment>
    );
  }
}

ModalButton.propTypes = {
  title: PropTypes.string
};

export default ModalButton
