import { Component } from "react";

class Form extends Component {
    initialState = {
        dia: '',
        disciplina: '',
        horario: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { dia, disciplina, horario } = this.state
        return (
            <form>
                <label htmlFor="dia">Dia</label>
                <input type="text" name="dia" id="dia" value={dia} onChange={this.handleChange} />
                <label htmlFor="disciplina">Disciplina</label>
                <input type="text" name="disciplina" id="disciplina" value={disciplina} onChange={this.handleChange} />
                <label htmlFor="horario">Horario</label>
                <input type="text" name="horario" id="horario" value={horario} onChange={this.handleChange} />
                <input type="button" value="submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;