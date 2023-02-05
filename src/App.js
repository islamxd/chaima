
import { Box, Breadcrumbs, Button, Chip, Container, Divider, Input, TextField, Typography } from "@mui/material";
import React from "react";
import "./App.css";
import { getUsers } from "./dbc";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

function App() {
  const [users, setusers] = React.useState(undefined);
  const [user, setuser] = React.useState(undefined);
  const [mat, setmat] = React.useState("");
  const load = async () => {
    const data = await getUsers();
    setusers([...data]);

  }

  function yesno() {
    const db = getFirestore();
    const docRef = doc(db, "users", "g2PjqTepAaHxsBXbPkcv");
    const data = {
      yes: "visite"
    };
    updateDoc(docRef, data)
      .then(docRef => {
        console.log("A New Document Field has been added to an existing document");
      })
      .catch(error => {
        console.log(error);
      })


  }
  function noyes() {
    const db = getFirestore();
    const docRef = doc(db, "users", "g2PjqTepAaHxsBXbPkcv");
    const data = {
      no: "visite"
    };
    updateDoc(docRef, data)
      .then(docRef => {
        console.log("A New Document Field has been added to an existing document");
      })
      .catch(error => {
        console.log(error);
      })


  }


  const loaduserData = () => {
    const _this = users.filter((u) => u.mat === mat);


    if (_this && _this.length > 0) {
      setuser(_this[0])


    } else {
      setuser('not')

    }
    if (user.mat == '181831083981') {
      setuser('love')

      const db = getFirestore();
      const docRef = doc(db, "users", "g2PjqTepAaHxsBXbPkcv");
      const data = {
        code: "visite"
      };
      updateDoc(docRef, data)
        .then(docRef => {
          console.log("A New Document Field has been added to an existing document");
        })
        .catch(error => {
          console.log(error);
        })


    }
  };

  React.useEffect(() => {
    load();
  }, []);

  return (
    <Container className="App">
      <Box component="form" onSubmit={loaduserData} noValidate sx={{ mt: 1, xs: 12, md: 6, m: 8 }}>

        <TextField
          margin="normal"
          required
          name="email"
          fullWidth
          autoFocus
          onChange={e => setmat(e.target.value)}
        />

        <Button onClick={loaduserData}> view my note</Button>
      </Box>
      <Divider />

      {user?.max ?

        <Box>
          <Typography variant="h5" m={4}>
            {" HI " + user.name}

          </Typography>

          <Typography variant="h6" m={4}>Your min note is :
          </Typography>

          <Typography variant="h2" m={4}>
            {" " + user.min}

          </Typography>
          <Typography variant="h6" m={4}>Your max note is :
          </Typography>

          <Typography variant="h2" m={4}>
            {" " + user.max}

          </Typography>

        </Box>
        : ""}
      {
        user == 'not' ?
          <Typography variant="h6" m={4}>
            إما أن يكون هناك خطأ في رقم التسجيل أو أن اسمك غير مسجل في قاعدة البيانات عندنا يرجى  التأكد من رقم التسجيل
            أو الإتصال بنا
          </Typography>
          : ""
      }
      {
        user == 'love' ?
          <Box>
            <Typography variant="h6" m={4}>
              i love you

            </Typography>
            <Typography variant="h6" m={4}>
              بصراحة السيت هذا كامل مخدوم على جال باش نقلك راكي عاجبتيني نقدرو نكونو مع بعض ؟

            </Typography>
            <Button onClick={yesno}> yes</Button>
            <Button onClick={noyes}> No</Button>

          </Box>






          : ""
      }





    </Container>

  );
}

export default App;
