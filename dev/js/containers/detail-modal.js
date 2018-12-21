import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DetailModal extends Component {
  constructor(props) {
    super(props);

    this.modalClose = this.modalClose.bind(this);
  }
  modalClose(e) {
    e.preventDefault();
    console.log('close fired');
    const detailContainer = document.querySelector('.modal-wrapper');
      detailContainer.classList.remove('expand');
  }
  render() {
    const modalDetail = this.props.modalData ? this.props.modalData : { Title: '', Poster: '', Year: '' };
    return (
      <div className="modal-container">
        <div className="modal-header hide">
          <h3>Movie detail</h3>
        </div>
        <div className="modal-body">
          <h4>{modalDetail.Title}</h4>
          <strong>Year: {modalDetail.Year}</strong>
          <p className="text-center">
            <img src={modalDetail.Poster} alt="thumb" height="190px" />
          </p>
        </div>
        <div className="modal-footer">
          {/* <button name="okModalBtn" className="modal-ok">OK</button> */}
          <button name="okModalBtn" className="modal-ok" onClick={this.modalClose}>Close</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    modalData: state.modalData
  }
}

export default connect(mapStateToProps)(DetailModal);