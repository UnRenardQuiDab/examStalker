import useWebSocket from 'react-use-websocket';
import './App.css';
import Line from './components/Line';
import { useEffect, useState } from 'react';
import Menu from './components/Menu';
import { useExams } from './context/useExams';
import { Center, Spinner, Text } from '@chakra-ui/react';

function App() {

  const { examToStalk, ws } = useExams();

  const [users, setUsers] = useState([]);

  const initUsers = (newUsers) => {
    setUsers(newUsers);
  };

  const updateUser = (updateUsers) => {
    let newUsers = [...users];
    updateUsers.forEach(user => {
      if (user.type === "begin") {
        newUsers.push({login: user.login, grade: user.grade});
      }
      else if (user.type === "update") {
        const usr = newUsers.find((u) => u.login === user.login);
        if (usr) {
          usr.grade = user.grade;
        }
      }
      else if (user.type === "end") {
        let usr = newUsers.find((u) => u.login === user.login);
        if (usr) {
          usr.grade = user.grade;
          usr.closed_at = user.closed_at;
          usr.needAnimation = true;
        }
      }
    });
    setUsers(newUsers);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--nb-of-players', users.length);
  }, [users]);

  useWebSocket(ws, {
    onMessage: (msg) => {
      if (msg.data) {
        const data = JSON.parse(msg.data);
        if (data.type === 'welcome') {
          initUsers(data.payload);
        }
        else if (data.type === 'update') {
          updateUser(data.payload);
        }
      }
    },
    shouldReconnect: (closeEvent) => true,
  });

  return (
      <div className="App">
        <Menu />
        <h1>{examToStalk}</h1>
        {
          users.length > 0 ?
          <div className='LineList'>
            {users.map((user, index) => (
              <Line
                key={index+user.login} login={user.login} grade={user.grade}
                state={user.closed_at && user.grade === 100 ? 'win' : (user.closed_at ? 'loose' : 'ongoing') }
                animated={user.needAnimation}
                image={user.image}
              />
            ))}
          </div> :
          <Center
            w="100%"
            h="100%"
            flexDirection="column"
            gap='5vh'
            color="white"
          >
            <Text fontSize="xl" fontWeight='bold'>No users connected</Text>
            <Spinner size="xl" />
          </Center>
        }
      </div>
  );
}

export default App;
