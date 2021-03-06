import React, { Component } from 'react';

import Modal from 'react-modal';

function withModal(WrappedComponent) {
    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
    };

    Modal.setAppElement('#app');

    class WithModal extends Component {
        state = {
            modalIsOpen: false,
            activeElementId: null,
            hiddenElements: []
        }

        render() {
            return (
                <React.Fragment>
                    <WrappedComponent data={this.state.data} {...this.props} openModal={this.openModal} hiddenElements={this.state.hiddenElements} />
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Confirm modal"
                    >
                        <p>Delete item?</p>

                        <button className="" onClick={this.closeModal}>cancel</button>
                        <button className="" onClick={this.onOk}>yes</button>
                    </Modal>
                </React.Fragment>
            );
        }

        openModal = (elementId) => {
            this.setState({
                modalIsOpen: true,
                activeElementId: elementId
            });
        };

        closeModal = () => {
            this.setState({modalIsOpen: false});
        };

        onOk = () => {
            this.removeElement(this.state.activeElementId);
            this.closeModal();
        };

        removeElement = (id) => {
            this.setState({
                hiddenElements: [...this.state.hiddenElements, id]
            });
        }
    }

    WithModal.displayName = `WithModal(${getDisplayName(WrappedComponent)})`;

    return WithModal;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withModal;
