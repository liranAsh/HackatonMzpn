import React, { Component, Fragment } from 'react';
import '../App.css';
import axios from 'axios'
import {Grid, TextField, Button} from '@material-ui/core'
class EditGuardsList extends Component {

    componentDidMount() {
        axios.get('/request/guards')
            .then(guards => {
                console.log("guards", guards.data);
                this.setState({ ...guards.data })
            });
    }
    constructor(props){
        super(props);
        this.state = {
            guards: [],
            commander: {
                id: 1,
                name: '',
                phone: '',
                type: 'מ. תורן'
            },
            officer: {
                id: 2,
                name: '',
                phone: '',
                type: 'ק. תורן'
            }
        };
    }

    handleSave = () => {
        let guards = {}

        guards.yesterday = this.state.guards.today
        guards.today = [{...this.state.commander}, {...this.state.officer}]

        axios.post('/request/updateGuards', {guards})
            .then( () => {
                console.log("saved");
                this.props.cancelEdit()
            });
    }

    setKey = (type, key) => (event) => {
        const keyState = {...this.state[type], [key]: event.target.value}
        this.setState({...this.state, [type]: keyState})
    }

    render() {
        return (
            <div >
                <h3>הוסף מפקדים חדשים</h3>
                <div>מפקד תורן</div>
                <div>
                    <TextField InputLabelProps={{classes: {formControl: 'rightZeroImportant'}}} inputProps={{dir: 'rtl'}} name={'name'} label={'שם'} placeholder={'הזן שם'} onChange={this.setKey('commander','name')}/>
                </div>
                <div>
                    <TextField InputLabelProps={{classes: {formControl: 'rightZeroImportant'}}} inputProps={{dir: 'rtl'}} name={'phone'} label={'טלפון'} placeholder={'הזן טלפון'} onChange={this.setKey('commander','phone')}/>
                </div>
                <br />
                <div>קצין תורן</div>
                <div>
                    <TextField InputLabelProps={{classes: {formControl: 'rightZeroImportant'}}} inputProps={{dir: 'rtl'}} name={'name'} label={'שם'} placeholder={'הזן שם'} onChange={this.setKey('officer','name')}/>
                </div>
                <div>
                    <TextField InputLabelProps={{classes: {formControl: 'rightZeroImportant'}}} inputProps={{dir: 'rtl'}} name={'phone'} label={'טלפון'} placeholder={'הזן טלפון'} onChange={this.setKey('officer','phone')}/>
                </div>
                <br />
                <Grid container justify={'center'}>
                    <Grid item sm={3}>
                        <Button variant="contained" color={'primary'} onClick={this.handleSave}>שמור</Button>
                    </Grid>
                    <Grid item sm={3}>
                        <Button onClick={this.props.cancelEdit}>בטל</Button>
                    </Grid>
                </Grid>
            </div>

        );
    }
}

const styles = {
    form: {
        direction: 'rtl'
    }
}
export default EditGuardsList;