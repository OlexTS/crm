import ActiveLabel from './components/ActiveLabel';
import NotActiveLabel from './components/NotActiveLabel';

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not active</NotActiveLabel>
    </div>
  );
}
