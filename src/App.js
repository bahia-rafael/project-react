import './App.css';
import { Component } from 'react';
import Table from './component/Table';
import Form from './component/Form';

class App extends Component {
  state = {
    agenda: [
      // {
      //   dia: 'Segunda-feira',
      //   disciplina: 'Programação Web',
      //   horario: '08:00 às 11:30',
      // },
      // {
      //   dia: 'Terça-feira',
      //   disciplina: 'Análise de Algoritmos',
      //   horario: '08:00 às 11:30',
      // },
      // {
      //   dia: 'Quarta-feira',
      //   disciplina: 'Programação OO',
      //   horario: '14:00 às 17:00',
      // },
      // {
      //   dia: 'Quinta-feira',
      //   disciplina: 'Engenharia de Requisitos',
      //   horario: '14:00 às 17:00',
      // },
      // {
      //   dia: 'Sexta-feira',
      //   disciplina: 'Churrasco e descanso',
      //   horario: '14:00 às 17:00',
      // },
    ]
  }

  removerAgenda = (index) => {
    const { agenda } = this.state
    this.setState({
      agenda: agenda.filter((aux, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (new_obj) => {
    this.setState({
      agenda: [...this.state.agenda, new_obj]
    })
  }

  render() {
    const { agenda } = this.state
    return (
      <div className="container">
        <h1 className='text-center'>Agenda Semanal</h1>
        <Table agenda={agenda} removerAgenda={this.removerAgenda} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
