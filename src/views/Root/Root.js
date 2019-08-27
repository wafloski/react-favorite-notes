import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

const initialSteteItems = [
    {
        image: 'https://s5.tvp.pl/images2/5/1/c/uid_51c27bd35568c7475380102a44de94201547039181398_width_907_play_0_pos_0_gs_0_height_515.jpg',
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: 'https://s5.tvp.pl/images2/5/1/c/uid_51c27bd35568c7475380102a44de94201547039181398_width_907_play_0_pos_0_gs_0_height_515.jpg',
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: 'https://s5.tvp.pl/images2/5/1/c/uid_51c27bd35568c7475380102a44de94201547039181398_width_907_play_0_pos_0_gs_0_height_515.jpg',
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        image: 'https://s5.tvp.pl/images2/5/1/c/uid_51c27bd35568c7475380102a44de94201547039181398_width_907_play_0_pos_0_gs_0_height_515.jpg',
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    },
];

class Root extends React.Component {
    state = {
        items: [...initialSteteItems],
        isModalOpen: false
    }

    addPerson = (e) => {
        e.preventDefault();

        const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value
        };

        this.setState(prevState => ({
            items: [...prevState.items, newItem]
        }));

        e.target.reset();
    }

    openModal = () => {
        this.setState({
            isModalOpen: true
        });
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false
        });
    }

    render () {
        const { isModalOpen } = this.state;

        return (
            <BrowserRouter>
                <>
                    <Header openModalFunc={this.openModal}/>
                    <h1>cycu</h1>
                    <Switch>
                        <Route exact path="/" component={TwittersView}/>
                        <Route path="/notes" component={NotesView}/>
                        <Route path="/notes/:id" component={NotesView}/>
                        <Route path="/articles" component={ArticlesView}/>
                    </Switch>
                    { isModalOpen && <Modal closeModalFunc={this.closeModal}/> }
                </>
            </BrowserRouter>
        )
    }
}

export default Root;
