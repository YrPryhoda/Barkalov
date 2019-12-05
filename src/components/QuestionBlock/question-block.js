import React from 'react';
//import {TaskName} from '../TaskName';
//import Variants from '../Variants';
import { ButtonNext } from '../ButtonNext';
import './question-block.css';
import Spinner from '../spinner';

export default class QuestionBlock extends React.Component {

    state = {
        data: null,
        id: 0,
        correct: null
    }
    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then((data) => {
                this.setState({ data })
            });
    }
    showTasks(arr, id) {
        let tempRes = [];
        arr.map((item, index, arr) => {
            tempRes.push(item.name);
            return true;
        });
        return tempRes[id]
    }
    getAnswers(arr, id) {
        let answers = [];
        arr.map((item, index) => {
            if (index === id) {
                item.answers.map(i => answers.push(i))
            } return false;
        });
        return answers;
    }
    showAnswers = (arr, id) => {
        const answer = this.getAnswers(arr, id)
        const res = answer.map((el) => {
            return (
                <li className = 'my-list list-group-item list-group-item-action' key={el.label}>
                    {el.variant}
                </li>)
        })
        return res;
    }

    onNextClick = () => {
        let {id, data} = this.state;
        id+=1
        if(id < data.length) {
        this.setState({ id });
        } else {
            document.getElementById('btn')
            .classList.add('disabled')
        }

    }

    render() {
        const { id, data } = this.state;
        if (!data) {
            return <Spinner />
        }
        const task = this.showTasks(data, id);
        const answers = this.showAnswers(data, id);
        return (
            <div className='main-div'>
                <h3 className="text-center" >
                    {task}
                </h3>
                <div >
                    <ul className="list-group my-group">
                        {answers}
                    </ul>
                </div > 
                <ButtonNext next={this.onNextClick} />
            </div >
        )
    }
}