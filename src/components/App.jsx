import user from 'components/Profile/user.json'
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <div
      style={{padding: 30,
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101'
      }}
    >
<Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
    </div>
  );
};
