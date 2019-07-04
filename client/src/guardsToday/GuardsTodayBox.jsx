import React, { Component, Fragment } from 'react';
import '../App.css';
import GuardsList from './GuardsList';
import Paper from '@material-ui/core/Paper';
import EditGuardsList from "./EditGuardList";
import axios from "axios";

class GuardsToday extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditMode: false,
      lastUpdateTime: undefined
    }
  }

  componentDidMount() {
    axios.get('/request/guards')
        .then(guards => {
          console.log("guards", guards.data);
          this.setState({lastUpdateTime: guards.data.lastUpdateTime })
        });
  }

  toggleEditMode = () => {
    this.setState({ isEditMode: !this.state.isEditMode })
  }

  render() {
    const {isEditMode, lastUpdateTime} = this.state
    return (
        <Paper style={styles.card}>
          <div style={styles.titleSection}>
            <h1 style={styles.title}>שומרים היום</h1>
          </div>
          <div style={styles.cardContent}>
            {!isEditMode ?
                (
                    <Fragment>
                      <GuardsList headline="עולים"></GuardsList>
                      <GuardsList headline="יורדים"></GuardsList>
                    </Fragment>
                ) :
                (
                    <EditGuardsList cancelEdit={this.toggleEditMode}/>
                )}

          </div>
          { !isEditMode && <img src="https://img.icons8.com/dotty/80/000000/edit-property.png" style={styles.editIcon} onClick={this.toggleEditMode} />}
          { lastUpdateTime && <div style={styles.lastUpdateTime}>נכון ל: {new Date(lastUpdateTime).toLocaleDateString("he")}</div>}
        </Paper>
    );
  }
}

const styles = 
{
  card: {
    margin: '0 auto',
    borderRadius: 16,
    width: '50%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  title: {
    color: '#ffffff',
    fontFamily: 'gisha',
    textAlign: 'center',
  },
  titleSection: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    textAlign: 'center',
    height: '20%',
    backgroundColor: '#ff5722',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContent: {
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
  editIcon: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    width: 50,
    cursor: 'pointer'
  },
  lastUpdateTime: {
    position: 'absolute',
    left: 10,
    top: 10,
  }
};

export default GuardsToday;