import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";
import "./style/TrelloActionButton.css";

class TrelloActionButton extends React.Component {

    state = {
        formOpen: false,
        text: ""
    };

    openForm = () => {
        this.setState ({
            formOpen: true
        });
    };

    closeForm = (e) => {
        this.setState({
            formOpen: false
        });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState({
                text: ""
            });
            dispatch(addList (text));
        }

        return;
    };
    
    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState({
                text: ""
            });
            dispatch(addCard(listID, text))
        }
    }

    renderAddButton = () => {
        const {list} = this.props;

        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "rgb(5,5,5)" : "inherit";
        const buttonTextBackground = list ? "#dfe3e6" : "inherit";

        return (
            <div
            onClick={this.openForm}
                style={{
                    ...styles.openForButtonGroup,
                    opacity: buttonTextOpacity, 
                    color: buttonTextColor, 
                    backgroundColor: buttonTextBackground
                }}
            >
            <p>+</p>
            <p>{buttonText}</p>
            </div>
        );
    };

    renderForm = () => {

        const {list} = this.props;
        const placeholder = list ? "Enter list title..." : "Enter a title for this card";
        const buttonTitle = list ? "Add List" : "Add Card";

        return <div>
            <Card class="cardcontainer">
            <TextareaAutosize class="textArea"
            placeholder={placeholder} 
            autoFocus onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}/>
            </Card>

            <div class="buttons">
                <Button 
                class="addButton"
                onMouseDown={ list ? this.handleAddList : this.handleAddCard}
                variant="contained">{buttonTitle}{" "}
                </Button>

                <div class="xButton">
                    <p>x</p>
                </div>
            </div>
        </div>
    };
 
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openForButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    }
    
};

export default connect() (TrelloActionButton);