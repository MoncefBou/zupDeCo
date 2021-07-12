import React from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import TransitEnterexitIcon from '@material-ui/icons/TransitEnterexit';
import NavBar from '../components/Nav/NavBar';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import '../Css/ListAdminStudents.css'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    '& > *': {
      margin: theme.spacing(1),
    }
  },
}));

export default function CheckboxList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [oneStudent, setOneStudent] = React.useState([])
  const [students, setStudents] = React.useState([])
  const [admin, setAdmin] = React.useState(0)
  let history = useHistory()


  useEffect(async () => {

    const token = localStorage.getItem("token") || false
    const role = localStorage.getItem("role")

    if (!token || role !== "1") {
      history.push('/')
    }

    const response = await axios.get('http://localhost:8000/admin/students', {
      headers: {
        authorization: 'bareal ' + localStorage.getItem('token')
      }
    })

    const dataOfArray = response.data

    setStudents(dataOfArray)
  }, [])

  const clickStudent = (value) => {
    setOneStudent(value)
    setAdmin(1)
  }

  const returnToHomeAdmin = () => {
    history.push('/admin')
  }

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  if (admin === 0) {
    return (

      <div>

        <NavBar />

        <h2>Liste des élèves</h2>
        <List className={classes.root} className="listStudents">
          {students.map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem key={value} role={undefined} dense button onClick={(e) => clickStudent(value)}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value.firstName} ${value.lastName}`} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="comments" onClick={(e) => clickStudent(value)}>
                    <TransitEnterexitIcon />
                  </IconButton >
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <div className="buttonAnnuler">
          <Button onClick={(e) => returnToHomeAdmin()} variant="outlined">retour</Button>
        </div>
      </div>
    );
  } else if (admin === 1) {
    return (
      <div>

        <NavBar />

        <h2>Profil</h2>
        <div className="profilStudent">
          <ul>
            <li> Prénom : {oneStudent.firstName}</li>
            <li>Nom : {oneStudent.lastName}</li>
            <li>Email : {oneStudent.email}</li>
            <li>Genre : {oneStudent.gender}</li>
            <li>Classe : {oneStudent.schoolLevel.level}</li>
            <li>Téléphone : {oneStudent.phoneNumber}</li>
          </ul>
        </div>
        <div className="buttonAnnuler">
          <Button onClick={(e) => {
            setAdmin(0)
            setOneStudent([])
          }} variant="outlined">retour</Button>
        </div>
      </div>
    )
  }
}


