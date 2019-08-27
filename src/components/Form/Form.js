import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from './FormRadio';

const types = {
    twitter: 'twitter',
    article: 'article',
    note: 'note'
};

const descriptions = {
    twitter: 'favorite Twitter account',
    article: 'Article',
    note: 'Note'
};

class Form extends React.Component {
    state = {
        activeOption: types.twitter
    };

    handleRadioButtonChange = (type) => {
        this.setState({
            activeOption: type
        })
    }

    render() {
        const { activeOption } = this.state;

        return (
            <div className={styles.wrapper}>
                <Title>Add new {descriptions[activeOption]} person</Title>
                <form autoComplete="off" className={styles.form} onSubmit={this.props.submitFunc}>
                    <div className={styles.formOptions}>
                        <Radio
                            id={types.twitter}
                            checked={activeOption === types.twitter}
                            changeFunc={() => this.handleRadioButtonChange(types.twitter)}
                        >twitter</Radio>
                        <Radio
                            id={types.article}
                            checked={activeOption === types.article}
                            changeFunc={() => this.handleRadioButtonChange(types.article)}
                        >article</Radio>
                        <Radio
                            id={types.note}
                            checked={activeOption === types.note}
                            changeFunc={() => this.handleRadioButtonChange(types.note)}
                        >note</Radio>
                    </div>
                    <Input name="name" label={ activeOption === types.twitter ? 'Twitter name' : 'Title'} maxLength={30}/>
                    { activeOption !== types.note ?
                        <Input name="link" label={ activeOption === types.twitter ? 'Twitter link' : 'Link'} maxLength={30}/> : null
                    }
                    { activeOption === types.twitter ?
                        <Input name="image" label="Image" maxLength={30}/> : null
                    }
                    <Input
                        tag="textarea"
                        name="description"
                        label="Description"
                        maxLength={30}
                    />
                    <Button>add new item</Button>
                </form>
            </div>
        )
    }
}

export default Form;